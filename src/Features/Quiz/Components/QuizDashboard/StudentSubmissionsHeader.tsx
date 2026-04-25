import React from 'react';
import search from '../../../../assets/icons/SearchIcon.svg';
export const StudentSubmissionsHeader: React.FC = () => {
  return (
    <div className="box-border flex flex-row justify-between items-center px-[30px] w-[760px] h-[93px] border-b border-[#ECEEF3]">
      <h3 className="m-0 font-['Poppins',sans-serif] font-bold text-[18px] leading-[25px] text-[#2A2D34]">
        Student Submissions
      </h3>
      <div className="relative flex flex-col items-start w-[243px] h-[34px]">
        <input
          type="text"
          placeholder="Search students..."
          className="box-border w-full h-full bg-[#F1F4F9] rounded-lg py-[7px] pr-[15px] pl-[34px] font-['Poppins',sans-serif] font-normal text-[13px] leading-[20px] text-[#6B7280] outline-none placeholder-[#6B7280]"
        />
        <img src={search}    
        className="absolute left-[13px] top-1/2 -translate-y-1/2 w-[11px] h-[11px] text-[#434656]" alt="" 
        />
      </div>
    </div>
  );
};

export default StudentSubmissionsHeader;