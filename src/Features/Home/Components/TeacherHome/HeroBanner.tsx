import React from "react";
import learningBro from "../../../../assets/images/TeacherHome.png";
import { useNavigate } from "react-router-dom";
import type { HeroBannerProps } from "../../Types/types";

export const HeroBanner: React.FC<HeroBannerProps> = ({
  date,
  title,
  subtitle,
}) => {

  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-visible bg-[linear-gradient(90deg,#525FE1_0%,#868EEA_100%)] rounded-[8px] min-h-[180px] sm:min-h-[200px] lg:min-h-[212px]">
      <div className="overflow-hidden absolute inset-0 rounded-[8px]" />

      <div className="flex flex-col items-start p-6 sm:p-7 lg:p-[30px] relative z-10 max-w-[65%] sm:max-w-[60%]">
        <div className="font-normal text-[#f9fbfc] text-sm whitespace-nowrap mb-3">
          {date}
        </div>

        <div className="flex flex-col items-start gap-2">
          <p className="font-semibold text-[#f9fbfc] text-xl sm:text-2xl lg:text-[32px] leading-tight m-0">
            {title}
          </p>
          <p className="font-medium text-[#f9fbfc] text-xs sm:text-sm lg:text-base leading-snug m-0">
            {subtitle}
          </p>
        </div>

        <button
          onClick={() => {
            navigate("/Calendar");
          }}
          className="w-[174px] sm:w-[174px] h-[40px] sm:h-[45px] mt-5 sm:mt-6 flex bg-white items-center justify-center rounded-lg cursor-pointer border-none"
        >
          <span className="font-semibold text-[#525fe1] text-sm sm:text-[18px] whitespace-nowrap">
            View Schedule
          </span>
        </button>
      </div>

      <img
        className="absolute -bottom-[10px] right-[6px] lg:right-[10px] w-[140px] sm:w-[210px] lg:w-[289px] h-auto object-contain pointer-events-none z-20"
        alt="Teacher home"
        src={learningBro}
      />
    </div>
  );
};
