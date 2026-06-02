import React from "react";
import CalenderPhoto from "../../../../assets/images/CalenderPhoto.png";
import { useNavigate } from "react-router-dom";
import type { UpcomingEmptyProps } from "../../Types/types";


const UpcomingEmpty: React.FC<UpcomingEmptyProps> = ({
  buttonLabel = "Explore teachers",
  navigatePath = "/explore",
}) => {
  const navigate = useNavigate();

  return (
    <div className="box-border flex flex-col items-start p-[30px_20px] gap-[20px] w-[687px] min-w-[643px] h-[365px] bg-[#FFFFFF] border border-[#E8EAED] rounded-[8px] font-['Poppins'] shadow-sm">
      <div className="flex flex-row items-center p-0 gap-[97px] w-[208px] h-[17px]">
        <h2 className="w-[208px] h-[17px] font-bold text-[22px] leading-[17px] text-[#2A2D34] flex items-center">
          Upcoming classes
        </h2>
      </div>

      <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-full h-[141px]">
        <div className="w-[163px] h-[141px] bg-contain bg-no-repeat bg-center">
          <img
            src={CalenderPhoto}
            alt="No classes"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-0 gap-[20px] w-full h-[107px]">
        <div className="flex flex-col items-center gap-[8px]">
          <h3 className="h-[27px] font-bold text-[18px] leading-[27px] text-[#2A2D34] text-center">
            No classes yet
          </h3>
          <p className="h-[27px] font-medium text-[18px] leading-[27px] text-[#5A6272] text-center">
            Book your first class to get started
          </p>
        </div>

        <button
          onClick={() => navigate(navigatePath)}
          className="box-border flex flex-row justify-center items-center px-[16px] py-[14px] gap-[4px] w-[400px] h-[41px] bg-[#525FE1] hover:bg-[#434dbd] transition-colors rounded-[8px] border-none outline-none"
        >
          <span className="w-full h-[13px] font-semibold text-[18px] leading-[13px] text-[#F9FBFC] text-center">
            {buttonLabel}
          </span>
        </button>
      </div>
    </div>
  );
};

export default UpcomingEmpty;
