import React from 'react';
import { NavLink } from 'react-router-dom';

interface QuizItemProps {
  title: string;
  subject: string;
  timeLeft: string;
  progress: number;
  submissions: string;
  isUrgent?: boolean;
}

const QuizItem: React.FC<QuizItemProps> = ({ 
  title, 
  subject, 
  timeLeft, 
  progress, 
  submissions, 
  isUrgent 
}) => {
  return (
    <div className="flex flex-col items-start p-0 gap-[12px] w-full border-t border-[#E8EAED] first:border-t-0 first:pt-0 pt-[16px]">
      <div className="flex flex-row justify-between items-start p-0 w-full">
        <div className="flex flex-col items-start p-0 gap-[2px]">
          <h3 className="text-[#2A2D34] font-bold text-[16px] leading-[20px] font-['Poppins']">
            {title}
          </h3>
          <p className="text-[#6D7588] font-normal text-[12px] leading-[16px] font-['Poppins']">
            {subject}
          </p>
        </div>
        <div className={`flex flex-col items-start px-[8px] py-[4px] rounded-[8px] ${isUrgent ? 'bg-[#FDF2F8]' : 'bg-[#F9FBFC]'}`}>
          <span className={`font-bold text-[10px] leading-[15px] font-['Poppins'] ${isUrgent ? 'text-[#CC3363]' : 'text-[#6D7588]'}`}>
            {timeLeft}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-start p-0 gap-[6px] w-full">
        <div className="flex flex-row justify-between items-center p-0 w-full">
          <span className="text-[#6D7588] font-bold text-[12px] leading-[15px] font-['Poppins']">
            Submission Progress
          </span>
          <span className="text-[#525FE1] font-bold text-[12px] leading-[15px] font-['Poppins']">
            {progress}% ({submissions})
          </span>
        </div>
        <div className="relative w-full h-[6px] bg-[#E8EAED] rounded-[3px] overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-[#525FE1] rounded-[3px] transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex flex-row justify-center items-start pt-[4px] gap-[8px] w-full">
        <button className="flex flex-col justify-center items-center py-[8px] w-[106.67px] h-[33px] border border-[#E8EAED] rounded-[8px] text-[#2A2D34] font-semibold text-[14px] leading-[15px] font-['Poppins'] hover:bg-gray-50 transition-colors">
          View
        </button>
        <button className="flex flex-col justify-center items-center py-[8px] w-[106.67px] h-[33px] border border-[#E8EAED] rounded-[8px] text-[#2A2D34] font-semibold text-[14px] leading-[15px] font-['Poppins'] hover:bg-gray-50 transition-colors">
          Edit
        </button>
        <button className="flex flex-col justify-center items-center py-[8px] w-[104.67px] h-[33px] bg-[rgba(82,95,225,0.1)] rounded-[8px] text-[#525FE1] font-semibold text-[14px] leading-[15px] font-['Poppins'] hover:bg-[rgba(82,95,225,0.2)] transition-colors">
          Remind
        </button>
      </div>
    </div>
  );
};

const ActiveQuizzes: React.FC = () => {
  return (
    <div className="box-border flex flex-col items-start p-[24px] gap-[24px] w-[453px] h-auto bg-[#FFFFFF] border border-[#E8EAED] rounded-[8px] shadow-sm font-['Poppins']">
      
      <div className="flex flex-row justify-between items-center p-0 w-full h-[39px]">
        <h2 className="text-[#2A2D34] font-bold text-[20px] leading-[28px] flex items-center">
          Active Quizzes
        </h2>
        <NavLink 
        to={"/quiz/quizsetting"}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/quiz/quizsetting";
          }}
        className="flex flex-row cursor-pointer justify-center items-center px-[16px] py-[14px] gap-[4px] w-[142px] h-[39px] bg-[#525FE1] rounded-[8px] text-[#F9FBFC] font-semibold text-[16px] leading-[13px] hover:bg-[#434dbd] transition-colors">
          + Create New
        </NavLink>
      </div>

      <div className="flex flex-col items-start p-0 gap-[24px] w-full">
        <QuizItem 
          title="Stoichiometry Quiz" 
          subject="Chemistry - Prep 2" 
          timeLeft="3 days left" 
          progress={72} 
          submissions="18/25"
          isUrgent={true}
        />
        <QuizItem 
          title="Mole Concept Quiz" 
          subject="Chemistry - Prep 2" 
          timeLeft="8 days left" 
          progress={25} 
          submissions="5/20"
          isUrgent={false}
        />
      </div>

    </div>
  );
};

export default ActiveQuizzes;