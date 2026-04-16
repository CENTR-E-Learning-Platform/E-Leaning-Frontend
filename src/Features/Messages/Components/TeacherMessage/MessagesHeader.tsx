import React from 'react';
import { Search } from 'lucide-react';

const MessagesHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-[21.6px] pt-[21.6px] px-[22.8px] pb-[7.2px] w-[360px] h-[172px] font-['Poppins']">
      <div className="flex flex-col items-start p-0 w-[314.5px] h-[28.8px] self-stretch">
        <h2 className="flex items-center w-full h-full text-[21.6px] leading-[28.8px] font-bold text-[#2A2D34]">
          Messages
        </h2>
      </div>

      <div className="flex flex-row justify-center items-start p-0 gap-[14.4px] w-[314.5px] h-[30.6px] self-stretch">
        <button className="flex flex-col justify-center items-center px-0 pt-0 pb-[10.8px] w-[149.6px] h-[30.6px] border-b-2 border-[#525FE1] flex-grow">
          <span className="flex items-center text-center font-semibold text-[12.6px] leading-[18px] text-[#525FE1]">
            Teachers
          </span>
        </button>
        <button className="flex flex-col justify-center items-center px-0 pt-[0.9px] pb-[11.7px] w-[149.6px] h-[30.6px] flex-grow">
          <span className="flex items-center text-center font-medium text-[12.6px] leading-[18px] text-[#434656]">
            Groups
          </span>
        </button>
      </div>

      <div className="relative flex flex-col items-start p-0 w-[314.5px] h-[40.5px] self-stretch isolate">
        <div className="flex flex-row justify-center items-start py-[10.8px] pr-[14.4px] pb-[9.9px] pl-[43.2px] w-full h-[40.5px] bg-white shadow-[0px_0.9px_1.8px_rgba(0,0,0,0.05)] rounded-[10.8px] self-stretch z-0">
          <div className="flex flex-col items-start p-0 pb-[0.9px] w-[253.6px] h-[19.8px] flex-grow">
            <input
              type="text"
              placeholder="Search Teachers..."
              className="w-full h-[18.9px] bg-transparent outline-none flex items-center font-light text-[12.6px] leading-[18.9px] text-[#6B7280] placeholder:text-[#6B7280]"
            />
          </div>
        </div>
        <Search 
          className="absolute left-[17.1px] top-[29.55%] text-[#747688] z-10" 
          size={16.2} 
        />
      </div>
    </div>
  );
};

export default MessagesHeader;