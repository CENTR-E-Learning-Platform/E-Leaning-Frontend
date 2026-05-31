import React, { useState, useEffect } from 'react';
import { useAttemptQuiz } from '../Hooks/useAttemptQuiz';
import { NavLink } from 'react-router-dom';

interface Option {
  optionId: number;
  optionTitle: string;
}

interface Question {
  questionId: number;
  questionType: string;
  questionTitle: string;
  questionPoints: number;
  options: Option[];
}

export const StudentAttemptQuiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const { submit } = useAttemptQuiz();

  useEffect(() => {
    const storedQuestions = localStorage.getItem("quizQuestions");
    const parsed = JSON.parse(storedQuestions ? storedQuestions : "[]");
    setQuestions(parsed);
  }, []);

  const handleOptionSelect = (questionId: number, optionId: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const formatQuestionType = (type: string) => {
    return type === 'multiplechoice' ? 'MULTIPLE CHOICE' : 'TRUE/FALSE';
  };

  const handleSubmit = async () => {
    await submit(selectedAnswers);
  };

  return (
    <div className="w-full max-w-[1045px] flex flex-col gap-[24px]">
      {questions.map((question, index) => (
        <div key={question.questionId} className="box-border select-none flex flex-col items-start p-[22px] gap-[14px] w-full bg-white border border-[#E8EAED] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] rounded-lg font-['Poppins',sans-serif]">

          <div className="flex flex-row justify-between items-start w-full h-[22px]">
            <div className="flex flex-col items-start px-[11px] py-[3px] bg-[#F1F4F9] rounded-full">
              <span className="font-bold text-[11px] leading-[15px] tracking-[0.6px] uppercase text-[#525FE1]">
                Q{index + 1} - {formatQuestionType(question.questionType)}
              </span>
            </div>
            <div className='text-[#747688] text-[13px] font-bold'>
              {question.questionPoints} Points
            </div>
          </div>

          <div className="flex flex-col items-start w-full">
            <h3 className="font-semibold select-none text-[16px] leading-[25px] flex items-center text-[#181C20] m-0">
              {question.questionTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] w-full">
            {question.options.map((option) => {
              const isSelected = selectedAnswers[question.questionId] === option.optionId;

              return (
                <button
                  key={option.optionId}
                  onClick={() => handleOptionSelect(question.questionId, option.optionId)}
                  className={`box-border flex flex-row justify-between items-center px-[15px] py-[10px] min-h-[54px] rounded-[11px] cursor-pointer text-left transition-colors ${isSelected
                    ? 'bg-[rgba(0,64,223,0.05)] border-[2px] border-[#525FE1]'
                    : 'bg-[#F1F4F9] border border-transparent hover:bg-[#e2e8f0]'
                    }`}
                >
                  <span className={`font-normal text-[15px] leading-[22px] select-none flex items-center ${isSelected ? "text-[#525FE1] font-bold font-['Manrope']" : "text-[#181C20]"}`}>
                    {option.optionTitle}
                  </span>

                  {isSelected && (
                    <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 border-[#525FE1] bg-[#525FE1]">
                      <div className="w-[8px] h-[8px] rounded-full bg-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

        </div>
      ))}

      <div className="flex justify-end w-full">
        <NavLink to="/quiz/result">
          <button
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="px-[30px] py-[12px] bg-[#525FE1] text-white font-bold rounded-lg cursor-pointer hover:bg-[#4350c9] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Submit Quiz
          </button>
        </NavLink>
      </div>

    </div>
  );
};

export default StudentAttemptQuiz;