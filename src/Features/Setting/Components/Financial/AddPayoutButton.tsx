import React from "react";
import plus from '../../../../assets/icons/plus.svg';

export const AddPayoutButton: React.FC<{func: () => void}> = ({func}) => {
  return (
    <button
      onClick={func}
      className="box-border flex flex-row justify-center items-center cursor-pointer py-[17px] px-[17px] gap-[10px] w-[220px] h-[52px] bg-[#525FE1] border border-[#404DDD] rounded-[8px]"
    >
      <img
        src={plus}
        alt="Plus Icon"
        className="w-[14px] h-[14px] flex-none object-contain"
      />
      <span className="font-['Poppins'] font-bold text-[16px] leading-[13px] flex items-center text-[#F9FBFC] flex-none">
        Add Payout Method
      </span>
    </button>
  );
};