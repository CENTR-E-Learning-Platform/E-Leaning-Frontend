import React, { useState, useEffect } from 'react';
import time from '../../../assets/icons/alert.svg';
export const QuizHeaderAttempt: React.FC = () => {
  const data = JSON.parse(localStorage.getItem("attemptData") || "null");
  
  const totalSeconds = data?.timeLimitInMinutes ? data.timeLimitInMinutes * 60 : 0;
  const [timeLeft, setTimeLeft] = useState<number>(totalSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const formatDueDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', { 
      weekday: 'long', 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    });
  };

  const isDanger = totalSeconds > 0 && timeLeft <= totalSeconds * 0.1;

  return (
    <div className="box-border flex flex-row justify-between items-center px-[23px] py-[14px] w-[1045px] max-w-[1045px] h-[68px] bg-white/80 border border-[#E8EAED] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[12px] rounded-[7px]">
      <div className="flex flex-row items-center gap-[15px]">
       
        <div className="flex flex-col items-start">
          <h1 className="m-0 font-['Manrope',sans-serif] font-bold text-[16px] leading-[25px] text-[#181C20]">
            {data?.quizTitle}
          </h1>
          <span className="font-['Manrope',sans-serif] font-medium text-[11px] leading-[14px] text-[#64748B]">
            Due {formatDueDate(data?.dueDate)}
          </span>
        </div>
      </div>

      <div className={`flex flex-row items-center py-[7px] px-[15px] gap-[7px] rounded-full transition-colors duration-300 ${isDanger ? 'bg-[#FFDAD6]' : 'bg-[#DCFCE7]'}`}>
       <img src={time} className='w-[10px] h-[11px]' alt="" />
        <span className={`font-['Manrope',sans-serif] font-bold text-[13px] leading-[18px] ${isDanger ? 'text-[#BA1A1A]' : 'text-[#166534]'}`}>
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
};

export default QuizHeaderAttempt;