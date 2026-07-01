import React, { useEffect } from 'react';
import { useQuizHeaderDashboard } from '../../Hooks/useQuizHeaderDashboard';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';


export const QuizHeader: React.FC = () => {
  const {quizId} = useParams();
  const { data } = useQuizHeaderDashboard(Number(quizId));
  
  useEffect(() => {
    console.log(data?.data);
  }, [data]);

  return (
    <div className="relative w-[1155px] max-w-full h-[180px] bg-[#525FE1] shadow-[0_20px_40px_rgba(0,19,85,0.06)] rounded-2xl flex flex-row justify-between items-end p-[36px] overflow-hidden font-['Poppins',sans-serif]">
      <div className="absolute w-[230px] h-[230px] -right-[86px] -bottom-[86px] bg-white/10 blur-[28px] rounded-full z-0"></div>

      <div className="absolute right-[20px] top-[10px] w-[190px] h-[190px] z-0 opacity-[0.03] flex items-center justify-center text-white">
        <svg width="135" height="135" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="14" height="14" rx="2" ry="2"></rect>
          <rect x="7" y="7" width="14" height="14" rx="2" ry="2"></rect>
          <path d="M14 11a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 0 0-1 2.5c.5.5 1 1 1 1.5v1"></path>
          <circle cx="14" cy="17" r="0.5" fill="currentColor"></circle>
        </svg>
      </div>

      <div className="flex flex-col items-start gap-[14px] z-10">
        <div className="flex flex-row items-center gap-[11px]">
          <div className="px-[14px] py-[5px] bg-white/20 border border-white/30 backdrop-blur-[5px] rounded-full flex items-center justify-center">
            <span className="font-semibold text-[11px] leading-[14px] tracking-[1.08px] uppercase text-white">
              {data?.data?.status}
            </span>
          </div>
          <span className="font-medium text-[13px] leading-[18px] text-white/70">
            Chemistry • Prep 2
          </span>
        </div>

        <h2 className="font-bold text-[28px] leading-[28px] tracking-[-1.08px] text-white m-0">
          {data?.data?.title}
        </h2>

        <div className="flex flex-row items-center gap-[7px]">
          <svg width="14" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span className="font-medium text-[16px] leading-[25px] text-white/90">
            {data?.data?.dueDate ? `Due: ${format(new Date(data?.data?.dueDate), "MMM d, yyyy 'at' h:mm a")}` : ''}
          </span>
        </div>
      </div>

      <div className="flex flex-row items-start gap-[14px] z-10 h-[77px]">
        <div className="box-border flex flex-col items-center justify-center px-[14px] py-[12px] min-w-[102px] h-[77px] bg-white/10 border border-white/10 backdrop-blur-[2px] rounded-[11px]">
          <span className="font-bold text-[11px] leading-[14px] tracking-[1.08px] uppercase text-white/60 mb-[4px]">
            Questions
          </span>
          <span className="font-bold text-[22px] leading-[28px] text-white">
            {data?.data?.numberOfQuestions}
          </span>
        </div>

        <div className="box-border flex flex-col items-center justify-center px-[14px] py-[12px] min-w-[77px] h-[77px] bg-white/10 border border-white/10 backdrop-blur-[2px] rounded-[11px]">
          <span className="font-bold text-[11px] leading-[14px] tracking-[1.08px] uppercase text-white/60 mb-[4px]">
            Points
          </span>
          <span className="font-bold text-[22px] leading-[28px] text-white">
            {data?.data?.totalNumberOfPoints}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;