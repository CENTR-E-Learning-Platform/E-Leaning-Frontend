import { useState } from "react";
import teacher from "../../../assets/images/mester.jpg";
import vector from "../../../assets/icons/Vector.svg";
import StudentActions from "../Components/meeting/StudentActions";
import Bar from "../Components/chat/Bar";
import Attend from "../Components/meeting/Attend";
import FooterBar from "../Components/meeting/FooterBar";
import ParticipantsGrid from "../Components/meeting/ParticipantsGrid";
import ChatForm from "../Components/chat/ChatForm";
const Meeting = () => {
  const [width, setWidth] = useState(1400);
  const [isResizing, setIsResizing] = useState(false);
  const [isClickcha , setIsClickcha] = useState(false);
  const [isClickattend , setIsClickattend] = useState(false);

  const startResizing = () => setIsResizing(true);
  const stopResizing = () => setIsResizing(false);

  const handleMouseMove = (e:any) => {
    if (isResizing) {
      const newWidth = e.clientX - 10;
      if (newWidth >= 897 && newWidth <= 1400) {
        setWidth(newWidth);
      }
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-[#2A2D34] flex flex-col">
      
      <div className="ms-[24px] mt-[24px] flex justify-between">
        <div className="w-[281px] h-[48px] bg-[#393D44] rounded-[43px] flex items-center p-[4px]">
          <img src={teacher} className="w-[40px] h-[40px] rounded-full me-[13px]" alt="" />
          <h1 className="text-[16px] text-[#F9FBFC] me-[13px]">Hosted by Mr.Mohammed</h1>
        </div>
        <div className="flex me-[30px] gap-4">
          <div className="w-[187px] h-[48px] bg-[#393D44] rounded-[43px] flex items-center cursor-pointer">
            <img src={vector} className="w-[16px] h-[16px] ms-[20px]" alt="" />
            <h1 className="text-[16px] text-[#F9FBFC] me-[13px] ms-[11px]">Copy class link</h1>
          </div>
            <div
            onClick={()=>{
                setIsClickattend(!isClickattend);
                setWidth((!isClickattend ?  897: 1400));
            }}
            >
                <Attend click = {isClickattend} />
            </div>
          <div onClick={()=>setIsClickcha(!isClickcha)} >
            <Bar click = {isClickcha} />
          </div>
        </div>
      </div>

      
      <div
        className="flex ps-[30px] pe-[30px] pt-[16px] pb-[16px] h-[80vh] gap-4"
        onMouseMove={handleMouseMove}
        onMouseUp={stopResizing}
        onMouseLeave={stopResizing}
      >
        
        <div
          className="relative"
          style={{ width: `${width}px` }}
        >
       <ParticipantsGrid/>
          {/* <img src={teacher} className="w-full h-full object-cover rounded-[20px]" alt="" /> */}
          <div
            className="absolute top-0 right-0 w-[10px] h-full cursor-ew-resize"
            onMouseDown={startResizing}
          ></div>
        </div>

       {isClickattend &&(
        <div className=" rounded-[20px]   p-[20px] bg-[#393D44] flex flex-col  overflow-y-hidden overflow-x-hidden">
          <StudentActions width = {width}/>
          <StudentActions width = {width}/>
          <StudentActions width = {width}/>
          <StudentActions width = {width}/>
         
        </div>)  
       }
      {isClickcha && (
        <ChatForm />
       )}
      </div>
       <FooterBar/>
    </div>
  );
};

export default Meeting;
