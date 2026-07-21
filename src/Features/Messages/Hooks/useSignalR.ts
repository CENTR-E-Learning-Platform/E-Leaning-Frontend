import { useEffect, useRef, useState } from "react";
import * as signalR from "@microsoft/signalr";
import notifySound from "../../../assets/audio/notify.mp3";
const audio = new Audio(notifySound);
const lastSoundPlayedTimePerSender = new Map<string, number>();

const playNotificationSound = (senderId: string) => {
  const currentUserId = localStorage.getItem("currentUserId");
  if (String(senderId) === String(currentUserId)) return;

  const now = Date.now();
  const lastTime = lastSoundPlayedTimePerSender.get(String(senderId)) || 0;

  // 60 seconds cooldown per sender
  if (now - lastTime > 60000) {
    audio.currentTime = 0;
    audio.play().catch(() => { });
    lastSoundPlayedTimePerSender.set(String(senderId), now);
  }
};

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
  conversationId?: number;
};

type GroupMessage = {
  messageId?: number;
  senderId: string;
  senderName: string;
  content: string;
  groupChatId: number;
  sentAt?: string | number;
};

type TypingUser = {
  senderId: string;
  senderName: string;
  groupChatId: number;
};

type UseSignalRReturn = {
  connection: signalR.HubConnection | null;
  messages: Message[];
  typingUsers: Record<string, string>;
  groupMessages: Record<number, GroupMessage[]>;
  groupTypingUsers: TypingUser[];
};

export default function useSignalR(
  token: string,
  BASE_URL: string,
  refetch: () => void,
  setHasUnreadChat?: (val: boolean) => void,
  activeConversationIdRef?: React.MutableRefObject<string | null>
): UseSignalRReturn {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null,
  );

  const [messages, setMessages] = useState<Message[]>([]);
  const [typingUsers, setTypingUsers] = useState<Record<string, string>>({});
  const [groupMessages, setGroupMessages] = useState<
    Record<number, GroupMessage[]>
  >({});
  const [groupTypingUsers, setGroupTypingUsers] = useState<TypingUser[]>([]);
  const refetchRef = useRef(refetch);
  const typingTimeouts = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

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
            Math.abs(getMessageTime(m) - getMessageTime(msg)) < 5000,
        );

        if (exists) return prev;

        // Play sound and show badge if message is from someone else
        const currentUserId = localStorage.getItem("currentUserId");
        if (String(msg.senderId) !== String(currentUserId)) {
          const isActiveChat = activeConversationIdRef?.current && String(activeConversationIdRef.current) === String(msg.conversationId);

          if (!isActiveChat) {
            playNotificationSound(msg.senderId);
            if (setHasUnreadChat && window.location.pathname !== '/messages') {
              setHasUnreadChat(true);
            }
          }
        }

        return [...prev, msg];
      });
    });

    connect.on("ReceiveTypingIndicator", (data: TypingIndicator) => {
      const targetId = String(data.senderId);

      if (typingTimeouts.current[targetId]) {
        clearTimeout(typingTimeouts.current[targetId]);
        delete typingTimeouts.current[targetId];
      }

      setTypingUsers((prev) => {
        if (data.isTyping) {
          typingTimeouts.current[targetId] = setTimeout(() => {
            setTypingUsers((curr) => {
              const next = { ...curr };
              delete next[targetId];
              return next;
            });
          }, 3000);
          return { ...prev, [targetId]: data.senderName };
        } else {
          const next = { ...prev };
          delete next[targetId];
          return next;
        }
      });
    });

    connect.on("MessageRead", () => { });

    connect.on("RecieveGroupMessage", (raw) => {
      const msg: GroupMessage = {
        messageId: raw.messageId ?? raw.MessageId,
        senderId: raw.senderId ?? raw.SenderId ?? "",
        senderName: raw.senderName ?? raw.SenderName ?? "",
        content: raw.content ?? raw.Content ?? "",
        groupChatId: raw.groupChatId ?? raw.GroupChatId ?? 0,
        sentAt: raw.sentAt ?? raw.SentAt,
      };
      setGroupMessages((prev) => {
        const group = prev[msg.groupChatId] || [];
        const exists = group.some(
          (m) =>
            m.content === msg.content &&
            m.senderId === msg.senderId &&
            Math.abs(getMessageTime(m) - getMessageTime(msg)) < 5000,
        );

        if (exists) return prev;

        const currentUserId = localStorage.getItem("currentUserId");
        if (String(msg.senderId) !== String(currentUserId)) {
          const isActiveChat = activeConversationIdRef?.current && String(activeConversationIdRef.current) === String(msg.groupChatId);

          if (!isActiveChat) {
            playNotificationSound(msg.groupChatId.toString());
            if (setHasUnreadChat && window.location.pathname !== '/messages') {
              setHasUnreadChat(true);
            }
          }
        }

        return {
          ...prev,
          [msg.groupChatId]: [...group, msg],
        };
      });
    });

    connect.on("ReceiveGroupTypingIndicator", (data) => {
      const timerKey = `group_${data.senderId}_${data.groupChatId}`;
      if (typingTimeouts.current[timerKey]) {
        clearTimeout(typingTimeouts.current[timerKey]);
        delete typingTimeouts.current[timerKey];
      }

      setGroupTypingUsers((prev) => {
        if (data.isTyping) {
          typingTimeouts.current[timerKey] = setTimeout(() => {
            setGroupTypingUsers((curr) => curr.filter((u) => u.senderId !== data.senderId));
          }, 3000);
          const exists = prev.some((u) => u.senderId === data.senderId);
          if (exists) return prev;
          return [...prev, data];
        }

        return prev.filter((u) => u.senderId !== data.senderId);
      });
    });

    connect.on("GroupMessageSeen", () => { });

    connect
      .start()
      .then(() => { })
      .catch(() => { });

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
    typingUsers,
    groupMessages,
    groupTypingUsers,
  };
}
