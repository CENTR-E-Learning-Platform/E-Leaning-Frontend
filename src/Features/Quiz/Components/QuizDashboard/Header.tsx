import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-start w-[760px] h-[43px] bg-[#F1F4F9]">
      <div className="flex flex-row justify-center items-start w-[760px] h-[43px]">
        <div className="flex flex-col items-start py-[14px] px-[30px] w-[263.71px] h-[43px]">
          <span className="font-['Poppins'] font-bold text-[11px] leading-[14px] flex items-center tracking-[1.2px] uppercase color-[#434656]">
            STUDENT NAME
          </span>
        </div>
        <div className="flex flex-col items-start py-[14px] px-[30px] w-[177.34px] h-[43px]">
          <span className="font-['Poppins'] font-bold text-[11px] leading-[14px] flex items-center tracking-[1.2px] uppercase color-[#434656]">
            STATUS
          </span>
        </div>
        <div className="flex flex-col items-start py-[14px] px-[30px] w-[125.12px] h-[43px]">
          <span className="font-['Poppins'] font-bold text-[11px] leading-[14px] flex items-center tracking-[1.2px] uppercase color-[#434656]">
            GRADE
          </span>
        </div>
        <div className="flex flex-col items-end py-[14px] px-[30px] w-[193.83px] h-[43px]">
          <span className="font-['Poppins'] font-bold text-[11px] leading-[14px] flex items-center text-right tracking-[1.2px] uppercase color-[#434656]">
            ACTION
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;