import React from 'react';

export const ActionButtons: React.FC = () => {
  return (
    <div className="flex flex-row justify-end items-start gap-[15px] w-full max-w-[1440px]">
      <button className="box-border flex flex-col justify-center items-center w-[128px] h-[42px] border-[2px] border-[#525FE1] rounded-[8px] font-['Poppins',sans-serif] font-bold text-[12px] leading-[22px] text-[#525FE1] hover:bg-[rgba(82,95,225,0.05)] transition-colors cursor-pointer">
        Save as Draft
      </button>
      <button className="flex flex-col justify-center items-center w-[229px] h-[42px] bg-[#525FE1] rounded-[8px] font-['Poppins',sans-serif] font-bold text-[12px] leading-[22px] text-white shadow-[0px_20px_25px_-5px_rgba(82,95,225,0.25),0px_8px_10px_-6px_rgba(0,64,223,0.25)] hover:bg-[#4350c9] transition-colors cursor-pointer">
        Next: Add Questions &rarr;
      </button>
    </div>
  );
};

export default ActionButtons;