import React, { useState } from 'react';
import { Star } from 'lucide-react';
import teacherPhoto from '../../../assets/images/mester.jpg';

const RateClass = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex flex-col items-start p-0 absolute w-[460px] max-w-[460px] bg-[#1B1D22] shadow-[0px_20px_40px_rgba(0,0,0,0.5)] rounded-[14px] z-50">
      <div className="flex flex-col items-start px-[28px] pt-[28px] pb-[14px] w-full">
        <h2 className="font-['Poppins'] font-bold text-[21px] leading-[28px] flex items-center text-[#FFFFFF] w-full">
          Rate Your Class
        </h2>
      </div>

      <div className="flex flex-col items-start px-[28px] pb-[28px] gap-[21px] w-full">
        <div className="box-border flex flex-row items-center p-[18px] gap-[14px] w-full h-[86px] bg-[#252525] rounded-[7px]">
          <img
            src={teacherPhoto}
            alt="Teacher"
            className="w-[50px] h-[50px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-full object-cover"
          />
          <div className="flex flex-col items-start gap-[2px]">
            <h4 className="font-['Poppins'] font-bold text-[16px] leading-[21px] flex items-center text-[#F9FBFC]">
              Mr. Mohamed salama
            </h4>
            <div className="flex flex-row items-center gap-[7px]">
              <div className="flex flex-row justify-center items-center py-[5px] px-[7px] bg-[#FFDEDE] rounded-[16px]">
                <span className="font-['Poppins'] font-semibold text-[11px] leading-[12px] text-[#611D1D]">
                  Pure mathematics
                </span>
              </div>
              <span className="font-['Manrope'] font-medium text-[11px] leading-[14px] flex items-center text-[#8B949E]">
                •
              </span>
              <span className="font-['Poppins'] font-normal text-[11px] leading-[14px] flex items-center text-[#8B949E]">
                Mar 25, 2026 • 5:00 PM
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-[14px] gap-[14px] w-full">
          <div className="flex flex-row justify-center items-center gap-[10px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={28}
                fill={(hoverRating || rating) >= star ? "#FFB400" : "#E8EAED"}
                color={(hoverRating || rating) >= star ? "#FFB400" : "#E8EAED"}
                className="cursor-pointer transition-colors"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
          <div className="flex flex-row justify-between items-start w-full px-[14px]">
            <span className="font-['Poppins'] font-medium text-[11px] leading-[14px] flex items-center tracking-[1.2px] uppercase text-[#8B949E]">
              POOR
            </span>
            <span className="font-['Poppins'] font-medium text-[11px] leading-[14px] flex items-center tracking-[1.2px] uppercase text-[#8B949E]">
              EXCELLENT
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[7px] w-full">
          <label className="font-['Poppins'] font-semibold text-[12px] leading-[18px] flex items-center text-[#8B949E] w-full">
            Write a Review (Optional)
          </label>
          <textarea
            placeholder="Share your experience with this teacher..."
            className="box-border flex flex-col items-start p-[14px] w-full h-[115px] bg-[#0D1117] border border-[#30363D] rounded-[10px] font-['Poppins'] font-normal text-[14px] leading-[21px] text-white placeholder-[rgba(139,148,158,0.5)] focus:outline-none focus:border-[#525FE1] resize-none transition-colors"
          />
        </div>

        <div className="flex flex-col items-start pt-[7px] gap-[10px] w-full">
          <button className="flex flex-col justify-center items-center py-[14px] w-full bg-[#525FE1] shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)] rounded-[10px] hover:bg-[#4350c9] transition-colors cursor-pointer">
            <span className="font-['Poppins'] font-bold text-[14px] leading-[21px] flex items-center text-center text-[#FFFFFF]">
              Submit Review
            </span>
          </button>
          <button className="box-border flex flex-col justify-center items-center py-[14px] w-full border border-[#6E849D] rounded-[10px] hover:bg-[#252525] transition-colors cursor-pointer">
            <span className="font-['Poppins'] font-semibold text-[14px] leading-[21px] flex items-center text-center text-[#8B949E]">
              Skip for Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateClass;
