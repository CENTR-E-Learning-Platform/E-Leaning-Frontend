import React from 'react';
import { useQuizStatus } from '../../Hooks/useQuizStatus';
import { useParams } from 'react-router-dom';

const PerformancePreview: React.FC = () => {
  const {quizId} = useParams();
  const { data } = useQuizStatus(Number(quizId)); 

  const classAvg = Number(data?.data?.classAvg );
  const totalPoints =100;
  const highest = Number(data?.data?.highestScoreInQuiz );

  const countA = Number(data?.data?.gradeDistribution.A );
  const countB = Number(data?.data?.gradeDistribution.B );
  const countC = Number(data?.data?.gradeDistribution.C );

  const totalGrades = countA + countB + countC;

  const percentA = totalGrades > 0 ? (countA / totalGrades) * 100 : 0;
  const percentB = totalGrades > 0 ? (countB / totalGrades) * 100 : 0;
  const percentC = totalGrades > 0 ? (countC / totalGrades) * 100 : 0;

  return (
    <div className="flex flex-col items-start p-7 gap-[14px] w-[365px] h-[331px] bg-white border-t-4 border-[#7E5700] shadow-[0px_18px_36px_rgba(0,19,85,0.06)] rounded-lg font-['Poppins',sans-serif] box-border">
      <div className="w-full h-7">
        <h3 className="font-bold text-[19px] leading-7 text-[#2A2D34] m-0">
          Performance Preview
        </h3>
      </div>

      <div className="flex flex-row justify-between items-center w-full h-[82px] gap-3">
        <div className="flex flex-col items-center justify-center p-3 flex-1 h-full bg-[#F1F4F9] rounded-lg">
          <span className="font-bold text-[11px] leading-4 tracking-[1.2px] uppercase text-[#434656] mb-1">
            CLASS AVG
          </span>
          <div className="flex flex-row items-baseline">
            <span className="font-extrabold text-[22px] leading-7 text-[#2A2D34]">
              {classAvg}
            </span>
            <span className="font-normal text-[13px] leading-5 text-[#434656]">
              /{totalPoints}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-3 flex-1 h-full bg-[#F1F4F9] rounded-lg">
          <span className="font-bold text-[11px] leading-4 tracking-[1.2px] uppercase text-[#434656] mb-1">
            HIGHEST
          </span>
          <span className="font-extrabold text-[22px] leading-7 text-[#7E5700]">
            {highest}
          </span>
        </div>
      </div>

      <div className="w-full pt-3">
        <h4 className="font-bold text-[13px] leading-5 text-[#434656] m-0">
          Grade Distribution
        </h4>
      </div>

      <div className="flex flex-col items-start gap-[10px] w-full">
        <div className="flex flex-row items-center gap-3 w-full h-[22px]">
          <span className="w-4 font-bold text-[11.5px] leading-4 text-[#2A2D34]">
            A
          </span>
          <div className="flex-1 h-full bg-[#ECEEF3] rounded-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 bg-[#525FE1]" style={{ width: `${percentA}%` }}></div>
          </div>
          <span className="w-2 font-bold text-[11.5px] leading-4 text-[#2A2D34]">
            {countA}
          </span>
        </div>

        <div className="flex flex-row items-center gap-3 w-full h-[22px]">
          <span className="w-4 font-bold text-[11.5px] leading-4 text-[#2A2D34]">
            B
          </span>
          <div className="flex-1 h-full bg-[#ECEEF3] rounded-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 bg-[#525FE1] opacity-80" style={{ width: `${percentB}%` }}></div>
          </div>
          <span className="w-2 font-bold text-[11.5px] leading-4 text-[#2A2D34]">
            {countB}
          </span>
        </div>

        <div className="flex flex-row items-center gap-3 w-full h-[22px]">
          <span className="w-4 font-bold text-[11.5px] leading-4 text-[#2A2D34]">
            C
          </span>
          <div className="flex-1 h-full bg-[#ECEEF3] rounded-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 bg-[#525FE1] opacity-60" style={{ width: `${percentC}%` }}></div>
          </div>
          <span className="w-2 font-bold text-[11.5px] leading-4 text-[#2A2D34]">
            {countC}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformancePreview;