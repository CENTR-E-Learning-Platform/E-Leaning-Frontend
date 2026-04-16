import React from 'react';
import { useQuiz } from '../Context/QuizContext';
import rocket from '../../../assets/icons/rocket.svg';
interface PublishQuizModalProps {
  onCancel: () => void;
  onPublish: () => void;
  quizTitle?: string;
  classNameName?: string;
}

export const PublishQuizModal: React.FC<PublishQuizModalProps> = ({
  onCancel,
  onPublish,
}) => {
  const { QuizDataTime } = useQuiz();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#181C20]/40 bg-opacity-[0.45] backdrop-blur-sm"
        onClick={onCancel}
      />
      
      {/* Modal Container */}
      <div className="relative z-10 flex flex-col items-center p-[36px] w-[486px] h-[367px] bg-white rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] font-['Poppins',sans-serif]">
        
        {/* Icon Container */}
        <div className="mb-[22px] flex shrink-0 justify-center items-center w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#525FE1] to-[#717EFF] shadow-[0px_20px_25px_-5px_rgba(0,64,223,0.3),0px_8px_10px_-6px_rgba(0,64,223,0.3)]">
            <img src={rocket} className="w-[29px] h-[30px]" alt="" />
        </div>

        {/* Title */}
        <div className="mb-[11px] flex flex-col items-center">
          <h3 className="m-0 font-extrabold text-[27px] leading-[32px] text-center text-[#2A2D34]">
            Publish Quiz?
          </h3>
        </div>

        {/* Description */}
        <div className="mb-[29px] flex flex-col items-center px-[35px] w-full text-center">
          <p className="m-0 font-normal text-[15px] leading-[25px] text-[#434656]">
            Are you ready to release "{QuizDataTime.Title}" to {QuizDataTime.Class}? This action will notify all students in the class immediately.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row justify-between w-full h-[54px]">
          <button 
            onClick={onCancel}
            className="flex flex-col justify-center items-center w-[197px] h-full border-2 border-[#D1D5DB] rounded-lg bg-transparent cursor-pointer hover:bg-[#F8FAFC] transition-colors"
          >
            <span className="font-bold text-[14px] leading-[22px] text-center text-[#2A2D34]">
              Cancel
            </span>
          </button>
          
          <button 
            onClick={onPublish}
            className="relative flex flex-col justify-center items-center w-[197px] h-full bg-[#525FE1] rounded-lg cursor-pointer hover:bg-[#4350c9] transition-colors shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)] border-none"
          >
            <span className="font-bold text-[14px] leading-[22px] text-center text-white z-10">
              Publish
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default PublishQuizModal;