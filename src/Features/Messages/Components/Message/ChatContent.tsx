import { useEffect, useRef } from "react";
import { useGetChatConversation } from "../../Hooks/useGetChatConversation";
import useSignalR from "../../Hooks/useSignalR";
import { BASE_URL } from "../../Utils/Api";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import { TeacherTextMessage } from "./TextMessage";
import { useChat } from "../../Contexts/ShareDataMessages";
import { Lock, MessageCircle } from "lucide-react";

const SelectChatPanel = () => (
  <div className="flex flex-col items-center justify-center h-full w-full bg-[#F3F6FF] select-none">
    {/* Illustration */}
    <div className="relative flex items-center justify-center mb-8">
      <div className="absolute w-[200px] h-[200px] rounded-full bg-[#525FE1]/8 animate-pulse" />
      <div className="absolute w-[150px] h-[150px] rounded-full bg-[#525FE1]/10" />
      <div className="relative w-[130px] h-[130px] flex items-center justify-center">
        {/* Decorative bubbles */}
        <div className="absolute left-0 top-4 w-[48px] h-[32px] bg-white rounded-t-[12px] rounded-br-[12px] shadow-md flex items-center justify-center gap-[4px] px-2">
          <div className="w-[5px] h-[5px] rounded-full bg-[#525FE1]/40" />
          <div className="w-[12px] h-[4px] rounded-full bg-[#525FE1]/40" />
          <div className="w-[7px] h-[4px] rounded-full bg-[#525FE1]/25" />
        </div>
        <div className="absolute right-0 top-12 w-[52px] h-[32px] bg-[#525FE1] rounded-t-[12px] rounded-bl-[12px] shadow-md flex items-center justify-center gap-[4px] px-2">
          <div className="w-[7px] h-[4px] rounded-full bg-white/50" />
          <div className="w-[12px] h-[4px] rounded-full bg-white/60" />
          <div className="w-[5px] h-[4px] rounded-full bg-white/40" />
        </div>
        {/* Center icon */}
        <div className="w-[68px] h-[68px] rounded-[18px] bg-white shadow-[0_8px_32px_rgba(82,95,225,0.18)] flex items-center justify-center">
          <MessageCircle className="w-[32px] h-[32px] text-[#525FE1]" strokeWidth={1.8} />
        </div>
      </div>
    </div>

    {/* Text */}
    <div className="flex flex-col items-center gap-2 px-6 max-w-[340px] text-center">
      <h2 className="font-['Poppins'] font-bold text-[22px] leading-[30px] text-[#2A2D34]">
        Select a chat
      </h2>
      <p className="font-['Poppins'] font-normal text-[13px] leading-[20px] text-[#6D7588]">
        Choose a conversation from the left to start messaging.
      </p>
      {/* Encryption badge */}
      <div className="flex items-center gap-[6px] mt-3 px-3 py-[5px] bg-[#525FE1]/8 rounded-full">
        <Lock className="w-[10px] h-[10px] text-[#525FE1]" strokeWidth={2.5} />
        <span className="font-['Poppins'] font-medium text-[10px] text-[#525FE1]">
          Your personal messages are end-to-end encrypted
        </span>
      </div>
    </div>
  </div>
);

const ChatContent = () => {
  const token = `${localStorage.getItem("token")}`;
  const { refetch } = useGetChatConversation();
  const signalR = useSignalR(token, BASE_URL, refetch);
  const {
    allMessages,
    page,
    setPage,
    hasMore,
    conversationId,
    otherUserId,
    selectedConversation,
  } = useChat();
  const chatRef = useRef<HTMLDivElement>(null);
  const prevScrollHeight = useRef(0);
  const isLoadingHistory = useRef(false);
  const prevMessagesLength = useRef(0);
  const prevConversationId = useRef<string | null>(null);

  const hasActiveChat = !!(conversationId || otherUserId || selectedConversation);

  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (el.scrollTop <= 5 && hasMore && !isLoadingHistory.current) {
        prevScrollHeight.current = el.scrollHeight;
        isLoadingHistory.current = true;
        setPage(page + 1);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [page, setPage, hasMore]);

  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;

    if (conversationId !== prevConversationId.current) {
      el.scrollTop = el.scrollHeight;
      prevConversationId.current = conversationId;
      prevMessagesLength.current = allMessages.length;
      isLoadingHistory.current = false;
      return;
    }

    if (allMessages.length > prevMessagesLength.current) {
      if (isLoadingHistory.current) {
        el.scrollTop = el.scrollHeight - prevScrollHeight.current;
        isLoadingHistory.current = false;
      } else {
        el.scrollTo({
          top: el.scrollHeight,
          behavior: "smooth",
        });
      }
    }

    if (isLoadingHistory.current && !hasMore) {
      isLoadingHistory.current = false;
    }

    prevMessagesLength.current = allMessages.length;
  }, [allMessages, conversationId, hasMore]);

  /* ── No conversation selected → WhatsApp-style placeholder ── */
  if (!hasActiveChat) {
    return (
      <section className="ChatContent border border-[#C4C5D94D] relative bg-[#F3F6FF] h-[calc(100vh-66px)]">
        <SelectChatPanel />
      </section>
    );
  }

  return (
    <>
      <section className="ChatContent border border-[#C4C5D94D] relative bg-[#F3F6FF] h-[calc(100vh-66px)]">
        <ChatHeader />
        <div
          className="p-[32px] max-h-[calc(100vh-200px)] h-[calc(100vh-200px)] overflow-y-auto"
          ref={chatRef}
        >
          <div className="mb-6"></div>
          <TeacherTextMessage messages={allMessages} />
        </div>
        <ChatInput connection={signalR.connection} />
      </section>
    </>
  );
};

export default ChatContent;
