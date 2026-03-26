;

const ListComp = ({width , icon , parg ,height , arrow , visable}:any) => {
  return (
    <>
        <div className={`${width} ${height} bg-[#454950] flex justify-between items-center px-[10px] mb-[0.5px] cursor-pointer hover:bg-[#4f5257] transition duration-300`}>
            <div className='flex justify-center items-center'>
                <img src={icon} className='w-[16px] h-[18px]' alt="" />
            <h1 className='text-[#F9FBFC] ms-[8px] text-[14px] font-medium'>{parg}</h1>
            </div>
            <img src={arrow} className={`w-[14px] h-[14px] ${visable}`} alt="" />
        </div>
    </>
  )
}

export default ListComp;