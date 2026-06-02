import React from "react";
import { useNavigate } from "react-router-dom";
import ChemistryPhoto from "../../../../assets/images/ChemistryPhoto.svg";
import { useGetQuizzesStudent } from "../../Hooks/useGetQuizzesStudent";
import type { QuizDashboardStudent } from "../../Types/types";

const PendingQuizzes: React.FC = () => {
  const navigate = useNavigate();
  const { data: quizzesData } = useGetQuizzesStudent();
  console.log("Quizzes data in PendingQuizzes component", quizzesData);
  // Calculate days left from dueDate
  const calculateDaysLeft = (dueDate: string): string => {
    const due = new Date(dueDate);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "Expired";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "1 day left";
    return `${diffDays} days left`;
  };

  const quizzes: QuizDashboardStudent[] = quizzesData?.data?.data || [];

  const firstQuiz = quizzes[0];

  if (!firstQuiz) {
    return ;
  }

  return (
    <div className="box-border flex flex-col items-start px-[24px] py-[30px] gap-[28px] w-[453px] min-w-[400px] h-auto bg-white border border-[#E8EAED] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] rounded-[8px] font-['Poppins']">
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="font-bold text-[20px] leading-[17px] text-[#2A2D34]">
          Pending Quizzes
        </h2>
        {quizzes.length > 1 && (
          <button
            onClick={() => navigate("/quiz")}
            className="flex items-center justify-center px-[16px] py-0 gap-[8px] border-none bg-transparent cursor-pointer text-[16px] font-medium leading-[13px] text-[#525FE1] hover:text-[#434dbd] transition-colors"
          >
            See all
          </button>
        )}
      </div>

      <div className="flex flex-col items-start gap-[20px] w-full">
        <div className="flex flex-row items-start gap-[20px] w-full">
          <div className="relative w-[60px] h-[60px] bg-[#DAF3FF] rounded-[12px] flex items-center justify-center flex-shrink-0">
            <img
              src={ChemistryPhoto}
              alt={firstQuiz.subject}
              className="w-[32px] h-[32px]"
            />
          </div>

          <div className="flex flex-col items-start gap-[12px] flex-grow">
            <div className="flex flex-row justify-between items-center w-full">
              <h3 className="font-semibold text-[18px] leading-[13px] text-[#2A2D34]">
                {firstQuiz.title}
              </h3>
              <span className="px-[8px] py-[4px] bg-[#FDF2F8] rounded-[8px] font-bold text-[10px] leading-[15px] text-[#CC3363]">
                {calculateDaysLeft(firstQuiz.dueDate)}
              </span>
            </div>
            <div className="flex items-center justify-center gap-[10px] px-[10px] py-[8px] bg-[#DAF3FF] rounded-[18px]">
              <span className="font-semibold text-[16px] leading-[13px] text-[#0283C3]">
                {firstQuiz.subject}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#E8EAED]" />

      <div className="flex flex-row justify-between items-center gap-[138px]">
        <button
          onClick={() => navigate(`/quiz/${firstQuiz.quizId}/details`)}
          className="flex items-center justify-center px-[16px] py-[14px] gap-[8px] h-[39px] border-2 border-[#525FE1] rounded-[8px] font-medium text-[16px] leading-[13px] text-[#525FE1] bg-transparent cursor-pointer hover:bg-[#f0f4ff] transition-colors"
        >
          View Details
        </button>
        <button
          onClick={() => navigate(`/quiz/${firstQuiz.quizId}/start`)}
          className="flex items-center justify-center px-[16px] py-[14px] gap-[4px] h-[39px] bg-[#525FE1] rounded-[8px] font-semibold text-[16px] leading-[13px] text-[#F9FBFC] cursor-pointer hover:bg-[#434dbd] transition-colors border-none"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default PendingQuizzes;
