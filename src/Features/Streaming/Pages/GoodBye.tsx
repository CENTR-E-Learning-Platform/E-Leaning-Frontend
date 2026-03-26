import Hand from '../../../assets/icons/GoodBy.svg';
const GoodBye = () => {
  return (
    <>
        <div className='w-full h-[100vh] bg-[#2A2D34] flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <img src={Hand} className='w-[80px]' alt="" />
            <div className='flex flex-col justify-center items-center mt-[24px]'>
                <h1 className='text-[#F9FBFC] font-[600] text-[34px]'>Stream ended</h1>
                <p className='text-[#D1D5DB] text-[16px] mt-[16px]'>Have a nice day!</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default GoodBye;