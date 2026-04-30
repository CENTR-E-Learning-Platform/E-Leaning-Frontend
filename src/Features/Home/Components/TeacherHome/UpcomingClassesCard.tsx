import React from "react";
import UpcomingClassItem from "./UpcomingClassItem";
import { useNavigate } from "react-router-dom";

const UpcomingClassesCard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="box-border flex flex-col items-start gap-[28px] w-[687px] max-w-[687px] min-w-[643px] h-auto bg-white border border-[#E8EAED] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] rounded-[8px] font-['Poppins']">
      <div className="flex flex-col items-start p-[24px] gap-[24px] w-full h-auto">
        <div className="flex flex-row justify-between items-center w-full h-[17px]">
          <h2 className="text-[#2A2D34] font-bold text-[20px] leading-[17px]">
            Upcoming classes
          </h2>
          <button
            onClick={() => {
              navigate("/Calendar");
            }}
            className="text-[#525FE1] font-medium text-[16px] leading-[13px] cursor-pointer"
          >
            View Schedule
          </button>
        </div>

        <div className="flex flex-col items-start gap-[20px] w-full">
          <UpcomingClassItem
            time="8:30"
            period="am"
            title="The mole - class 3"
            grade="Prep 2"
            statusText="2 min left"
            statusColor="#CC3363"
            buttonOpacity="1"
            attendeesCount="11"
          />

          <div className="w-full h-0 border border-[#E8EAED]"></div>

          <UpcomingClassItem
            time="3:30"
            period="pm"
            title="The atom - class 4"
            grade="Prep 3"
            statusText="7 hr left"
            statusColor="#2DB584"
            buttonOpacity="0.5"
            attendeesCount="5"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingClassesCard;
