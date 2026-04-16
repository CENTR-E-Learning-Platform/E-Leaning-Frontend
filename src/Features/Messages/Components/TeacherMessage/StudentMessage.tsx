import React from 'react';

const StudentMessage: React.FC = () => {
  return (
    <div className="flex flex-row items-start p-0 gap-[15.2px] w-[391.4px] max-w-[440.04px] h-[115.32px] flex-none order-1 grow-0">
        <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mohamed" 
            alt="Avatar" 
            className="object-cover w-[30.4px] h-[28.8px] rounded-full flex-none order-0 grow-0"
        />
      <div className="relative w-[345.8px] h-[115.32px] flex-none order-1 grow-0">
        <div className="absolute left-0 top-0 flex flex-col items-start pt-[13.39px] pr-[33.57px] pb-[14.63px] pl-[14.4px] w-[345.8px] h-[94.62px] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px]">
          <p className="flex items-center w-[297.03px] h-[66.6px] font-['Poppins'] font-normal text-[15px] leading-[21.6px] text-[#2A2D34] flex-none order-0 grow-0">
            Hello sir, let me know if you want to review my answers from last week's homework before class today.
          </p>
        </div>
        <span className="absolute left-[3.8px] top-[101.82px] flex items-center w-[35.02px] h-[13.5px] font-['Poppins'] font-light text-[10px] leading-[13.5px] text-[#434656]">
          8:14 am
        </span>
      </div>
    </div>
  );
};

export default StudentMessage;