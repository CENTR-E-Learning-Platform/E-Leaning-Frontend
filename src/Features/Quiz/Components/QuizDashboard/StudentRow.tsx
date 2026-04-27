import { useQuizSubmissions } from '../../Hooks/useQuizSubmissions';
import { useQuizSearch } from '../../Hooks/useQuizSearch';
import { useQuiz } from '../../Context/QuizContext';

const StudentRow = () => {
  const { searchData } = useQuiz();
  const quizSubmissions = useQuizSubmissions();

  const quizSearch = useQuizSearch(searchData); 
  
  const submissions = searchData.trim() !== "" ? quizSearch.data?.data : quizSubmissions.data?.data;

  return (
   <div>
    {submissions?.map((e: any, index: number) => (
      
      <div key={e.id || index} className="flex flex-row justify-center items-center w-[760px] h-[72px] font-['Poppins',sans-serif]">
        
        <div className="flex flex-row items-center gap-[11px] w-[202px] h-[29px]">
          <div className="flex justify-center items-center w-[29px] h-[29px] bg-[#DDE1FF] rounded-full">
            <span className="font-bold text-[11px] leading-[14px] text-[#525FE1]">
                {e?.studentName?.slice(0, 2).toUpperCase()}
            </span>
          </div>
          <div className="flex flex-col justify-center h-[23px]">
            <span className={`font-bold text-[15px] leading-[22px] text-[#2A2D34]`}>
             {e?.studentName?.split(' ').slice(0, 2).join(' ')}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start pl-[60px] w-[207px] h-[70px]">
          <div className={`flex justify-center items-center px-[11px] py-[3px] ${e.status ? "bg-[#DDE1FF]" : "bg-[#F1F5F9]"} rounded-full`}>
            <span className={`font-bold text-[11px] leading-[16px] uppercase  ${e.status ? "text-[#525FE1]" : "text-[#64748B]"}  `}>
              {e.status ?  "Submitted" : "Not started" }
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start pl-[30px] w-[125px] h-[72px]">
          <span className="font-normal text-[15px] leading-[22px] text-[#434656]">
            {e.grade || '-' }
          </span>
        </div>

        <div className="flex flex-row justify-end items-center pl-[30px] gap-[7px] w-[163px] h-[36px]">
          <button className="flex justify-center items-center w-[66px] h-[36px] bg-[#525FE1] rounded-[7px]">
            <span className="font-bold text-[11px] leading-[14px] text-center text-white">
              Grade
            </span>
          </button>
        </div>

      </div>
    ))}
   </div>
  );
};

export default StudentRow;