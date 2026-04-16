import React from 'react';
import add from '../../../assets/icons/add.svg';
interface AddNewQuestionTriggerProps {
  onClick: () => void;
}

export const AddNewQuestionTrigger: React.FC<AddNewQuestionTriggerProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="box-border flex flex-col justify-center items-center gap-[12px] w-full max-w-[1045px] h-[153px] border-2 border-dashed border-[#D1D5DB] rounded-[12px] bg-transparent cursor-pointer hover:bg-[#F8FAFC] transition-colors"
    >
      <div className="flex flex-col items-center justify-center w-[30px] h-[30px]">
        <img src={add} width={30} height={30} alt="" />
      </div>
      <span className="font-['Poppins',sans-serif] font-bold text-[18px] leading-[28px] text-[#747688]">
        Add New Question
      </span>
    </button>
  );
};

export default AddNewQuestionTrigger;