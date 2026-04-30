import React from 'react';

interface ClassItemProps {
  time: string;
  period: string;
  title: string;
  grade: string;
  statusText: string;
  statusColor: string;
  buttonOpacity: string;
  attendeesCount: string;
}

const UpcomingClassItem: React.FC<ClassItemProps> = ({
  time,
  period,
  title,
  grade,
  statusText,
  statusColor,
  buttonOpacity,
  attendeesCount,
}) => {
  return (
    <div className="flex flex-row justify-between w-full items-center h-[100px] font-['Poppins']">
      <div className="flex flex-row items-center gap-[20px] w-[349px] h-[100px]">
        <div className="flex flex-col justify-center items-center p-[21px_15px] w-[100px] h-[100px] bg-white border-2 border-[#E8EAED] rounded-[12px]">
          <span className="text-[#2A2D34] font-bold text-[28px] leading-[24px]">{time}</span>
          <span className="text-[#2A2D34] font-normal text-[14px] leading-[9px] mt-2 uppercase">{period}</span>
        </div>

        <div className="flex flex-col items-start gap-[16px] w-[229px] h-[90px]">
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="text-[#2A2D34] font-semibold text-[18px] leading-[13px]">{title}</h3>
            <p className="text-[#6D7588] font-medium text-[14px] leading-[13px]">{grade}</p>
          </div>
          
          <div className="flex flex-row items-center p-[4px_16px_4px_4px] gap-[8px] bg-[#E8EAED] rounded-[60px] h-[36px]">
            <div className="flex flex-row items-center">
              <div className="w-[28px] h-[28px] rounded-full border border-[#D1D5DB] bg-gray-300 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=1" alt="user" />
              </div>
              <div className="w-[28px] h-[28px] rounded-full border border-[#D1D5DB] bg-gray-400 overflow-hidden -ml-[10px]">
                <img src="https://i.pravatar.cc/150?u=2" alt="user" />
              </div>
              <div className="w-[28px] h-[28px] rounded-full border border-[#D1D5DB] bg-gray-500 overflow-hidden -ml-[10px]">
                <img src="https://i.pravatar.cc/150?u=3" alt="user" />
              </div>
            </div>
            <span className="text-[#2A2D34] font-medium text-[16px] leading-[13px]">+{attendeesCount}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-[24px]">
        <div className="flex flex-row items-center gap-[8px]">
          <div className="w-[8px] h-[8px] rounded-full" style={{ backgroundColor: statusColor }}></div>
          <span className="font-semibold text-[14px] leading-[12px]" style={{ color: statusColor }}>
            {statusText}
          </span>
        </div>

        <button 
          className="flex justify-center items-center p-[14px_16px] w-[113px] h-[39px] bg-[#525FE1] rounded-[8px] text-white font-semibold text-[16px] leading-[13px] transition-all hover:brightness-110"
          style={{ opacity: buttonOpacity }}
        >
          Join class
        </button>
      </div>
    </div>
  );
};

export default UpcomingClassItem;