import { useRoomContext } from '@livekit/components-react';
import warn from '../../../../assets/icons/warn.svg';
import { useControlContext } from '../../Context/ControlContext';
import { useNavigate } from 'react-router-dom';
import { useControlling } from '../../Hooks/useControlling';
const Leave = () => {
    const {setOptionLeave} = useControlContext();
    const room = useRoomContext();
    const navigate = useNavigate();
    const {stopStream} = useControlling();
  return (
    <>
        <div className="w-[360px] h-[184px] bg-[#2A2D34] rounded-[8px] flex flex-col justify-center p-[24px]">
            <div className='flex items-center'>
                <img src={warn} alt="" />
                <h1 className='text-[#D24747] text-[20px] font-[600] ms-[8px]'>Leave Session</h1>
            </div>
            <div className='mt-[8px]'>
                <p className='text-[#F9FBFC] font-[400] text-[14px]'>Others will continue after you leave. You can join the session again.</p>
            </div>
            <div className='flex justify-center items-center gap-[16px] mt-[16px]'>
                <button 
                onClick={()=> setOptionLeave(false)}
                className='border-[#393D44] border-[1px] w-[148px] h-[48px] text-[#F9FBFC] rounded-[8px] cursor-pointer  hover:bg-[#454950] transition duration-300'>Cancel</button>
                <button 
                onClick={async ()=> {
                    try {
                        await room.disconnect()
                        localStorage.removeItem("sessionToken");
                        setOptionLeave(false);
                        stopStream();
                        navigate("/GoodBy" , { replace: true })
                    }catch(err:any){
                        console.log(err);
                    }
                }}
                className='bg-[#D24747] w-[148px] h-[48px] text-[#F9FBFC] rounded-[8px] cursor-pointer'>Leave Session</button>
            </div>
        </div>
    </>
    
  )
}

export default Leave