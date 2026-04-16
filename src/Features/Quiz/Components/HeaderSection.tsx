import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useQuiz } from '../Context/QuizContext';

interface HeaderSectionProps {
  onOpenModal?: () => void;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({ onOpenModal }) => {
  const { secondQuizData, setSecondQuizData } = useQuiz();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('add-questions')) {
      setSecondQuizData(true);
    } else {
      setSecondQuizData(false);
    }
  }, [location, setSecondQuizData]);
  
  return (
    <div className="flex flex-col items-start gap-[14px] w-full max-w-[1045px] font-['Poppins',sans-serif]">
      {secondQuizData && (
        <NavLink 
          onClick={() => setSecondQuizData(false)}
          to="/quiz/quizsetting" 
          className="flex flex-row items-center gap-[7px] bg-transparent border-none p-0 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="flex flex-col items-center justify-center w-[14px] h-[14px]">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#525FE1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-semibold text-[15px] leading-[22px] text-center text-[#525FE1]">
            Back to Basic Info
          </span>
        </NavLink>
      )}

      <div className="flex flex-row justify-between items-end w-full min-h-[50px]">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start w-full">
            <h1 className="font-bold text-[22px] leading-[28px] flex items-center text-[#2A2D34] m-0">
              Create New Quiz
            </h1>
          </div>
          <div className="flex flex-col items-start w-full">
            <span className="font-medium text-[15px] leading-[22px] flex items-center text-[#64748B]">
              {secondQuizData ? "Step 2 of 3: Add Questions" : "Step 1 of 3 - Basic Info"}
            </span>
          </div>
        </div>

        {secondQuizData && (
          <button 
            onClick={onOpenModal} 
            className="relative flex flex-row items-center justify-center px-[22px] py-[9px] gap-[7px] bg-[#525FE1] rounded-lg cursor-pointer hover:bg-[#4350c9] transition-colors shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] border-none"
          >
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.002)] rounded-lg pointer-events-none" />
            <div className="flex flex-col items-center justify-center w-[13px] h-[13px] z-10">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-semibold text-[15px] leading-[22px] text-center flex items-center text-white z-10">
              Add Question
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderSection;