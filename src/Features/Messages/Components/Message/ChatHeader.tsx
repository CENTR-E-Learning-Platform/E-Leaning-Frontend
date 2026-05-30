// import React from "react";
// import { MoreVertical } from "lucide-react";
// import { useChat } from "../../Contexts/ShareDataMessages";

// const ChatHeader: React.FC = () => {
//   const { chatData  , selectedConversation } = useChat();
//   console.log("Chat Data:", chatData);
//   console.log("Selected Conversation:", selectedConversation);
//   return (
//     <div className="relative flex flex-row justify-between items-center px-[30.4px] py-0 w-[800px] h-[72px] bg-white shadow-[0px_0.9px_1.8px_rgba(0,0,0,0.05)] font-['Poppins']">
//       <div className="flex flex-row items-center p-0 gap-[15.2px] w-[185.25px] h-[36px]">
//         <div className="relative flex flex-col items-start p-0 isolate w-[38px] h-[36px]">
//           <div className="w-[38px] h-[36px] rounded-full overflow-hidden bg-gray-200">
//             <img
//               src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mohamed"
//               alt="Avatar"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="box-border absolute w-[13.3px] h-[12.6px] -right-[3.8px] -bottom-[3.6px] bg-[#22C55E] border-[1.8px] border-white rounded-full z-10" />
//         </div>

//         <div className="flex flex-col items-start p-0 w-[132.05px] h-[31.5px]">
//           <div className="flex flex-col items-start p-0 self-stretch w-[132.05px] h-[18px]">
//             <h2 className="flex items-center w-full h-full font-bold text-[15.2px] leading-[18px] text-[#2A2D34]">
//               Mr. Mohamed Ali
//             </h2>
//           </div>
//           <div className="flex flex-col items-start p-0 self-stretch w-[132.05px] h-[13.5px]">
//             <span className="flex items-center font-semibold text-[9.5px] leading-[13.5px] tracking-[0.475px] uppercase text-[#16A34A]">
//               Online Now
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-row items-center p-0 gap-[7.6px] w-[30px] h-[30px]">
//         <button className="flex flex-col justify-center items-center p-[7.2px] w-[30px] h-[30px] rounded-full hover:bg-gray-50 transition-colors">
//           <MoreVertical className="w-[30px] h-[30px] text-[#434656]" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatHeader;

import React from "react";
import { MoreVertical } from "lucide-react";
import { useChat } from "../../Contexts/ShareDataMessages";

interface Conversation {
  otherUserName?: string;
  otherUserPicture?: string;
  isOnline?: boolean;
  name?: string;
  groupPicture?: string;
  teacherId?: string;
}

const ChatHeader: React.FC = () => {
  const { selectedConversation } = useChat() as { selectedConversation: Conversation | undefined };
  const isGroup = selectedConversation && ('teacherId' in selectedConversation || 'name' in selectedConversation);

  return (
    <div className="relative flex flex-row justify-between items-center px-[30.4px] py-0 w-[800px] h-[72px] bg-white shadow-[0px_0.9px_1.8px_rgba(0,0,0,0.05)] font-['Poppins']">

      <div className="flex flex-row items-center p-0 gap-[15.2px] w-[185.25px] h-[36px]">

        <div className="relative flex flex-col items-start p-0 isolate w-[38px] h-[36px]">
          <div className="w-[38px] h-[36px] rounded-full overflow-hidden bg-gray-200">
            <img
              src={
                isGroup
                  ? (selectedConversation?.groupPicture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedConversation?.name || "group"}`)
                  : (selectedConversation?.otherUserPicture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedConversation?.otherUserName || "default"}`)
              }
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {!isGroup && selectedConversation?.isOnline && (
            <div className="box-border absolute w-[13.3px] h-[12.6px] -right-[3.8px] -bottom-[3.6px] bg-[#22C55E] border-[1.8px] border-white rounded-full z-10" />
          )}
        </div>


        <div className="flex flex-col items-start p-0 w-[132.05px] h-[31.5px]">

          <div className="flex flex-col items-start p-0 self-stretch w-[132.05px] h-[18px]">
            <h2 className="flex items-center w-full h-full font-bold text-[15.2px] leading-[18px] text-[#2A2D34]">
              {isGroup ? (selectedConversation?.name || "Group chat") : (selectedConversation?.otherUserName || "Select a chat")}
            </h2>
          </div>

          <div className="flex flex-col items-start p-0 self-stretch w-[132.05px] h-[13.5px]">
            <span className={`flex items-center font-semibold text-[9.5px] leading-[13.5px] tracking-[0.475px] uppercase ${isGroup ? "text-[#525FE1]" : (selectedConversation?.isOnline ? "text-[#16A34A]" : "text-[#9CA3AF]")} `}>
              {isGroup ? "Group" : (selectedConversation?.isOnline ? "Online Now" : "Offline")}
            </span>
          </div>

        </div>
      </div>

      <div className="flex flex-row items-center p-0 gap-[7.6px] w-[30px] h-[30px]">
        <button className="flex flex-col justify-center items-center p-[7.2px] w-[30px] h-[30px] rounded-full hover:bg-gray-50 transition-colors">
          <MoreVertical className="w-[30px] h-[30px] text-[#434656]" />
        </button>
      </div>

    </div>
  );
};

export default ChatHeader;