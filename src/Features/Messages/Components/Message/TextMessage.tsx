import { useChat } from "../../Contexts/ShareDataMessages";
import { useConvertDate } from "../../Hooks/useConvertDate";
import { TypingIndicator } from "../TypingIndicator";
import DefaultAvatar from "./DefaultAvatar";

type Message = {
  senderId: string;
  senderName: string;
  content: string;
  conversationId: number;
  sentAt: string;
  createdAt: string;
};

type Props = {
  messages: Message[];
};

export const TeacherTextMessage = ({ messages }: Props) => {
  const formatTime = useConvertDate();
  const currentUserId = localStorage.getItem("currentUserId");
  const { signalR, otherUserId, selectedConversation, conversationId } = useChat();
  const isGroup = selectedConversation && (selectedConversation as any).isGroup === true;

  const isSameMinute = (date1: string, date2: string) => {
    if (!date1 || !date2) return false;
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate() &&
      d1.getHours() === d2.getHours() &&
      d1.getMinutes() === d2.getMinutes()
    );
  };

  return (
    <div className="flex flex-col w-full pb-4">
      {messages.map((msg, i) => {
        const isMe = String(msg.senderId) === String(currentUserId);

        const prevMsg = messages[i - 1];
        const nextMsg = messages[i + 1];

        const isSameSenderAsPrev = prevMsg && String(prevMsg.senderId) === String(msg.senderId);
        const isSameMinuteAsPrev = prevMsg && isSameMinute(msg.sentAt || msg.createdAt, prevMsg.sentAt || prevMsg.createdAt);
        const isGroupStart = !(isSameSenderAsPrev && isSameMinuteAsPrev);

        const isSameSenderAsNext = nextMsg && String(nextMsg.senderId) === String(msg.senderId);
        const isSameMinuteAsNext = nextMsg && isSameMinute(msg.sentAt || msg.createdAt, nextMsg.sentAt || nextMsg.createdAt);
        const isGroupEnd = !(isSameSenderAsNext && isSameMinuteAsNext);

        const marginClass = i === 0 ? "" : isGroupStart ? "mt-4" : "mt-1";

        return isMe ? (
          <div key={i} className={`flex w-full justify-end ${marginClass}`}>
            <div className={`flex items-end max-w-[85%] md:max-w-[70%] ${isGroup ? "gap-3" : ""}`}>
              <div className="flex flex-col items-end">
                <div
                  className={`bg-[#525FE1] text-white px-4 py-2.5 shadow-sm break-words w-fit rounded-2xl transition-all
                    ${!isGroupStart ? 'rounded-tr-[4px]' : ''} 
                    ${!isGroupEnd ? 'rounded-br-[4px]' : 'rounded-br-sm'}
                  `}
                >
                  <p className="font-['Poppins'] text-[15px] leading-relaxed">
                    {msg.content}
                  </p>
                </div>
                {isGroupEnd && (
                  <span className="font-['Poppins'] text-[10px] text-gray-500 mt-1.5 px-1">
                    {formatTime(msg.sentAt) || formatTime(msg.createdAt)}
                  </span>
                )}
              </div>
              {isGroup && (
                <div className={`flex-shrink-0 ${isGroupEnd ? 'mb-6' : 'mb-0'} w-8 h-8`}>
                  {isGroupEnd && (
                    <DefaultAvatar name={msg.senderName || "Me"} className="w-8 h-8 text-[12px]" />
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div key={i} className={`flex w-full justify-start ${marginClass}`}>
            <div className={`flex items-end max-w-[85%] md:max-w-[70%] ${isGroup ? "gap-3" : ""}`}>
              {isGroup && (
                <div className={`flex-shrink-0 ${isGroupEnd ? 'mb-6' : 'mb-0'} w-8 h-8`}>
                  {isGroupEnd && (
                    <DefaultAvatar name={msg.senderName || "User"} className="w-8 h-8 text-[12px]" />
                  )}
                </div>
              )}
              <div className="flex flex-col items-start">
                {isGroup && isGroupStart && (
                  <span className="font-['Poppins'] text-[11px] text-gray-500 mb-1 ml-1">
                    {msg.senderName || "User"}
                  </span>
                )}
                <div
                  className={`bg-white text-[#2A2D34] px-4 py-2.5 shadow-sm border border-gray-100 break-words w-fit rounded-2xl transition-all
                    ${!isGroupStart ? 'rounded-tl-[4px]' : ''} 
                    ${!isGroupEnd ? 'rounded-bl-[4px]' : 'rounded-bl-sm'}
                  `}
                >
                  <p className="font-['Poppins'] text-[15px] leading-relaxed">
                    {msg.content}
                  </p>
                </div>
                {isGroupEnd && (
                  <span className="font-['Poppins'] text-[10px] text-gray-500 mt-1.5 px-1">
                    {formatTime(msg.sentAt) || formatTime(msg.createdAt)}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {!isGroup && signalR.typingUsers?.[String(otherUserId)] && (
        <div className="flex w-full justify-start mt-4">
          <div className="flex items-end max-w-[85%] md:max-w-[70%]">
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 w-fit">
              <TypingIndicator />
            </div>
          </div>
        </div>
      )}

      {isGroup &&
        signalR.groupTypingUsers
          ?.filter((u: any) => String(u.groupChatId) === String(conversationId))
          .map((typingUser: any, idx: number) => (
            <div key={`typing-${typingUser.senderId}-${idx}`} className="flex w-full justify-start mt-4">
              <div className="flex items-end max-w-[85%] md:max-w-[70%] gap-3">
                <div className="flex-shrink-0 mb-1 w-8 h-8">
                  <DefaultAvatar name={typingUser.senderName || "User"} className="w-8 h-8 text-[12px]" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-['Poppins'] text-[11px] text-gray-500 mb-1 ml-1">
                    {typingUser.senderName || "User"}
                  </span>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 w-fit">
                    <TypingIndicator />
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};