import React from 'react';
import DownloadIcon from "../../../../../src/assets/icons/DownloadIcon.svg"
import iconPDF from "../../../../../src/assets/icons/PDFicon.svg"

export const TeacherFileMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-end p-0 w-[430px] self-stretch">
      <div className="flex flex-row items-start p-0 gap-[15.2px] w-[319.2px] max-w-[440.04px]">
        <div className="flex flex-col items-end p-0 gap-[10.8px] w-[273.6px]">
          <div className="flex flex-row items-center pt-[14.4px] pr-[20.5px] pb-[14.4px] pl-[15.2px] gap-[11.4px] w-[273.6px] h-[61.2px] bg-white border-2 border-[rgba(45,91,255,0.2)] shadow-sm rounded-[12px]">
            <div className="flex justify-center items-center w-[38px] h-[36px] bg-[#FEF2F2] rounded-[8px]">
                <img src={iconPDF} alt="iconPDF" />
            </div>
            <div className="flex flex-col flex-1 h-[31.5px]">
              <div className="h-[18px]">
                <span className="block w-full h-[18px] font-['Poppins'] font-semibold text-[14px] leading-[18px] text-[#2A2D34] truncate">
                  Q4_correction.pdf
                </span>
              </div>
              <div className="">
                <span className="block w-full  font-['Poppins'] font-semibold text-[10px] leading-[13.5px] tracking-[0.5px] uppercase text-[#434656]">
                  148 KB · PDF
                </span>
              </div>
            </div>
            <img src={DownloadIcon} alt="DownloadIcon" />
          </div>
          <div className="flex flex-col items-start  px-[3.8px] pb-0 w-[41.85px] h-[20.7px]">
            <span className="w-[38px] h-[13.5px] font-['Poppins'] font-light text-[10px] leading-[13.5px] text-[#434656]">
              8:13 am
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-[30.4px] h-[28.8px] bg-[#525FE1] rounded-full">
          <span className="w-[5.62px] h-[13.5px] font-['Poppins'] font-bold text-[10px] text-center text-white">
            T
          </span>
        </div>
      </div>
    </div>
  );
};