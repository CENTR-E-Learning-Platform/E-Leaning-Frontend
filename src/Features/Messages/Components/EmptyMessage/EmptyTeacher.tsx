import React from "react";
import { Search, Calendar } from "lucide-react";
import PhotoMessage from "../../../../assets/images/PhotoMessage.png";
import { useNavigate } from "react-router-dom";

const EmptyTeacher: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-[24px] h-[calc(100vh-66px)] w-[580px] mx-auto">
      <div className="relative w-[214px] h-[214px] flex-none order-0 flex-grow-0">
        <img
          src={PhotoMessage}
          alt="No messages"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col items-center p-0 gap-[24px] w-full flex-none order-1 self-stretch">
        <div className="flex flex-col items-start p-0 w-[418px] h-[120px] flex-none order-0">
          <div className="flex flex-col items-start p-0 gap-[16px] w-full">
            <h1 className="w-full h-[48px] flex items-center justify-center text-center font-semibold text-[36px] leading-[48px] text-[#2A2D34]">
              No messages yet
            </h1>

            <p className="w-full h-[56px] flex items-center justify-center text-center font-normal text-[18px] leading-[28px] text-[#434656]">
              When you book a class or contact a tutor, your conversations will
              appear here.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center p-0 gap-[16px] w-[580px] h-[56px] flex-none order-1 self-stretch">
          <button  onClick={() => {
              navigate("/profile");
            }} className="flex flex-row justify-center items-center cursor-pointer py-[16px] px-[32px] gap-[12px] h-[56px] bg-[#525FE1] rounded-[8px] transition-hover hover:bg-[#414cb1] flex-none order-0">
            <Search className="w-[18px] h-[18px] text-[#F9FBFC]" />
            <span className="font-semibold text-[16px] leading-[24px] text-[#F9FBFC]">
              Find Your First Tutor
            </span>
          </button>

          <button
            onClick={() => {
              navigate("/Calendar");
            }}
            className="box-border cursor-pointer flex flex-row justify-center items-center py-[16px] px-[32px] gap-[12px] h-[56px] bg-[#F9FBFC] border-2 border-[#525FE1] rounded-[8px] transition-hover hover:bg-gray-50 flex-none order-1"
          >
            <Calendar className="w-[30px] h-[20px] text-[#525FE1]" />
            <span className="font-semibold text-[16px] leading-[24px] text-[#525FE1]">
              Browse Available Classes
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyTeacher;
