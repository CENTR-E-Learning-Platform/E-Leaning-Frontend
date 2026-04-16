import React from 'react';
import {type Question } from '../Types/types';
import pin from '../../../assets/icons/pin.svg';
import deleteicon from '../../../assets/icons/delete.svg';
import correct from '../../../assets/icons/correct.svg';
interface QuestionCardProps {
  question: Question;
  index: number;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, index, onEdit, onDelete }) => {
  const formatQuestionType = (type: string) => {
    return type === 'MULTIPLE_CHOICE' ? 'MULTIPLE CHOICE' : 'TRUE/FALSE';
  };

  return (
    <div className="box-border select-none flex flex-col items-start p-[22px] gap-[14px] w-full max-w-[1045px] bg-white border border-[#E8EAED] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] rounded-lg font-['Poppins',sans-serif]">
      
      <div className="flex flex-row justify-between items-start w-full h-[22px]">
        <div className="flex flex-col items-start px-[11px] py-[3px] bg-[#F1F4F9] rounded-full">
          <span className="font-bold text-[11px] leading-[15px] tracking-[0.6px] uppercase text-[#525FE1]">
            Q{index + 1} - {formatQuestionType(question.questionType)} ({question.points} POINTS)
          </span>
        </div>

        <div className="flex flex-row items-start gap-[14px] h-[18px]">
          <button onClick={onEdit} className="flex flex-row items-center gap-[4px] bg-transparent border-none p-0 cursor-pointer hover:opacity-80 transition-opacity">
          <img src={pin} width={12} height={12} alt="" />
            <span className="font-semibold text-[13px] leading-[18px] text-center text-[#747688]">
              Edit
            </span>
          </button>
          
          <button onClick={onDelete} className="flex flex-row items-center gap-[4px] bg-transparent border-none p-0 cursor-pointer hover:opacity-80 transition-opacity">
           <img src={deleteicon} width={11} height={12} alt="" />
            <span className="font-semibold text-[13px] leading-[18px] text-center text-[#747688]">
              Delete
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start w-full">
        <h3 className="font-semibold select-none text-[16px] leading-[25px] flex items-center text-[#181C20] m-0">
          {question.questionTitle}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] w-full">
        {question.options.map((option, idx) => (
          <div 
            key={idx}
            className={`box-border flex flex-row justify-between items-center px-[15px] py-[10px] min-h-[54px] rounded-[11px] ${
              option.isCorrect 
                ? 'bg-[rgba(0,64,223,0.05)] border-[2px] border-[#525FE1]' 
                : 'bg-[#F1F4F9] border border-transparent'
            }`}
          >
            <span className={`font-normal text-[15px] leading-[22px] select-none flex items-center ${option.isCorrect ? "text-[#525FE1] font-bold font-['Manrope']" : "text-[#181C20]"}`}>
              {option.optionText}
            </span>
            
            {option.isCorrect && (
             <img src={correct} width={18} alt="" />
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default QuestionCard;