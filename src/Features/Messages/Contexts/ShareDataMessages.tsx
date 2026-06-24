import { createContext, useContext, useState, type ReactNode } from "react";
import { BASE_URL } from "../Utils/Api";
import useSignalR from "../Hooks/useSignalR";

type ChatContextType = {
  conversationId: string | null;
  setConversationId: (id: string | null) => void;
  chatData: any;
  setChatData: (data: any) => void;
  otherUserId: any;
  allMessages: any[];
  setOtherUserId: (id: any) => void;
  page: number;
  setPage: (page: number) => void;
  hasMore: boolean;
  setHasMore: (hasMore: boolean) => void;
  selectedConversation: object | null;
  setSelectedConversation: (conversation: object | null) => void;
  signalR: any;
};

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [chatData, setChatData] = useState<any[]>([]);
  const [otherUserId, setOtherUserId] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [selectedConversation, setSelectedConversation] = useState<
    object | null
  >(null);
  const [hasMore, setHasMore] = useState(true);
  const token = `${localStorage.getItem("token")}`;
  const signalR = useSignalR(token, BASE_URL, () => { });

  const isGroup =
    selectedConversation &&
    ("teacherId" in selectedConversation || "name" in selectedConversation);

  const filteredSignalRMessages = isGroup
    ? (signalR.groupMessages as any)[conversationId as any] || []
    : signalR.messages.filter(
      (msg: any) => String(msg.conversationId) === String(conversationId),
    );

  const getMessageTime = (msg: any) => {
    const timestamp = msg.sentAt || msg.createdAt || msg.timestamp || 0;
    return new Date(timestamp).getTime();
  };

  const allMessages = [...(chatData || []), ...filteredSignalRMessages]
    .filter(
      (msg, index, self) =>
        index ===
        self.findIndex((m) => {
          // Both have IDs → compare by ID only
          if (msg.id && m.id) return String(msg.id) === String(m.id);

          // At least one is a SignalR message (no id yet) →
          // treat as duplicate if same sender + content + within 10 s
          return (
            String(m.senderId) === String(msg.senderId) &&
            m.content === msg.content &&
            Math.abs(getMessageTime(m) - getMessageTime(msg)) < 10_000
          );
        }),
    )
    .sort((a, b) => getMessageTime(a) - getMessageTime(b));

  return (
    <ChatContext.Provider
      value={{
        conversationId,
        setConversationId,
        chatData,
        setChatData,
        otherUserId,
        setOtherUserId,
        allMessages,
        page,
        setPage,
        hasMore,
        setHasMore,
        selectedConversation,
        setSelectedConversation,
        signalR,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used inside ChatProvider");
  return ctx;
};
