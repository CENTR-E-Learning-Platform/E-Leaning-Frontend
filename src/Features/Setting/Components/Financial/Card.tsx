import React from 'react';

interface BalanceCardProps {
  icon: string;
  title: string;
  amount: string;
  subtitle: string;
}

export const Card: React.FC<BalanceCardProps> = ({
  icon,
  title,
  amount,
  subtitle,
}) => {
  return (
    <div className="flex flex-col items-start px-4 pt-5 pb-4 w-[220px] h-[125px] bg-white border-2 border-[#F0C95F33] rounded-lg gap-4 font-['Poppins']">
      <div className="flex flex-row items-center gap-2">
        <div className="flex items-center justify-center w-[34px] h-[34px] bg-[#FCF4DF] rounded-full">
          <img src={icon} className ="w-[18px] h-[18px]" alt="" />
        </div>
        <span className="font-medium text-[15px] text-[#2A2D34] leading-[23px]">
          {title}
        </span>
      </div>
      <div className="flex flex-col items-start gap-3">
        <span className="font-semibold text-[22px] text-[#2A2D34] leading-[13px]">
          {amount}
        </span>
        <span className="font-medium text-[13px] text-[#6D7588] leading-[23px]">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

