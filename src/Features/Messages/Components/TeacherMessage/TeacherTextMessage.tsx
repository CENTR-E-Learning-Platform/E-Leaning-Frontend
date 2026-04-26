import { useConvertDate } from "../../Hooks/useConvertDate";

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

  return (
    <div>
      {messages.map((msg, i) => (
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
            <div className="flex flex-row justify-center items-center w-[30.4px] h-[28.8px] bg-[#525FE1] rounded-full">
              <span className="w-[5.62px] h-[13.5px] font-['Poppins'] font-bold text-[10px] text-center text-white">
                T
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
