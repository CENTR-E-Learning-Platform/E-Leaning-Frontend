import React from "react";
import HomeworkEmptyImg from "../../../../assets/images/HomeworkEmpty.png";

const RecentHomeworksEmpty: React.FC = () => {
  return (
    <div className="box-border flex flex-col items-start p-[30px_24px] gap-[32px] w-[459px] min-w-[400px] h-[335px] bg-[#FFFFFF] border border-[#E8EAED] rounded-[8px] font-['Poppins']">
      <div className="flex flex-row justify-between items-center p-0 gap-[97px] w-full h-[17px]">
        <h2 className="m-0 h-[17px] font-bold text-[22px] leading-[17px] text-[#2A2D34]">
          Pending Homework
        </h2>
        <button className="flex flex-row justify-center items-center px-[16px] gap-[8px] h-[11px] rounded-[8px] bg-transparent border-none outline-none cursor-pointer">
          <span className="font-medium text-[16px] leading-[13px] text-[#525FE1] whitespace-nowrap">
            See all
          </span>
        </button>
      </div>

      <div className="flex flex-col justify-center items-center p-0 gap-[20px] w-full flex-1">
        <div className="w-[133px] h-[133px]">
          <img
            src={HomeworkEmptyImg}
            alt="No homework"
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="m-0 font-bold text-[18px] leading-[27px] text-[#2A2D34] text-center">
          No homework yet
        </h3>
        <p className="m-0 w-[325px] font-medium text-[18px] leading-[27px] text-[#5A6272] text-center">
          Complete your first class to receive homework
        </p>
      </div>
    </div>
  );
};

export default RecentHomeworksEmpty;
