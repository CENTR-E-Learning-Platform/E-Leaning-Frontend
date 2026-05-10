import correctSign from '../../../../assets/icons/correctSign.svg';
import listCircle from '../../../../assets/icons/listCircle.svg';
import digram from '../../../../assets/icons/analyticsDigram.svg';
import { useQuizStatus } from '../../Hooks/useQuizStatus'; 
import { useParams } from 'react-router-dom';

const SubmissionStatus = () => {
  const {quizId} = useParams();
  const { data } = useQuizStatus(Number(quizId));
  const submitted = Number(data?.data?.numberOfSubmittedStudents );
  let total = Number(data?.data?.totalNumberOfStudents );

  if(submitted > total) {
    total = submitted;
  }
  const pending = Number(data?.data?.numberOfPendingStudents ) <= 0 ? 0 : Number(data?.data?.numberOfPendingStudents );
  
  const percentage = total > 0 ? Math.round((submitted / total) * 100) : 0;

  return (
    <div className="flex flex-col items-start p-7 gap-5 w-[365px] bg-white border border-[#E8EAED] shadow-[0px_18px_36px_rgba(0,19,85,0.06)] rounded-lg font-['Poppins',sans-serif]">
      <div className="flex flex-row items-center gap-2 w-full">
        <img src={digram} className='w-[16px] h-[16px]' alt="" />
        <h3 className="font-bold text-[18px] leading-[26px] text-[#2A2D34]">
          Submission Status
        </h3>
      </div>

      <div className="flex flex-col items-start gap-2 w-full">
        <div className="flex flex-row justify-between items-end w-full">
          <span className="font-bold text-[13px] leading-[18px] text-[#2A2D34]">
            {submitted}/{total} submitted
          </span>
          <span className="font-extrabold text-[22px] leading-[28px] text-[#525FE1]">
            {percentage}%
          </span>
        </div>
        <div className="w-full h-[10px] bg-[#ECEEF3] rounded-full relative">
          <div 
            className="absolute left-0 top-0 h-[10px] bg-[#525FE1] rounded-full transition-all duration-300" 
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 w-full">
        <div className="flex flex-row justify-between items-center p-[10px] px-3 w-full bg-[#F1F4F9] rounded-lg">
          <div className="flex flex-row items-center gap-2">
            <img src={correctSign} className='w-[18px] h-[18px]' alt="" />
            <span className="font-medium text-[15px] text-[#434656]">Submitted</span>
          </div>
          <span className="font-bold text-[15px] text-[#2A2D34]">{submitted} students</span>
        </div>

        <div className="flex flex-row justify-between items-center p-[10px] px-3 w-full bg-[#F1F4F9] rounded-lg">
          <div className="flex flex-row items-center gap-2">
              <img src={listCircle} className='w-[18px] h-[18px]' alt="" />
            <span className="font-medium text-[15px] text-[#434656]">Pending</span>
          </div>
          <span className="font-bold text-[15px] text-[#2A2D34]">{pending} students</span>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 w-full mt-1">
        <button className="w-full h-[44px] bg-[#525FE1] rounded-lg text-white font-bold text-[15px] flex items-center justify-center hover:bg-[#424dbe] transition-colors cursor-pointer">
          Send reminder to pending
        </button>
        <button className="w-full h-[46px] border-2 border-[#C4C5D9] rounded-lg text-[#525FE1] font-bold text-[15px] flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
          Remind All
        </button>
      </div>
    </div>
  );
};

export default SubmissionStatus;