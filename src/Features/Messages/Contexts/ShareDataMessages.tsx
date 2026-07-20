import { createContext, useContext, useState, useRef, useEffect, type ReactNode } from "react";
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
  hasUnreadChat: boolean;
  setHasUnreadChat: (val: boolean) => void;
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
  const [hasUnreadChat, setHasUnreadChat] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const token = `${localStorage.getItem("token")}`;

  const activeConversationIdRef = useRef<string | null>(null);
  useEffect(() => {
    activeConversationIdRef.current = conversationId;
  }, [conversationId]);

  const signalR = useSignalR(token, BASE_URL, () => { }, setHasUnreadChat, activeConversationIdRef);

  const isGroup =
    selectedConversation &&
    (selectedConversation as any).isGroup === true;

  const filteredSignalRMessages = isGroup
    ? signalR.groupMessages[Number(conversationId)] || []
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
          const msgKey = msg.messageId ?? msg.id;
          const mKey = m.messageId ?? m.id;
          if (msgKey && mKey) return String(msgKey) === String(mKey);

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
        hasUnreadChat,
        setHasUnreadChat,
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
