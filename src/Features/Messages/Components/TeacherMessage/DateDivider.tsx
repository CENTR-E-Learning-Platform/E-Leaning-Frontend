import React from 'react';

const DateDivider: React.FC = () => {
  return (
    <div className="flex flex-col items-start py-[14.4px] flex-none order-0 self-stretch grow-0">
      <div className="flex flex-row justify-center items-center p-0 flex-none order-0 self-stretch grow-0">
        <div className="flex justify-center items-center bg-[#ECEEF3] rounded-full">
          <span 
            className="flex justify-center items-center w-[111px] h-[25px] font-['Poppins'] font-semibold text-[10px] leading-[13.5px] tracking-[1px] uppercase color-[#434656] flex-none order-0 grow-0"
            style={{ color: '#434656' }}
          >
            Today, Apr 2
          </span>
        </div>
      </div>
    </div>
  );
};

export default DateDivider;