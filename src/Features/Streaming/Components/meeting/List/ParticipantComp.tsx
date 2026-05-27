const ParticipantComp = ({ rad, icon, parg, color, func }: any) => {
  return (
    <>
      <div
        onClick={func}
        className={`w-[198px] h-[48px] ${rad} bg-[#393D44] flex  justify-between items-center px-[10px] cursor-pointer border-[1px] border-[#454950] hover:bg-[#454950] transition duration-300`}>
        <div className='flex justify-center items-center'>
          <img src={icon} className='w-[16px] h-[16px]' alt="" />
          <h1 className={`text-[${color}] ms-[8px] text-[14px] font-[500]`}>{parg}</h1>
        </div>
      </div>
    </>
  )
}

export default ParticipantComp