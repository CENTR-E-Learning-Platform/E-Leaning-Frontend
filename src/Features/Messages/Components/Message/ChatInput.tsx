import { Paperclip, Smile, SendHorizontal } from "lucide-react";
import { useRef, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { useChat } from "../../Contexts/ShareDataMessages";
import EmojiPicker from "./EmojiPicker";
type Props = {
  connection: signalR.HubConnection | null;
};

const ChatInput = ({ connection }: Props) => {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const { otherUserId, conversationId, setChatData, selectedConversation } = useChat();
  const isGroup = selectedConversation && ('teacherId' in selectedConversation || 'name' in selectedConversation);
  const isTyping = useRef<any>(null);
  const sendMessage = async () => {
    if (!message.trim()) return;
    if (!connection || connection.state !== "Connected") return;

    const currentUserId = localStorage.getItem("currentUserId");
    const { fullName } = JSON.parse(localStorage.getItem("userData") || "{}");

    if (isGroup) {
      connection.invoke("SendGroupTypingIndicator", {
        GroupChatId: conversationId,
        IsTyping: false,
      });
    } else {
      connection.invoke("SendTypingIndicator", {
        RecipientId: otherUserId,
        IsTyping: false,
      });
    }

    if (isTyping.current) {
      clearTimeout(isTyping.current);
      isTyping.current = null;
    }

    const tempMessage = {
      id: `temp-${Date.now()}`,
      content: message,
      senderId: currentUserId,
      senderName: fullName,
      conversationId: conversationId,
      sentAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };

    setChatData((prev: any) => [...(prev || []), tempMessage]);

    try {
      if (isGroup) {
        await connection.invoke("SendGroupMessage", {
          GroupChatId: conversationId,
          Content: message,
        });
      } else {
        await connection.invoke("SendMessage", {
          RecipientId: otherUserId,
          Content: message,
        });
      }
    } catch (err) {
      console.error("Send failed", err);
      setChatData((prev: any) =>
        (prev || []).filter((m: any) => m.id !== tempMessage.id),
      );
    }

    setMessage("");
  };

  const handleTyping = () => {
    if (connection?.state !== "Connected") return;

    if (!isTyping.current) {
      if (isGroup) {
        connection.invoke("SendGroupTypingIndicator", {
          GroupChatId: conversationId,
          IsTyping: true,
        });
      } else {
        connection.invoke("SendTypingIndicator", {
          RecipientId: otherUserId,
          IsTyping: true,
        });
      }
      isTyping.current = true;
    }

    if (isTyping.current) {
      clearTimeout(isTyping.current);
    }

    isTyping.current = setTimeout(() => {
      if (isGroup) {
        connection.invoke("SendGroupTypingIndicator", {
          GroupChatId: conversationId,
          IsTyping: false,
        });
      } else {
        connection.invoke("SendTypingIndicator", {
          RecipientId: otherUserId,
          IsTyping: false,
        });
      }
      isTyping.current = false;
    }, 1000);
  };

  return (
    <div className="relative overflow-visible left-0 right-0 bottom-0 flex h-[60px] w-[100%] flex-row items-center bg-white px-[22.8px] gap-[15.2px] shadow-[0px_-4px_20px_rgba(0,19,85,0.03)]">
      <button className="flex h-[32.4px] w-[27px] flex-none items-center justify-center p-[7.2px]">
        <Paperclip size={18} color="#747688" />
      </button>

      <div className="relative">
        <div
          className={`absolute bottom-[45px] left-1/2 -translate-x-1/2 z-50 origin-bottom transition-all duration-200 ease-out
    ${
      showEmoji
        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
        : "opacity-0 scale-95 translate-y-2 pointer-events-none"
    }`}
        >
          <EmojiPicker
            onSelect={(emoji) => {
              setMessage((prev) => prev + emoji);
            }}
          />
        </div>

        <button
          onClick={() => setShowEmoji((prev) => !prev)}
          className="flex cursor-pointer h-[32.4px] w-[34.2px] flex-none items-center justify-center p-[7.2px]"
        >
          <Smile size={19} color="#747688" />
        </button>
      </div>

      <div className="flex h-[52.2px] flex-1 flex-col items-start">
        <div className="flex h-[52.2px] w-full items-center rounded-[15.2px] bg-[#F1F4F9] px-[22.8px] py-[14.4px]">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              handleTyping();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            className="w-full bg-transparent font-['Poppins'] text-[14.2px] font-normal leading-[20px] text-[#6B7280] outline-none placeholder:text-[#6B7280]"
          />
        </div>
      </div>

      <button
        onClick={sendMessage}
        className="relative flex h-[43.2px] w-[45.6px] flex-none items-center justify-center rounded-[15.2px] bg-[#525FE1] shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)] transition-transform active:scale-95"
      >
        <SendHorizontal size={18} color="#FFFFFF" />
      </button>
    </div>
  );
};

export default ChatInput;
