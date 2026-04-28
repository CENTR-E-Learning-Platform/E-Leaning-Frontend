import { useEffect, useRef } from "react";
import { useGetChatConversation } from "../../Hooks/useGetChatConversation";
import useSignalR from "../../Hooks/useSignalR";
import { BASE_URL } from "../../Utils/Api";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import { TeacherTextMessage } from "./TextMessage";
import { useChat } from "../../Contexts/ShareDataMessages";

const ChatContent = () => {
  const token = `${localStorage.getItem("token")}`;
  const { refetch } = useGetChatConversation();
  const signalR = useSignalR(token, BASE_URL, refetch);
  const { allMessages, page, setPage, hasMore } = useChat();
  const chatRef = useRef<HTMLDivElement>(null);
  const prevScrollHeight = useRef(0);
  const isLoadingMore = useRef(false);

  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (el.scrollTop === 0 && hasMore) {
        prevScrollHeight.current = el.scrollHeight;
        isLoadingMore.current = true;
        setPage(page + 1);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [page, setPage, hasMore]);

  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;

    if (isLoadingMore.current) {
      requestAnimationFrame(() => {
        el.scrollTop = el.scrollHeight - prevScrollHeight.current;
        isLoadingMore.current = false;
      });
    } else {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [allMessages]);

  return (
    <>
      <section className="ChatContent border border-[#C4C5D94D] relative bg-[#F3F6FF] w-[800px] h-[calc(100vh-66px)]">
        <ChatHeader />
        <div
          className="p-[32px] max-h-[calc(100vh-200px)] h-[calc(100vh-200px)] overflow-y-auto"
          ref={chatRef}
        >
          {/* <DateDivider/> */}
          <div className="mb-6"></div>
          <TeacherTextMessage messages={allMessages} />
        </div>
        <ChatInput connection={signalR.connection} />
      </section>
    </>
  );
};

export default ChatContent;
