import React from "react";
import { useChat } from "../../Contexts/ShareDataMessages";
import { BASE_URL } from "../../Utils/Api";


const getInitials = (name: string) => {
  return name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const ChatHeader: React.FC = () => {
  const { selectedConversation, signalR, otherUserId, conversationId } = useChat() as any;
  const isGroup =
    selectedConversation &&
    ("teacherId" in selectedConversation || "name" in selectedConversation);

  const isTyping = isGroup
    ? signalR?.groupTypingUsers?.some((u: any) => String(u.groupChatId) === String(conversationId))
    : signalR?.typingUsers?.[String(otherUserId)];

  return (
    <div className="relative flex flex-row justify-between items-center px-[30.4px] py-0 h-[72px] bg-white shadow-[0px_0.9px_1.8px_rgba(0,0,0,0.05)] font-['Poppins']">
      <div className="flex flex-row items-center p-0 gap-[15.2px] flex-1 min-w-0 h-[36px] mr-[20px]">
        <div className="relative flex flex-col items-start p-0 isolate w-[38px] h-[36px] flex-none">
          <div className="w-[38px] h-[36px] rounded-full overflow-hidden bg-gray-200">
            {isGroup ? (
              selectedConversation?.groupPicture ? (
                <img
                  src={`${BASE_URL}${selectedConversation.groupPicture}`}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#525FE1] flex items-center justify-center text-white font-semibold text-[14px]">
                  {getInitials(selectedConversation?.name || "Group")}
                </div>
              )
            ) : selectedConversation?.otherUserPicture ? (
              <img
                src={`${BASE_URL}${selectedConversation.otherUserPicture}`}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#525FE1] flex items-center justify-center text-white font-semibold text-[14px]">
                {getInitials(selectedConversation?.otherUserName || "User")}
              </div>
            )}
          </div>

          {!isGroup && selectedConversation?.isOnline && (
            <div className="box-border absolute w-[13.3px] h-[12.6px] -right-[3.8px] -bottom-[3.6px] bg-[#22C55E] border-[1.8px] border-white rounded-full z-10" />
          )}
        </div>

        <div className="flex flex-col items-start p-0 h-[31.5px] flex-1 min-w-0">
          <div className="flex flex-col items-start p-0 self-stretch h-[18px] w-full">
            <h2 className="block w-full font-bold text-[15.2px] leading-[18px] text-[#2A2D34] truncate">
              {isGroup
                ? selectedConversation?.name || "Group chat"
                : selectedConversation?.otherUserName || "Select a chat"}
            </h2>
          </div>

          <div className="flex flex-col items-start p-0 self-stretch w-full h-[13.5px]">
            <span
              className={`block w-full font-semibold text-[9.5px] leading-[13.5px] tracking-[0.475px] uppercase truncate ${
                isTyping
                  ? "text-[#525FE1]"
                  : isGroup
                  ? "text-[#525FE1]"
                  : selectedConversation?.isOnline
                  ? "text-[#16A34A]"
                  : "text-[#9CA3AF]"
              } `}
            >
              {isGroup
                ? isTyping
                  ? "typing..."
                  : "Group"
                : isTyping
                  ? "typing..."
                  : selectedConversation?.isOnline
                    ? "Online Now"
                    : "Offline"}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ChatHeader;
