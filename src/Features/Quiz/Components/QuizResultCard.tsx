import React, { useState, useEffect } from 'react';

interface QuizResultCardProps {
  quizTitle?: string;
}

export const QuizResultCard: React.FC<QuizResultCardProps> = ({
  quizTitle = "Stoichiometry Quiz",
}) => {
  
  
  const [finalScore, setFinalScore] = useState(0);
  const [maxPossibleScore, setMaxPossibleScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  
  const [submitDate, setSubmitDate] = useState("");
  const [submitTime, setSubmitTime] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const now = new Date();
    setSubmitDate(now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase());
    setSubmitTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));

    const loadStoredData = () => {
      const storedData = localStorage.getItem("quizResult");

      try {
        const parsed = JSON.parse(storedData ? storedData : "{}");
        setFinalScore(parsed.finalScore || 0);
        setMaxPossibleScore(parsed.maxPossibleScore || 0);
        setFeedback(parsed.status || "");
        setTitle(parsed.quizTitle || quizTitle);
        
        const storedDate = new Date(parsed.submissionTime);
        setSubmitDate(storedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase());
        setSubmitTime(storedDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
        
      } catch(e) {
        console.error(e);
        }
      
    };

    loadStoredData();

    window.addEventListener("quizResultUpdated", loadStoredData);
    const interval = setInterval(() => {
      loadStoredData();
    }, 500);
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 3000);

    return () => {
      window.removeEventListener("quizResultUpdated", loadStoredData);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const scorePercentage = maxPossibleScore > 0 ? Math.round((finalScore / maxPossibleScore) * 100) : 0;
  const incorrectAnswers = maxPossibleScore - finalScore;

  return (
    <div className="relative flex flex-col items-start p-[30px] w-[638px] h-[353px] bg-white shadow-[0px_20px_40px_rgba(0,19,85,0.06)] rounded-lg font-['Poppins',sans-serif] overflow-hidden">
      
      <div className="absolute w-[128px] h-[128px] right-[-64px] top-[-64px] bg-[rgba(0,64,223,0.05)] rounded-full z-0" />

      <div className="relative flex flex-col items-start gap-[29px] w-full h-full z-10">
        
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col items-start gap-[4px]">
            <h2 className="m-0 font-semibold text-[23px] leading-[30px] text-[#2A2D34]">
              {title}
            </h2>
            <span className="font-medium text-[13px] leading-[19px] tracking-[1.4px] uppercase text-[#747688]">
              {submitDate} • {submitTime}
            </span>
          </div>

          <div className="flex flex-col items-center px-[23px] py-[11px] bg-[#ECFDF5] rounded-xl">
            <span className="font-bold text-[28px] leading-[34px] text-[#10B981]">
              {finalScore}/{maxPossibleScore}
            </span>
            <span className="font-semibold text-[13px] leading-[19px] text-[#059669]">
              ({scorePercentage}%)
            </span>
          </div>
        </div>

        <div className="relative flex flex-row items-center w-full h-[97px] bg-[#F1F4F9] rounded-xl p-[4px] gap-[4px]">
          
          <div className="flex-1 flex flex-col items-center justify-center h-full bg-white rounded-lg gap-[3px]">
            <span className="font-bold text-[11px] leading-[15px] tracking-[-0.6px] uppercase text-[#747688]">
              CORRECT
            </span>
            <span className="font-bold text-[23px] leading-[30px] text-[#2A2D34]">
              {finalScore}
            </span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center h-full bg-white rounded-lg gap-[3px]">
            <span className="font-bold text-[11px] leading-[15px] tracking-[-0.6px] uppercase text-[#747688]">
              INCORRECT
            </span>
            <span className="font-bold text-[23px] leading-[30px] text-[#2A2D34]">
              {incorrectAnswers}
            </span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center h-full bg-white rounded-lg gap-[3px]">
            <span className="font-bold text-[11px] leading-[15px] tracking-[-0.6px] uppercase text-[#747688]">
              SCORE
            </span>
            <span className="font-bold text-[23px] leading-[30px] text-[#525FE1]">
              {scorePercentage}%
            </span>
          </div>

        </div>

        <div className="flex flex-col items-center w-full gap-[22px]">
          <div className="relative w-full h-[11px] bg-[#E6E8ED] rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 bottom-0 bg-[#34D399] shadow-[0px_0px_10px_rgba(52,211,153,0.4)] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${scorePercentage}%` }}
            />
          </div>

          <div className="flex flex-col items-center w-full px-[23px]">
            <p className="m-0 font-normal text-[13px] leading-[19px] text-center text-[#434656]">
              "{feedback}"
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuizResultCard;