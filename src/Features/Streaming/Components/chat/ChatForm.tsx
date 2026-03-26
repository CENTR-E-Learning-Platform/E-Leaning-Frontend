import sendIcon from '../../../../assets/icons/send.svg';
import Linkify from 'react-linkify';
import { useChat, useLocalParticipant } from "@livekit/components-react";
import { useState, useEffect, useRef } from "react";
import { BASE_URL } from "../../Utils/Apis";
import '../../style/customScroll.css';
import DefaultImage from "../meeting/DefaultImage";

const ChatForm = () => {
  const { send, isSending, chatMessages } = useChat();
  const { localParticipant } = useLocalParticipant();
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSend = async () => {
    if (!message.trim() || isSending) return;
    await send(message);
    setMessage("");
    inputRef.current?.focus();
  };

  const customLink = (href:any , text:any , key:any)=>(
    <a 
    href={href}
    key={key}
    target="_blank"
    rel="noopener noreferrer" 
    className="underline"
    >
      {text}
    </a>
  )

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-[400px] h-full rounded-[20px] py-[24px] px-[15px] bg-[#393D44] flex flex-col">
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-r">
        {chatMessages.length === 0 && (
          <p className="text-gray-400 text-center mt-10">No messages yet...</p>
        )}

        {chatMessages.map((m, index) => {
          const isMe = m.from?.identity === localParticipant?.identity;
          
          const prevMsg = index > 0 ? chatMessages[index - 1] : null;
          const nextMsg = index < chatMessages.length - 1 ? chatMessages[index + 1] : null;

          const currentMsgTime = new Date(m.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
          const prevMsgTime = prevMsg ? new Date(prevMsg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : null;
          const nextMsgTime = nextMsg ? new Date(nextMsg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : null;

          const isPrevSameUser = prevMsg?.from?.identity === m.from?.identity;
          const isNextSameUser = nextMsg?.from?.identity === m.from?.identity;

          const isFirstInGroup = !isPrevSameUser || prevMsgTime !== currentMsgTime;
          const isLastInGroup = !isNextSameUser || nextMsgTime !== currentMsgTime;

          return (
            <div
              key={index}
              className={`flex gap-[12px] ${isLastInGroup ? "mb-[24px]" : "mb-[4px]"} ${isMe ? "justify-end" : "justify-start"}`}
            >
              {!isMe && (
                isFirstInGroup ? (
                  m.from?.attributes["UserImage"] ? 
                    <img className="w-[40px] h-[40px] rounded-[39px] object-cover shrink-0" src={`${BASE_URL}/${m.from?.attributes["UserImage"]}`} alt="user" /> :
                    <div className="w-[40px] h-[40px] shrink-0">
                      <DefaultImage character={m.from?.name?.toString()?.substring(0,2).toLocaleUpperCase()} />
                    </div>
                ) : (
                  <div className="w-[40px] shrink-0"></div>
                )
              )}

              <div className={`w-[221px] text-white ${isMe ? "text-end" : "text-start"}`}>
                {isFirstInGroup && (
                  <div className={`flex gap-[12px] w-full items-center mb-1 ${isMe ? "justify-end" : "justify-start"}`}>
                    <p className="font-medium leading-[13px] text-[12px] truncate">
                      {m.from?.name || "Unknown"}
                    </p>
                  </div>
                )}

                <div
                  className={`
                    p-[10px] text-white
                    w-fit max-w-[200px]      
                    h-auto max-h-[200px]      
                    overflow-y-auto          
                    break-words
                    ${isMe
                      ? `bg-[#525FE1] ml-auto text-right ${isFirstInGroup && !isLastInGroup ? "rounded-l-[12px] rounded-tr-[12px] rounded-br-[4px]" : !isFirstInGroup && isLastInGroup ? "rounded-l-[12px] rounded-br-[12px] rounded-tr-[4px]" : !isFirstInGroup && !isLastInGroup ? "rounded-l-[12px] rounded-r-[4px]" : "rounded-[12px]"}`
                      : `bg-[#454950] text-left ${isFirstInGroup && !isLastInGroup ? "rounded-r-[12px] rounded-tl-[12px] rounded-bl-[4px]" : !isFirstInGroup && isLastInGroup ? "rounded-r-[12px] rounded-bl-[12px] rounded-tl-[4px]" : !isFirstInGroup && !isLastInGroup ? "rounded-r-[12px] rounded-l-[4px]" : "rounded-[12px]"}`
                    }
                  `}
                >
                  <p className="text-[14px]">
                    <Linkify componentDecorator={customLink}>
                      {m.message}
                    </Linkify>
                  </p>
                </div>

                {isLastInGroup && (
                  <p className={`text-[#D1D5DB] text-[10px] mt-[4px] font-medium ${isMe ? "text-right" : "text-left"}`}>
                    {currentMsgTime}
                  </p>
                )}
              </div>

              {isMe && (
                isFirstInGroup ? (
                  m.from?.attributes["UserImage"] ? 
                    <img className="w-[40px] h-[40px] rounded-[39px] object-cover shrink-0" src={`${BASE_URL}/${m.from?.attributes["UserImage"]}`} alt="me" /> :
                    <div className="w-[40px] h-[40px] shrink-0">
                      <DefaultImage character={m.from?.name?.toString()?.substring(0,2).toLocaleUpperCase()} />
                    </div>
                ) : (
                  <div className="w-[40px] shrink-0"></div>
                )
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="w-full h-[50px] flex items-center justify-between shrink-0 mt-[10px]">
        <div className="bg-[#454950] flex-1 h-[48px] rounded-[42px] flex items-center px-[20px]">
          <input
            ref={inputRef}
            autoFocus
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSend();
            }}
            disabled={isSending}
            placeholder="Message"
            className="bg-transparent text-[#D1D5DB] text-sm outline-none w-full"
          />
        </div>
        <div
          onClick={onSend}
          className={`w-[50px] h-[50px] shrink-0 rounded-full flex justify-center items-center ms-[12px] bg-[#525FE1] transition-transform active:scale-95 ${!message.trim() ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <img src={sendIcon} className="w-[18px] h-[18px]" alt="send" />
        </div>
      </div>
    </div>
  );
};

export default ChatForm;