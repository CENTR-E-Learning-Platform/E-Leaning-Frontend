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
  const [selectedConversation, setSelectedConversation] = useState<object | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const token = `${localStorage.getItem("token")}`;
  const signalR = useSignalR(token, BASE_URL, () => {});

  const filteredSignalRMessages = signalR.messages.filter(
    (msg: any) => String(msg.conversationId) === String(conversationId)
  );

  const allMessages = [...(chatData || []), ...filteredSignalRMessages]
    .filter(
      (msg, index, self) =>
        index ===
        self.findIndex((m) => {
          if (msg.id && m.id) return m.id === msg.id;

          return (
            m.content === msg.content &&
            m.senderId === msg.senderId &&
            Math.abs(
              new Date(m.sentAt || m.createdAt || 0).getTime() -
                new Date(msg.sentAt || msg.createdAt || 0).getTime(),
            ) < 1000
          );
        }),
    )
    .sort(
      (a, b) =>
        new Date(a.sentAt || a.createdAt || 0).getTime() -
        new Date(b.sentAt || b.createdAt || 0).getTime(),
    );

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
        signalR
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
