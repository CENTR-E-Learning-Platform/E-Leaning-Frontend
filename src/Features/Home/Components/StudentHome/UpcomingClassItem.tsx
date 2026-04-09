import React from "react";


export interface UpcomingClassData {
  time: string;
  period: string;
  title: string;
  subject: string;
  subjectBg: string;
  subjectText: string;
  teacherImg: string;
  teacherName: string;
  statusDot: string;
  statusText: string;
  statusLabel: string;
  joinBg: string;
  titleContainerClass?: string;
}

interface Props {
  cls: UpcomingClassData;
  isLast: boolean;
}

export const UpcomingClassItem: React.FC<Props> = ({ cls, isLast }) => {
 
  return (
    <div className="flex flex-col items-start p-0 gap-[20px] w-[639px]">
      <div className="flex flex-row justify-between items-center w-[639px] h-[110px]">
        <div className="flex flex-row items-center p-0 gap-[20px] w-[359px] h-[110px]">
          <div className="box-border relative w-[110px] h-[110px] bg-[#FFFFFF] border-2 border-solid border-[#E8EAED] rounded-[12px]">
            <span className="absolute left-[16px] top-[38px] font-['Poppins'] font-semibold text-[36px] leading-[24px] text-[#2A2D34]">
              {cls.time}
            </span>
            <span className="absolute left-[43px] top-[70px] font-['Poppins'] font-normal text-[14px] leading-[9px] text-[#2A2D34]">
              {cls.period}
            </span>
          </div>

          <div className="flex flex-col items-start p-0 gap-[16px] w-[229px]">
            <div className="flex flex-col items-start p-0 gap-[12px] w-[229px]">
              <span
                className={`font-['Poppins'] font-semibold text-[18px] h-[24px] leading-[13px] text-[#2A2D34] max-w-[229px] truncate min-w-0 ${cls.titleContainerClass || ""}`}
              >
                {cls.title}
              </span>

              <div
                className={`flex flex-row justify-center items-center px-[10px] py-[8px] gap-[10px] rounded-[18px] ${cls.subjectBg}`}
              >
                <span
                  className={`font-['Poppins'] font-semibold text-[16px] leading-[13px] ${cls.subjectText}`}
                >
                  {cls.subject}
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center p-0 gap-[8px]">
              <img
                className="w-[28px] h-[28px] rounded-full object-cover"
                alt={cls.teacherName}
                src={cls.teacherImg}
              />
              <span className="font-['Poppins'] font-medium text-[16px] leading-[13px] text-[#6D7588]">
                {cls.teacherName}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center p-0 gap-[24px]">
          <div className="flex flex-row justify-center items-center p-0 gap-[8px]">
            <div
              className={`w-[10px] h-[10px] rounded-full ${cls.statusDot}`}
            />
            <span
              className={`font-['Poppins'] font-semibold text-[16px] leading-[12px] ${cls.statusText}`}
            >
              {cls.statusLabel}
            </span>
          </div>

          <button
            className={`box-border flex flex-row justify-center items-center px-[16px] py-[14px] gap-[4px] w-[123px] h-[41px] rounded-[8px] border-none cursor-pointer ${cls.joinBg}`}
          >
            <span className="font-['Poppins'] font-semibold text-[18px] leading-[13px] text-[#F9FBFC] m-0 p-0">
              Join class
            </span>
          </button>
        </div>
      </div>

      {!isLast && (
        <div className="w-[639px] h-[0px] border-t border-solid border-[#E8EAED]" />
      )}
    </div>
  );
};
