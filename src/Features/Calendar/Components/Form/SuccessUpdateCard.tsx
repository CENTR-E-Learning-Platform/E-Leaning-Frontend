interface SuccessUpdateCardProps {
  onClose: () => void;
}

const SuccessUpdateCard = ({ onClose }: SuccessUpdateCardProps) => {
  return (
    <div className="w-[498px] min-h-[400px] pb-[30px] bg-[#F9FBFC] rounded-[8px] flex flex-col items-center justify-center gap-[24px] px-[40px]">
      <div className="w-[72px] h-[72px] rounded-full bg-[#DCFCE7] flex items-center justify-center">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <div className="text-center">
        <h2 className="text-[22px] font-bold text-[#2A2D34] mb-[10px]">Session Updated!</h2>
        <p className="text-[14px] text-[#6D7588] leading-[22px]">
          Your session has been updated successfully.<br />
          The new details are now active.
        </p>
      </div>

      <button
        onClick={onClose}
        className="w-[220px] h-[44px] rounded-[8px] bg-[#525FE1] text-white text-[16px] font-semibold hover:bg-[#4351d1] transition-colors cursor-pointer"
      >
        Done
      </button>
    </div>
  );
};

export default SuccessUpdateCard;
