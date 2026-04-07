import React from 'react';

interface WalletCardProps {
  icon: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonIcon: string;
  list: string;
  onButtonClick?: () => void;
  onOptionsClick?: () => void;
}

const WalletCard: React.FC<WalletCardProps> = ({
  icon,
  title,
  subtitle,
  buttonText,
  buttonIcon,
  list,
  onButtonClick,
  onOptionsClick,
}) => {
  return (
    <div className="box-border flex flex-row justify-between items-center p-4 w-full max-w-[692px] h-[82px] bg-white border border-[#E8EAED] rounded-lg font-['Poppins']">
      <div className="flex flex-row items-center gap-4">
        <div className="flex items-center justify-center w-[19px] h-[30px]">
          <img src={icon} alt="" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-medium text-[15px] text-[#2A2D34] leading-[23px]">
            {title}
          </span>
          <span className="font-medium text-[15px] text-[#6D7588] leading-[23px]">
            {subtitle}
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-4">
        <button
          onClick={onButtonClick}
          className="box-border flex flex-row justify-center items-center px-4 py-[16px] gap-2 h-[45px] border-2 border-[#525FE1] rounded-lg bg-transparent cursor-pointer  "
        >
          <div className="flex items-center justify-center w-[20px] h-[18px]">
             <img src={buttonIcon} alt="" />
          </div>
          <span className="font-medium text-[15px] text-[#525FE1] leading-[13px]">
            {buttonText}
          </span>
        </button>
        <button
          onClick={onOptionsClick}
          className="flex justify-center items-center bg-transparent border-none cursor-pointer p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
         <img src={list} alt="" />
        </button>
      </div>
    </div>
  );
};
export default WalletCard;