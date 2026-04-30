import React from 'react';

interface HomeworkCardProps {
  title?: string;
  subTitle?: string;
  status?: string;
}

const RecentHomeworks: React.FC<HomeworkCardProps> = ({
  title = "The mole - Assignment 3",
  subTitle = "Prep 2",
  status = "3 submissions pending"
}) => {
  return (
    <div className="flex flex-col items-start p-[30px_24px] gap-[28px] w-[453px] min-w-[400px] h-[246px] bg-[#FFFFFF] border border-[#E8EAED] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] rounded-[8px] box-border font-['Poppins']">
      
      <div className="flex flex-row justify-between items-center p-0 gap-[97px] w-full h-[17px]">
        <h2 className="text-[#2A2D34] font-bold text-[20px] leading-[17px]">
          Pending Homework
        </h2>
        <button className="text-[#525FE1] font-medium text-[16px] leading-[13px] hover:underline">
          See all
        </button>
      </div>

      <div className="flex flex-col items-start p-0 gap-[20px] w-full">
        
        <div className="flex flex-row items-start p-0 gap-[16px] w-full h-[62px]">
          <div className="relative w-[60px] h-[60px] bg-[#DAF3FF] rounded-[12px] flex items-center justify-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3022/3022343.png" 
              alt="beaker" 
              className="w-[27px] h-[42px] object-contain"
            />
          </div>

          <div className="flex flex-col items-start p-0 gap-[12px]">
            <h3 className="text-[#2A2D34] font-semibold text-[18px] leading-[13px]">
              {title}
            </h3>
            <p className="text-[#6D7588] font-medium text-[16px] leading-[13px]">
              {subTitle}
            </p>
            <p className="text-[#6D7588] font-medium text-[14px] leading-[12px]">
              {status}
            </p>
          </div>
        </div>

        <div className="w-full h-0 border border-[#E8EAED]" />
      </div>

      <div className="flex flex-row items-end p-0 w-full">
        <button className="flex flex-row justify-center items-center px-[16px] py-[14px] gap-[4px] w-[122px] h-[39px] bg-[#525FE1] hover:bg-[#434dbd] transition-colors rounded-[8px] text-[#F9FBFC] font-semibold text-[16px] leading-[13px]">
          Grade Now
        </button>
      </div>

    </div>
  );
};

export default RecentHomeworks;