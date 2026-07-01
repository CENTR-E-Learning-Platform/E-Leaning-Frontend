import date from '../../../assets/icons/date.svg';
import book from '../../../assets/icons/book.svg';
import chem from '../../../assets/icons/chems.svg';
import { useQuiz } from '../Context/QuizContext';
const QuizSummaryBar= () => {
  const { QuizDataTime } = useQuiz();
  return (
    <div className="flex flex-row items-center px-5 py-4 gap-[14px] w-[1045px] h-[58px] bg-[#F1F4F9] border-l-4 border-l-[#525FE1] shadow-sm rounded-lg font-[Poppins]">
      <div className="flex flex-row items-center gap-2">
     <img src={book} className='w-[14px] h-[18px]' alt="" />
        <span className="font-semibold text-base text-[#181C20] text-[14px] leading-6">
          {QuizDataTime?.Title || "Stoichiometry Quiz"}
        </span>
      </div>

      <div className="w-[1px] h-4 bg-[#E2E8F0]" />

      <div className="flex flex-row items-center gap-2">
        <img src={chem} className='w-[16px] h-[18px]' alt="" />
        <span className="font-normal text-base text-[#475569] text-[14px] leading-6">
          {QuizDataTime?.Class || "Chemistry - Prep 2"}
        </span>
      </div>

      <div className="w-[1px] h-4 bg-[#E2E8F0]" />
      <img src={date} className='w-[16px]' alt="" />
      <div className="flex flex-row items-center gap-1">
        <span className="font-normal text-base text-[#475569] text-[14px] leading-6">
          Due: {QuizDataTime?.Date|| "Apr 10, 2026"}  
        </span>
      </div>
    </div>
  );
};

export default QuizSummaryBar;