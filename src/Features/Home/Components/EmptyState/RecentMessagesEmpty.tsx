import React, { useState } from "react";
import MessagesEmptyImg from "../../../../assets/images/PhotoMessage.png";

const RecentMessagesEmpty: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"teachers" | "groups">("teachers");

  return (
    <div className="box-border flex flex-col justify-center items-center p-[30px_24px] gap-[20px] w-[459px] min-w-[400px] h-[456px] bg-[#FFFFFF] border border-[#E8EAED] rounded-[8px] font-['Poppins']">
      <div className="flex flex-col justify-center items-center p-0 gap-[28px] w-full h-[89px]">
        <div className="flex flex-row justify-between items-center p-0 gap-[97px] w-full h-[17px]">
          <h2 className="m-0 h-[17px] font-bold text-[22px] leading-[17px] text-[#2A2D34]">
            Recent Messages
          </h2>
          <button className="flex flex-row justify-center items-center px-[16px] gap-[8px] h-[11px] rounded-[8px] bg-transparent border-none outline-none cursor-pointer">
            <span className="font-medium text-[16px] leading-[13px] text-[#525FE1] whitespace-nowrap">
              See all
            </span>
          </button>
        </div>

        <div className="flex flex-row justify-center items-start p-[4px] w-[360px] h-[44px] bg-[#EEF0FF] rounded-full">
          <button
            onClick={() => setActiveTab("teachers")}
            className={`flex flex-col justify-center items-center px-[16px] py-[8px] w-[176px] h-[36px] rounded-full border-none outline-none cursor-pointer font-['Poppins'] font-bold text-[16px] leading-[20px] text-center text-[#525FE1] transition-all ${
              activeTab === "teachers"
                ? "bg-[#FFFFFF] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                : "bg-transparent"
            }`}
          >
            Teachers
          </button>
          <button
            onClick={() => setActiveTab("groups")}
            className={`flex flex-col justify-center items-center px-[16px] py-[8px] w-[176px] h-[36px] rounded-full border-none outline-none cursor-pointer font-['Poppins'] font-bold text-[16px] leading-[20px] text-center text-[#525FE1] transition-all ${
              activeTab === "groups"
                ? "bg-[#FFFFFF] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                : "bg-transparent"
            }`}
          >
            Groups
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center p-0 gap-[19px] w-[357px] h-[287px]">
        <div className="w-[161px] h-[161px]">
          <img
            src={MessagesEmptyImg}
            alt="No messages"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center items-center p-0 gap-[20px] w-[357px] h-[107px]">
          <h3 className="m-0 font-bold text-[18px] leading-[27px] text-[#2A2D34] text-center">
            No messages
          </h3>
          <p className="m-0 w-[357px] font-medium text-[18px] leading-[27px] text-[#5A6272] text-center">
            Start a conversation with your teachers
          </p>
          <button className="box-border flex flex-row justify-center items-center px-[16px] py-[14px] gap-[8px] w-[210px] h-[41px] border-2 border-[#525FE1] rounded-[8px] bg-transparent cursor-pointer hover:bg-[#525FE1] hover:text-white transition-colors group">
            <span className="font-['Poppins'] font-medium text-[18px] leading-[13px] text-[#525FE1] group-hover:text-white whitespace-nowrap">
              Start a conversation
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentMessagesEmpty;
