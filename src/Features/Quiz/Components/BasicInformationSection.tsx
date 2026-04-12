import React from 'react';
import chem from '../../../assets/icons/chems.svg'
import arrow from '../../../assets/icons/arrowList.svg'
import ii from '../../../assets/icons/i.svg'
export const BasicInformationSection: React.FC = () => {
  return (
    <div className="box-border flex flex-col items-start p-[28px] gap-[28px] w-full max-w-[1045px] bg-white border border-[#E8EAED] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] rounded-lg font-['Poppins',sans-serif]">
      <div className="flex flex-row items-center gap-[11px] w-full">
        <img src={ii} className='w-[18px] h-[19px]' alt="" />
        <h2 className="font-bold text-[17px] leading-[25px] text-[#2A2D34] m-0">
          Section 1: Basic Information
        </h2>
      </div>

      <div className="flex flex-col items-start gap-[22px] w-full">
        <div className="flex flex-col items-start gap-[7px] w-full">
          <label className="font-semibold text-[13px] leading-[18px] text-[#2A2D34]">
            Quiz Title
          </label>
          <input
            type="text"
            placeholder="Stoichiometry Quiz"
            className="flex flex-row items-center p-[10px_15px_11px] w-full h-[44px] bg-[#F1F4F9] rounded-lg border-none outline-none font-normal text-[15px] leading-[22px] text-[#2A2D34] placeholder:text-opacity-50 placeholder:text-[#747688]"
          />
          <span className="font-normal text-[11px] leading-[14px] text-[#747688]">
            Give your quiz a clear, descriptive name
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] w-full">
          <div className="flex flex-col items-start gap-[7px] w-full">
            <label className="font-semibold text-[13px] leading-[18px] text-[#2A2D34]">
              Select Class
            </label>
            <div className="relative w-full">
              <select className="appearance-none flex flex-row items-center px-[15px] py-[11px] w-full h-[43px] bg-[#F1F4F9] rounded-lg border-none outline-none font-normal text-[15px] leading-[22px] text-[#2A2D34] cursor-pointer pr-[38px]">
                <option>Chemistry - Prep 2 (25 students)</option>
              </select>
              <div className="absolute right-[15px] top-1/2 -translate-y-1/2 pointer-events-none">
                <img src={arrow} className='w-[10px] h-[6px]' alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[7px] w-full">
            <label className="font-semibold text-[13px] leading-[18px] text-[#2A2D34]">
              Subject
            </label>
            <div className="flex flex-row items-center px-[15px] py-[11px] gap-[7px] w-full h-[43px] bg-[#E0E2E7] bg-opacity-40 rounded-lg">
              <img src={chem} className='w-[13px] h-[13px]' alt="" />
              <span className="font-normal text-[15px] leading-[22px] text-[#747688]">
                Chemistry
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformationSection;