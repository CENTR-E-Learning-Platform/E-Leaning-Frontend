import React from 'react';

const StudentRow: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center w-[760px] h-[72px] font-['Poppins',sans-serif] ">
      <div className="flex flex-row items-center gap-[11px] w-[202px] h-[29px]">
        <div className="flex justify-center items-center w-[29px] h-[29px] bg-[#DDE1FF] rounded-full">
          <span className="font-bold text-[11px] leading-[14px] text-[#525FE1]">
            AH
          </span>
        </div>
        <div className="flex flex-col justify-center h-[23px]">
          <span className="font-bold text-[15px] leading-[22px] text-[#2A2D34]">
            Ali Hosny
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start pl-[60px] w-[207px] h-[70px]">
        <div className="flex justify-center items-center px-[11px] py-[3px] bg-[#DDE1FF] rounded-full">
          <span className="font-bold text-[11px] leading-[16px] uppercase text-[#525FE1]">
            Submitted
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start pl-[30px] w-[125px] h-[72px]">
        <span className="font-normal text-[15px] leading-[22px] text-[#434656]">
          -
        </span>
      </div>

      <div className="flex flex-row justify-end items-center pl-[30px] gap-[7px] w-[163px] h-[36px]">
        <button className="flex justify-center items-center w-[66px] h-[36px] bg-[#525FE1] rounded-[7px]">
          <span className="font-bold text-[11px] leading-[14px] text-center text-white">
            Grade
          </span>
        </button>
      </div>
    </div>
  );
};

export default StudentRow;