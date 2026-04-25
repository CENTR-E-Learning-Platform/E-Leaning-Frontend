import React from 'react';

const ActionFooter: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center px-[22px] w-[760px] h-[61px] bg-[#F1F4F9] font-['Poppins',sans-serif] box-border">
      <button className="flex flex-col justify-center items-center text-[#525FE1] font-bold text-[13px] leading-[18px] bg-transparent border-none cursor-pointer p-0">
        View All Students
      </button>
      
      <button className="flex flex-row items-center gap-[7px] text-[#434656] font-bold text-[13px] leading-[18px] bg-transparent border-none cursor-pointer p-0">
        <div className="flex flex-col items-center justify-center w-[11px] h-[11px]">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
            />
          </svg>
        </div>
        <span>Export Results (CSV)</span>
      </button>
    </div>
  );
};

export default ActionFooter;