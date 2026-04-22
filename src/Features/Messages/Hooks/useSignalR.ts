import { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";


type Message = {
  senderId: string;
  senderName: string;
  content: string;
  conversationId: number;
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
};


export default function useSignalR(
  token: string,
  BASE_URL: string,
  refetch: () => void
): UseSignalRReturn {
  const [connection, setConnection] =
    useState<signalR.HubConnection | null>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [typingUser, setTypingUser] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;

    const connect = new signalR.HubConnectionBuilder()
      .withUrl(`${BASE_URL}/hubs/chat`, {
        accessTokenFactory: () => token,
      })
      .withAutomaticReconnect()
      .build();

    connect.on("ReceiveMessage", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
       refetch();
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
      connect.stop();
    };
  }, [token, BASE_URL]);

  return { connection, messages, typingUser };
}