import resource from "../../../../assets/icons/resources.svg";
import emoji from '../../../../assets/icons/emoj.svg';
import sendIcon from '../../../../assets/icons/send.svg';
import teacher from '../../../../assets/images/mester.jpg'; 

import { useChat, useLocalParticipant } from "@livekit/components-react";
import { useState, useEffect, useRef } from "react";
import { BASE_URL } from "../../Utils/Apis";

const ChatForm = () => {
  const { send, isSending, chatMessages } = useChat();
  const { localParticipant } = useLocalParticipant();
  const [message, setMessage] = useState("");
  
  const [allMessages, setAllMessages] = useState<any[]>(() => {
    const saved = localStorage.getItem("chat_history");
    return saved ? JSON.parse(saved) : [];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatMessages.length > 0) {
      setAllMessages((prev) => {
        const newMessages = [...prev, ...chatMessages];
        const unique = Array.from(new Map(newMessages.map(m => [m.id || m.timestamp, m])).values());
        localStorage.setItem("chat_history", JSON.stringify(unique));
        return unique;
      });
    }
  }, [chatMessages]);

  const onSend = async () => {
    if (!message.trim() || isSending) return;
    await send(message);
    setMessage("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allMessages]);

  return (
    <div className="w-[400px] h-full rounded-[20px] py-[24px] px-[15px] bg-[#393D44] flex flex-col">
      
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
        {allMessages.length === 0 && (
          <p className="text-gray-400 text-center mt-10">No messages yet...</p>
        )}

        {allMessages.map((m, index) => {
          const isMe = m.from?.identity === localParticipant?.identity;
          
          return (
            <div 
              key={m.id || index} 
              className={`mb-6 flex gap-[12px] ${isMe ? "justify-end" : "justify-start"}`}
            >
              {!isMe && (
                <img className="w-[40px] h-[40px] rounded-full object-cover" src={teacher} alt="sender" />
              )}

              <div className={`max-w-[70%] text-white ${isMe ? "text-end" : "text-start"}`}>
                
                <div className={`flex gap-[8px] items-center mb-1 ${isMe ? "justify-end" : ""}`}>
                  <p className="font-medium text-[14px] truncate">
                    {m.from?.name || "Unknown"}
                  </p>
                  <p className="text-[#D1D5DB] text-[10px]">
                    {new Date(m.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>

                <div
                  className={`
                    p-[12px] text-white text-sm
                    w-fit h-auto break-words 
                    ${isMe 
                      ? "bg-[#525FE1] rounded-br-none rounded-[18px] ml-auto" 
                      : "bg-[#454950] rounded-bl-none rounded-[18px]"
                    }
                  `}
                >
                  {m.message}
                </div>
              </div>

              {isMe && (
                <img 
                  className="w-[40px] h-[40px] rounded-full object-cover" 
                  src={m.from?.attributes?.["UserImage"] ? `${BASE_URL}/${m.from.attributes["UserImage"]}` : teacher} 
                  alt="me" 
                />
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className="w-full pt-4 flex items-center justify-between shrink-0">
        <div className="bg-[#454950] flex-1 h-[48px] rounded-[42px] flex items-center px-4 gap-3">
          <img src={resource} className="w-[14px] h-[16px] cursor-pointer" alt="icon" />
          <div className="w-[1px] h-[16px] bg-[#6B7280]"></div>
          
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSend(); 
            }}
            disabled={isSending}
            placeholder="Message"
            className="bg-transparent text-[#D1D5DB] text-sm outline-none w-full"
          />
          <img src={emoji} className="w-[14px] h-[16px] cursor-pointer" alt="icon" />
        </div>
        
        <div 
          onClick={onSend}
          className={`w-[48px] h-[48px] rounded-full flex justify-center items-center ms-3 bg-[#525FE1] transition-transform active:scale-95 ${!message.trim() ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <img src={sendIcon} className="w-[18px] h-[18px]" alt="send" />
        </div>
      </div>

    </div>
  );
};

export default ChatForm;