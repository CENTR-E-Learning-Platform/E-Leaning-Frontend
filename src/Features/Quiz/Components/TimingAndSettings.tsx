import React, { useState } from 'react';
import { useQuiz } from '../Context/QuizContext';
import time from '../../../assets/icons/time.svg';
import inputtime from '../../../assets/icons/inputTime.svg';
import date from '../../../assets/icons/date.svg';

export const TimingAndSettings: React.FC = () => {
  const { QuizDataTime, setQuizDataTime } = useQuiz();
  const [selectedTimeLimit, setSelectedTimeLimit] = useState<string>('No time limit');
  const [selectedAttempt, setSelectedAttempt] = useState<string>('1 attempt');
  const timeLimits = ['No time limit', '30m', '60m', '90m', 'Custom'];
  const attempts = ['1 attempt', '2 attempts', 'Unlimited'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuizDataTime((prev) => ({ ...prev, [name]: value }));
  };
  console.log("attemp " , selectedAttempt);
  

  const handleAttemps = () =>{
    setQuizDataTime((prev)=>({...prev , Attemptes : selectedAttempt === '1 attempt' ? 1 : selectedAttempt === '2 attempts' ? 2 : 10}));
  }

  const handleDurationChange = (durationStr: string) => {
    setSelectedTimeLimit(durationStr);
    let durationValue = 0;
    if (durationStr.includes('m')) {
        durationValue = parseInt(durationStr.replace('m', ''));
    }
    console.log("dur " ,durationValue);
    
    setQuizDataTime((prev) => ({ ...prev, Duration: durationValue }));
  };

  return (
    <div className="box-border flex flex-col items-start p-[28px] gap-[28px] w-full max-w-[1045px] bg-white border border-[#E8EAED] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] rounded-lg font-['Poppins',sans-serif]">
      <div className="flex flex-row items-center gap-[11px] w-full">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns={time}>
          <circle cx="10" cy="10" r="10" fill="#525FE1" />
          <path d="M10 5.5V10.5L13 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="font-bold text-[16px] leading-[25px] text-[#2A2D34] m-0">
          Section 2: Timing & Settings
        </h2>
      </div>

      <div className="flex flex-col items-start gap-[28px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] w-full">
          <div className="flex flex-col items-start gap-[7px] w-full">
            <label className="font-semibold text-[13px] leading-[18px] text-[#2A2D34]">
              Due Date
            </label>
            <div className="relative w-full">
              <input
                type="date"
                name="Date"
                value={QuizDataTime?.Date || "2026-04-10"}
                onChange={handleChange}
                className="flex flex-row items-center pl-[15px] pr-[40px] py-[11px] w-full h-[43px] bg-[#F1F4F9] rounded-lg border-none outline-none font-normal text-[14px] leading-[22px] text-[#2A2D34] cursor-pointer  transition-colors relative z-10  [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
              <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center z-20">
               <img src={date} className='w-[16px] h-[16px]' alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[7px] w-full">
            <label className="font-semibold text-[13px] leading-[18px] text-[#2A2D34]">
              Due Time
            </label>
            <div className="relative w-full">
              <input
                type="time"
                name="Time"
                value={QuizDataTime?.Time || "23:59"}
                onChange={handleChange}
                className="flex flex-row items-center pl-[15px] pr-[40px] py-[11px] w-full h-[43px] bg-[#F1F4F9] rounded-lg border-none outline-none font-normal text-[14px] leading-[22px] text-[#2A2D34] cursor-pointer  transition-colors relative z-10  [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
              <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center z-20">
               <img src={inputtime} className='w-[16px] h-[16px]' alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[14px] w-full">
          <label className="font-semibold text-[13px] leading-[18px] text-[#2A2D34]">
            Time Limit
          </label>
          <div className="flex flex-row items-center gap-[11px] flex-wrap">
            {timeLimits.map((limit) => (
              <button
                key={limit}
                onClick={() => handleDurationChange(limit)}
                className={`flex flex-row items-center justify-center px-[18px] py-[9px] h-[36px] rounded-full font-bold text-[13px] leading-[18px] cursor-pointer transition-colors ${
                  selectedTimeLimit === limit
                    ? 'bg-[#525FE1] text-white hover:bg-[#414ebd]'
                    : 'bg-[#F1F4F9] text-[#434656] hover:bg-[#e4e8ef]'
                }`}
              >
                {limit}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-[14px] w-full">
          <label className="font-semibold text-[13px] leading-[18px] text-[#2A2D34]">
            Attempts Allowed
          </label>
          <div className="flex flex-row items-center gap-[11px] flex-wrap">
             {attempts.map((attempt) => (
              <button
                key={attempt}
                onClick={() => 
                  {setSelectedAttempt(attempt)
                    handleAttemps();
                  }}
                className={`flex flex-row items-center justify-center px-[22px] py-[11px] h-[43px] rounded-[11px] font-bold text-[13px] leading-[18px] box-border cursor-pointer transition-colors ${
                  selectedAttempt === attempt
                    ? 'bg-[rgba(45,91,255,0.1)] border-[2px] border-[#525FE1] text-[#525FE1] hover:bg-[rgba(45,91,255,0.2)]'
                    : 'bg-[#F1F4F9] border-[2px] border-transparent text-[#2A2D34] hover:bg-[#e4e8ef]'
                }`}
              >
                {attempt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimingAndSettings;