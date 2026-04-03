import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  labelWidth?: string;
  iconWrapperClass?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, label, value, labelWidth, iconWrapperClass }) => {
  return (
    <div className="box-border flex flex-row items-start p-[18px] gap-[14px] w-[289px] h-[86px] bg-[#FFFFFF] border border-solid border-[#E8EAED] rounded-[7px] relative overflow-hidden">
      
      {/* Icon Wrapper */}
      <div className={iconWrapperClass || "flex flex-row items-center justify-center p-[14px] gap-[9px] w-[50px] h-[50px] bg-[rgba(82,95,225,0.2)] rounded-[7px] flex-none order-0 grow-0"}>
        {icon}
      </div>

      {/* Text Wrapper */}
      <div className={`relative ${labelWidth || "w-[146px]"} h-[50px] flex-none order-1 grow-0`}>
        
        {/* Label */}
        <div className="absolute w-full h-[22px] left-0 top-0 font-['Poppins'] font-medium text-[13px] leading-[22px] tracking-[-0.02em] text-[#6D7588] m-0 p-0 whitespace-nowrap overflow-hidden text-ellipsis">
          {label}
        </div>
        
        {/* Value */}
        <div className="absolute w-full h-[29px] left-0 top-[21px] font-['Poppins'] font-bold text-[22px] leading-[29px] tracking-[-0.02em] text-[#2A2D34] m-0 p-0 whitespace-nowrap">
          {value}
        </div>
        
      </div>
    </div>
  );
};