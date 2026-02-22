import close from '../../../../assets/icons/closeHand.svg';
import hand from '../../../../assets/icons/hand.svg';
const NotifyRaiseHand = () => {
  return (
    <>
        <div className='bg-[#2A2D34] w-[377px] h-[136px] rounded-[8px] border-s-[10px] border-s-[#454950] flex flex-col items-center'>
              <div className='flex justify-end'>
                 <img src={close} className='' alt="" />
              </div>
            <div className='flex justify-center items-center ms-[24px] mt-[16px] '>
                <img src={hand} className='me-[16px]' alt="" />
                <h1 className='text-[#F9FBFC] text-[16px] fornt-[600] me-[24px]'>Abdo, Mohamed and 3 others raised hand</h1>
              
            </div>
            <button>View</button>
        </div>
    </>
  )
}

export default NotifyRaiseHand;