import close from '../../../../assets/icons/closeHand.svg';
import hand from '../../../../assets/icons/hand.svg';

const NotifyRaiseHand = ({st ,names , st2}:any) => {

  if (!names || names.length === 0) return null;

  return (
    <>
      <div className='relative bg-[#2A2D34] w-[377px] h-[136px] rounded-[8px] border-s-[10px] border-s-[#454950] flex flex-col justify-center p-[20px]'>
        <button 
          className='absolute top-[12px] right-[12px] cursor-pointer hover:opacity-80 transition-opacity' 
          onClick={() =>{
            st(false);
          }}
        >
          <img src={close} className='w-[20px] h-[20px]' alt="Close" />
        </button>

        <div className='flex items-center mb-[12px] mt-[8px]'>
          <img src={hand} className='me-[16px] w-[24px] h-[24px]' alt="Hand" />
          <h1 className='text-[#F9FBFC] text-[16px] font-[400] leading-snug'>
            {names.length === 1 
              ? `${names[0]} raised hand` 
              : `${names[names.length - 1]} and ${names.length - 1} others raised hand`
            }
          </h1>
        </div>

        <div className='ms-[40px]'>
          <button className='text-[#8AB4F8] hover:text-white font-[500] transition-colors'>
            View
          </button>
        </div>
      </div>
    </>
  )
}

export default NotifyRaiseHand;