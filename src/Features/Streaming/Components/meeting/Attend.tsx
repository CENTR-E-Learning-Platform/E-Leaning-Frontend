import sene from '../../../../assets/images/sene.jpg';
import zeng from '../../../../assets/images/zwng.jpg';
import moz from '../../../../assets/images/moz.jpg';
import attend from '../../../../assets/icons/attend.svg';
import menu from '../../../../assets/icons/menu.svg';
const Attend = ({click}:any) => {
    return(
        <>
             {!click && (
                 <div className="w-[151px] h-[48px] bg-[#393D44] rounded-[43px] flex items-center p-[4px] cursor-pointer">
            <div className="flex justify-center">
              <img src={sene} className="w-[40px] h-[39px] rounded-full -ml-2 first:ml-0 border-[1px] border-[#F9FBFC]" alt="" />
              <img src={moz} className="w-[40px] h-[39px] rounded-full -ml-2 first:ml-2 border-[1px] border-[#F9FBFC]" alt="" />
              <img src={zeng} className="w-[40px] h-[39px] rounded-full -ml-2 first:ml-2 border-[1px] border-[#F9FBFC]" alt="" />
            </div>
            <h1 className="text-[16px] text-[#F9FBFC] ms-[8px]">+11</h1>
          </div>
      )}
      {click && (
        <div className="w-[332px] h-[48px] bg-[#393D44] rounded-[43px] flex items-center p-[4px] cursor-pointer justify-between ">
         <div className='flex items-center'>
             <img
            src={attend}
            className="w-[19px] h-[16px]  me-[13px] ms-[10px] "
            alt=""
          />
          <h1 className="text-[16px] text-[#F9FBFC] me-[13px]">
            Participants (11)
          </h1>
         </div>
          <img
            src={menu}
            className="w-[4px] h-[17px]  me-[13px] ms-[10px] "
            alt=""
          />
        </div>
      )}
        </>
    )
}
export default Attend;