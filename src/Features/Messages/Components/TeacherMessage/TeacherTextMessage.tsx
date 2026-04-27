import { useChat } from "../../Contexts/ShareDataMessages";
import { useConvertDate } from "../../Hooks/useConvertDate";
import { TypingIndicator } from "../TypingIndicator";

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
  const { signalR } = useChat();
  
  return (
    <div>
      {messages.map((msg, i) => {
        const isMe = String(msg.senderId) === String(currentUserId);

        return isMe ? (
          <div
            key={i}
            className="flex flex-col justify-end mb-2 items-end p-0 w-[730px] self-stretch"
          >
            <div className="flex flex-row items-start p-0 gap-[15.2px] w-[391.4px] max-w-[440.04px]">
              <div className="flex flex-col items-end p-0 w-[345.8px]">
                <div className="relative flex flex-col items-start pt-[14.4px] pr-[20.5px] pb-[14.4px] pl-[15.2px] bg-[#525FE1] rounded-l-[16px] rounded-br-[16px] shadow-sm overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-[0.002] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]" />
                  <p className="z-10 flex items-center max-w-[308.96px] font-['Poppins'] font-normal text-[15px] leading-[21.6px] text-white">
                    {msg.content}
                  </p>
                </div>
                <div className="flex flex-col items-start pt-[7.2px] px-[3.8px] pb-0 h-[20.7px]">
                  <span className="h-[13.5px] font-['Poppins'] font-light text-[10px] leading-[13.5px] text-[#434656]">
                    {formatTime(msg.sentAt) || formatTime(msg.createdAt)}
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center w-[30.4px] h-[28.8px] rounded-full">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.senderName}`}
                  alt="Me"
                  className="w-[30.4px] h-[28.8px] rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        ) : (
          <div
            key={i}
            className="flex flex-col justify-start mb-2 items-start p-0 w-[730px] self-stretch"
          >
            <div className="flex flex-row items-start p-0 gap-[15.2px] w-[391.4px] max-w-[440.04px]">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.senderName}`}
                alt="Avatar"
                className="object-cover w-[30.4px] h-[28.8px] rounded-full flex-none"
              />
              <div className="">
                <div className="flex w-fit pt-[13.39px] pr-[15px] pb-[14.63px] pl-[14.4px] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px]">
                  <p className="flex items-center font-['Poppins'] max-w-[308.96px] font-normal text-[15px] leading-[21.6px] text-[#2A2D34]">
                    {msg.content}
                  </p>
                </div>

                <span className="mt-2 flex items-center font-['Poppins'] font-light text-[10px] leading-[13.5px] text-[#434656]">
                  {formatTime(msg.sentAt) || formatTime(msg.createdAt)}
                </span>
              </div>
            </div>
          </div>
        );
      })}

      {signalR.typingUser && (
        <div className="flex flex-col justify-start mb-2 items-start p-0 w-[730px] mt-5 self-stretch">
          <div className="flex flex-row items-start gap-[15.2px] max-w-[200px]">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${signalR.typingUser}`}
              className="w-[30px] h-[30px] rounded-full"
            />

            <div className="bg-white px-[14px] py-[10px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] shadow-sm">
              <TypingIndicator />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
