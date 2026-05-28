interface ParticipantCompProps {
  rad?: string;
  icon: string;
  parg: string;
  color?: string;
  func?: () => void;
  disabled?: boolean;
}

const ParticipantComp = ({ rad, icon, parg, color = "#F9FBFC", func, disabled = false }: ParticipantCompProps) => {
  return (
    <>
      <div
        onClick={!disabled ? func : undefined}
        className={`
          w-[198px] h-[48px] ${rad} bg-[#393D44]
          flex justify-between items-center px-[10px]
          border-[1px] border-[#454950]
          transition duration-300
          ${disabled
            ? "opacity-40 cursor-not-allowed pointer-events-none"
            : "cursor-pointer hover:bg-[#454950]"}
        `}
      >
        <div className='flex justify-center items-center'>
          <img src={icon} className='w-[16px] h-[16px]' alt="" />
          <h1 style={{ color }} className={`ms-[8px] text-[14px] font-[500]`}>{parg}</h1>
        </div>
      </div>
    </>
  );
};

export default ParticipantComp;