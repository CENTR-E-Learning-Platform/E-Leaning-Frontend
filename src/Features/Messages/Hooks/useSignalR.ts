import { useEffect, useRef, useState } from "react";
import * as signalR from "@microsoft/signalr";

type Message = {
  senderId: string;
  senderName: string;
  content: string;
  conversationId: number;
  sentAt?: string | number;
};

type TypingIndicator = {
  senderId: string;
  senderName: string;
  isTyping: boolean;
};

type UseSignalRReturn = {
  connection: signalR.HubConnection | null;
  messages: Message[];
  typingUser: string | null;
  groupMessages: Record<number, GroupMessage[]>;
  groupTypingUsers: TypingUser[];
  typingConversationId: string | null;
};

type GroupMessage = {
  senderId: string;
  senderName: string;
  content: string;
  groupChatId: number;
  sentAt?: string | number;
};

// type GroupTypingIndicator = {
//   senderId: string;
//   senderName: string;
//   groupChatId: number;
//   isTyping: boolean;
// };

type TypingUser = {
  senderId: string;
  senderName: string;
  groupChatId: number;
};

export default function useSignalR(
  token: string,
  BASE_URL: string,
  refetch: () => void,
): UseSignalRReturn {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null,
  );

  const [messages, setMessages] = useState<Message[]>([]);
  const [typingUser, setTypingUser] = useState<string | null>(null);
  // const [groupMessages, setGroupMessages] = useState<GroupMessage[]>([]);
  const [groupMessages, setGroupMessages] = useState<
    Record<number, GroupMessage[]>
  >({});
  const [groupTypingUsers, setGroupTypingUsers] = useState<TypingUser[]>([]);
  const refetchRef = useRef(refetch);

  const [typingConversationId, setTypingConversationId] = useState<
    string | null
  >(null);

  useEffect(() => {
    refetchRef.current = refetch;
  }, [refetch]);

  useEffect(() => {
    if (!token) return;

    const connect = new signalR.HubConnectionBuilder()
      .withUrl(`${BASE_URL}/hubs/chat`, {
        accessTokenFactory: () => token,
      })
      .withAutomaticReconnect()
      .build();

    const getMessageTime = (message: any) => {
      const timestamp =
        message.sentAt || message.createdAt || message.timestamp || 0;
      return new Date(timestamp).getTime();
    };

    connect.on("ReceiveMessage", (msg: Message) => {
      setMessages((prev) => {
        const exists = prev.some(
          (m) =>
            m.content === msg.content &&
            m.senderId === msg.senderId &&
            Math.abs(getMessageTime(m) - getMessageTime(msg)) < 2000,
        );

        if (exists) return prev;

        return [...prev, msg];
      });
      refetchRef.current();
    });

    connect.on("UserTyping", (userName: string, convId: string) => {
      setTypingUser(userName);
      setTypingConversationId(convId);
    });

    connect.on("ReceiveTypingIndicator", (data: TypingIndicator) => {
      if (data.isTyping) {
        setTypingUser(data.senderName);
      } else {
        setTypingUser(null);
      }
    });

    connect.on("MessageRead", (conversationId: number) => {
      console.log("Read:", conversationId);
    });

    //     Group Chat

    //          ReceiveGroupMessage
    connect.on("RecieveGroupMessage", (msg) => {
      setGroupMessages((prev) => {
        const group = prev[msg.groupChatId] || [];
        const exists = group.some(
          (m) =>
            m.content === msg.content &&
            m.senderId === msg.senderId &&
            Math.abs(getMessageTime(m) - getMessageTime(msg)) < 2000,
        );

        if (exists) return prev;

        return {
          ...prev,
          [msg.groupChatId]: [...group, msg],
        };
      });

      refetchRef.current();
    });

    connect.on("ReceiveGroupTypingIndicator", (data) => {
      setGroupTypingUsers((prev) => {
        if (data.isTyping) {
          const exists = prev.some((u) => u.senderId === data.senderId);
          if (exists) return prev;
          return [...prev, data];
        }

        return prev.filter((u) => u.senderId !== data.senderId);
      });
    });

    connect.on("GroupMessageSeen", (data: any) => {
      console.log("Group Seen:", data);
    });

    connect
      .start()
      .then(() => {
        console.log("Connected ✅");
      })
      .catch((err) => {
        console.error("Connection failed ❌", err);
      });

    setConnection(connect);

    return () => {
      connect.off("ReceiveMessage");
      connect.off("ReceiveTypingIndicator");
      connect.off("MessageRead");
      connect.off("RecieveGroupMessage");
      connect.off("ReceiveGroupTypingIndicator");
      connect.off("GroupMessageSeen");
      connect.stop();
    };
  }, [token, BASE_URL]);

  return {
    connection,
    messages,
    typingUser,
    groupMessages,
    groupTypingUsers,
    typingConversationId,
  };
}
