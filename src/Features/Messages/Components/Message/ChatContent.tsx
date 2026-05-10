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
  const { allMessages, page, setPage, hasMore , conversationId  } = useChat();
  const chatRef = useRef<HTMLDivElement>(null);
  const prevScrollHeight = useRef(0);
  const isLoadingHistory = useRef(false);
  const prevMessagesLength = useRef(0);
  const prevConversationId = useRef<string | null>(null);

  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;

    const handleScroll = () => {
      // Use a small buffer (< 5px) instead of exact 0 to handle sub-pixel rendering issues
      if (el.scrollTop <= 5 && hasMore && !isLoadingHistory.current) {
        prevScrollHeight.current = el.scrollHeight;
        isLoadingHistory.current = true;
        setPage(page + 1);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [page, setPage, hasMore]);

  // Handle scroll position after DOM updates
  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;

    // Reset on conversation change
    if (conversationId !== prevConversationId.current) {
      el.scrollTop = el.scrollHeight;
      prevConversationId.current = conversationId;
      prevMessagesLength.current = allMessages.length;
      isLoadingHistory.current = false;
      return;
    }

    // Handle new messages or loaded history
    if (allMessages.length > prevMessagesLength.current) {
      if (isLoadingHistory.current) {
        // History was loaded, restore scroll position
        el.scrollTop = el.scrollHeight - prevScrollHeight.current;
        isLoadingHistory.current = false;
      } else {
        // New message arrived, scroll to bottom
        el.scrollTo({
          top: el.scrollHeight,
          behavior: "smooth",
        });
      }
    }

    // Failsafe: if we tried to load history but there was no more
    if (isLoadingHistory.current && !hasMore) {
      isLoadingHistory.current = false;
    }

    prevMessagesLength.current = allMessages.length;
  }, [allMessages, conversationId, hasMore]);

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
        {<ChatInput connection={signalR.connection} />}
      </section>
    </>
  );
};

export default ChatContent;
