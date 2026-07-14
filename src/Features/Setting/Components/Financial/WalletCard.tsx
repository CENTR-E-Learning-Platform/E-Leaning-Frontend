import React, { useState, useEffect, useRef } from 'react';
import { useFinancial } from '../../Hooks/useFinancial';
import { useSettingContext } from '../../Context/useSettingContext';

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
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { DeleteWallet, Disburse, isDeleting, isWithdrawing } = useFinancial();
  const { setIsCreated, setShowAddFlow } = useSettingContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          onClick={() => Disburse()}
          disabled={isWithdrawing}
          className="box-border flex flex-row justify-center items-center px-4 py-[16px] gap-2 h-[45px] border-2 border-[#525FE1] rounded-lg bg-transparent cursor-pointer disabled:opacity-70"
        >
          {isWithdrawing ? (
            <svg className="animate-spin w-[18px] h-[18px] text-[#525FE1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          ) : (
            <div className="flex items-center justify-center w-[20px] h-[18px]">
              <img src={buttonIcon} alt="" />
            </div>
          )}
          <span className="font-medium text-[15px] text-[#525FE1] leading-[13px]">
            {isWithdrawing ? 'Processing...' : buttonText}
          </span>
        </button>

        <div className="relative flex items-center" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-center items-center bg-transparent border-none cursor-pointer p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <img src={list} alt="" />
          </button>

          {isOpen && (
            <div className="absolute right-[-45px] top-full mt-1 w-[80px] bg-white border border-[#E8EAED] rounded shadow-sm z-10 flex flex-col overflow-hidden">
              <button
                disabled={isDeleting}
                onClick={async () => {
                  try {
                    await DeleteWallet();
                    setIsCreated((prev) => !prev);
                    setShowAddFlow(false);
                  } catch (error) {
                    console.error("Error deleting wallet:", error);
                  }
                }}
                className="px-4 py-2 text-center text-[14px] text-[#D24747] hover:bg-[#F9FBFC] transition-colors w-full bg-transparent border-none cursor-pointer font-['Poppins'] flex items-center justify-center gap-1 disabled:opacity-70"
              >
                {isDeleting ? (
                  <svg className="animate-spin w-[14px] h-[14px] text-[#D24747]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                ) : (
                  'Delete'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletCard;