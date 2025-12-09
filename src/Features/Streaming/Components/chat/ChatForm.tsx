import resource from "../../../../assets/icons/resources.svg";
import emoji from '../../../../assets/icons/emoj.svg';
import sendIcon from '../../../../assets/icons/send.svg';
import teacher from '../../../../assets/images/mester.jpg'; 
import moz from '../../../../assets/images/moz.jpg'; 
import { useChat, useLocalParticipant } from "@livekit/components-react";
import { useState, useEffect, useRef } from "react";

const ChatForm = () => {
  const { send, isSending, chatMessages } = useChat();
  const { localParticipant } = useLocalParticipant();
  const [message, setMessage] = useState("");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const onSend = async () => {
    if (!message.trim() || isSending) return;
    await send(message);
    setMessage("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div className="w-[400px] h-[550px] rounded-[20px] py-[24px] px-[16px] bg-[#393D44] flex flex-col">
      
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
        {chatMessages.length === 0 && (
          <p className="text-gray-400 text-center mt-10">No messages yet...</p>
        )}

        {chatMessages.map((m, index) => {
          const isMe = m.from?.identity === localParticipant?.identity;
          
          return (
            <div 
              key={index} 
              className={`mb-7 flex gap-[12px] ${isMe ? "justify-end" : "justify-start"}`}
            >
              {!isMe && (
                <img className="w-[40px] h-[40px] rounded-[39px] object-cover" src={teacher} alt="sender" />
              )}

              <div className={`w-[221px] text-white ${isMe ? "text-end" : "text-start"}`}>
                
                <div className={`flex gap-[12px] w-[164px] items-center ${isMe ? "ml-auto justify-end" : ""}`}>
                  <p className="font-medium leading-[13px] text-[16px] truncate">
                    {m.from?.identity || "Unknown"}
                  </p>
                  <p className="font-medium text-[#D1D5DB] leading-[13px] text-[10px]">
                    {new Date(m.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>

                <div
                  className={`
                    mt-3 p-[16px] text-white 
                    w-fit max-w-[200px]       
                    h-auto max-h-[200px]      
                    overflow-y-auto          
                    break-words               
                    
                    ${isMe 
                      ? "bg-[#525FE1] rounded-br-[42px] rounded-l-[42px] ml-auto text-right" 
                      : "bg-[#454950] rounded-[42px] text-left"
                    }
                  `}
                >
                  {m.message}
                </div>
              </div>

              {isMe && (
                <img className="w-[40px] h-[40px] rounded-[39px] object-cover" src={moz} alt="me" />
              )}
            </div>
          );
        })}
        
        <div ref={messagesEndRef} />
      </div>
      <div className="w-full h-[66px] flex items-center justify-center mt-2 shrink-0">
        <div className="bg-[#454950] w-[302px] h-[48px] rounded-[42px] flex items-center px-4 gap-3">
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
          className={`w-[50px] h-[50px] rounded-full flex justify-center items-center ms-[16px] bg-[#525FE1] transition-transform active:scale-95 ${!message.trim() ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <img src={sendIcon} className="w-[18px] h-[18px]" alt="send" />
        </div>
      </div>

    </div>
  );
};

export default ChatForm;