import React from 'react';

export const QuizSubmitted: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[638px] gap-[14px] font-['Poppins',sans-serif]">
      <div className="flex flex-row justify-center items-center py-[14px] w-[76px] h-[66px] bg-[#ECFDF5] shadow-[0px_0px_40px_rgba(52,211,153,0.15)] rounded-full">
        <div className="w-[39px] h-[38px] text-[#10B981]">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" />
            <path d="M7 13L10 16L17 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      
      <div className="flex flex-col items-center pt-[7px] w-full">
        <h1 className="m-0 font-bold text-[32px] leading-[36px] text-center tracking-[-0.8px] text-[#2A2D34]">
          Quiz Submitted!
        </h1>
      </div>
      
      <div className="flex flex-col items-center w-full">
        <p className="m-0 font-normal text-[16px] leading-[25px] text-center text-[#434656]">
          Your answers have been recorded.
        </p>
      </div>
    </div>
  );
};

export default QuizSubmitted;