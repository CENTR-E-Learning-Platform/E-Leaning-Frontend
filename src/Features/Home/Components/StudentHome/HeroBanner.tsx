import React from "react";
import learningBro from "../../../../assets/images/Learning-bro.png";

interface HeroBannerProps {
  date: string;
  title: string;
  subtitle: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ date, title, subtitle }) => {
  return (
   <div>
     <div className="flex flex-row items-start p-[30px] pb-[4px] w-[1200px] h-[212px] bg-[linear-gradient(90deg,#525FE1_0%,#868EEA_100%)] rounded-[8px] flex-none order-0 self-stretch grow-0 z-0 relative overflow-hidden box-border">
      <div className="flex flex-col items-start  relative h-full">
        <div className="relative w-fit mt-[-1.00px] font-normal text-[#f9fbfc] text-sm whitespace-nowrap">
          {date}
        </div>

        <div className="flex flex-col items-start gap-2 relative">
          <p className="relative w-fit mt-[-1.00px] font-semibold text-[#f9fbfc] text-[32px] whitespace-nowrap">
            {title}
          </p>
          <p className="relative w-fit font-medium text-[#f9fbfc] text-base whitespace-nowrap">
            {subtitle}
          </p>
        </div>

        <button className="w-[134px] h-[45px] mt-[24px] flex bg-white items-center justify-center gap-1 relative rounded-lg cursor-pointer border-none">
          <div className="relative w-fit  font-semibold text-[#525fe1] text-[18px] whitespace-nowrap">
            Join Class
          </div>
        </button>
      </div>

    </div>
     <img
        className="absolute top-[70px] right-[100px] w-[289px] h-[289px] aspect-[]  "
        alt="Learning bro"
        src={learningBro}
      />
   </div>
  );
};