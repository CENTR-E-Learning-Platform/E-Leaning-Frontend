import { useState } from "react";
import teacher from "../../../assets/images/mester.jpg";
import vector from "../../../assets/icons/Vector.svg";
import fullscreen from "../../../assets/icons/fullscreen.svg";
import StudentActions from "../Components/meeting/StudentActions";
import Bar from "../Components/chat/Bar";
import Attend from "../Components/meeting/Attend";
import FooterBar from "../Components/meeting/FooterBar";
import ParticipantsGrid from "../Components/meeting/ParticipantsGrid";
import ChatForm from "../Components/chat/ChatForm";
import { useParticipant } from "../Hooks/useParticipant";
const Meeting = () => {
  const [width, setWidth] = useState(1400);
  const [isResizing, setIsResizing] = useState(false);
  const [isClickcha, setIsClickcha] = useState(false);
  const [isClickattend, setIsClickattend] = useState(false);

  const [isfull, setIsFull] = useState(false);

  const {otherCameraTracks} = useParticipant();
  const startResizing = () => setIsResizing(true);
  const stopResizing = () => setIsResizing(false);

  const handlRenderChatAndAttend = () => {
    setIsClickattend(false);
    setIsClickcha(!isClickcha);
  };

  const handlRenderAttendAndChat = () => {
    setIsClickcha(false);
    setIsClickattend(!isClickattend);
  };

  const handleMouseMove = (e:any) => {
    if (isResizing) {
      const newWidth = e.clientX - 10;
      if (newWidth >= 897 && newWidth <= 1400 && isClickattend) {
        setWidth(newWidth);
      }
    }
  };

  const toggleFullScreen = () => {
    if (!isfull) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(err);
      });
      setIsFull(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFull(false);
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-[#2A2D34] flex flex-col">
      {!isfull && (
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
              onClick={() => {
                handlRenderAttendAndChat();
                setWidth(!isClickattend ? 897 : 1400);
              }}
            >
              <Attend click={isClickattend} />
            </div>
            <div
              onClick={() => {
                handlRenderChatAndAttend();
                setWidth(!isClickcha ? 897 : 1400);
              }}
            >
              <Bar click={isClickcha} />
            </div>
          </div>
        </div>
      )}

      <div
        className={`flex ${isfull ? "p-0 h-screen" : "ps-[30px] pe-[30px] pt-[16px] pb-[16px] h-[80vh]"} transition-all duration-300`}
        onMouseMove={handleMouseMove}
        onMouseUp={stopResizing}
        onMouseLeave={stopResizing}
      >
        <div
          className="relative transition-all duration-300 bg-[#393D44] rounded-2xl"
          style={{
            width: isfull ? "100%" : `${width}px`,
          }}
        >
          <ParticipantsGrid />

          <div
            onClick={toggleFullScreen}
            className="absolute bottom-5 select-none right-5 bg-[#2A2D34B2] text-white flex items-center justify-center rounded-[8px] w-[40px] h-[40px] cursor-pointer z-50"
          >
            <img className="W-[16px] h-[16px]" src={fullscreen} alt="" />
          </div>

          <div
            className="absolute top-0 right-0 w-[10px] m-1 h-full cursor-ew-resize"
            onMouseDown={startResizing}
          ></div>
        </div>

        <div 
          className={`
            rounded-[20px] mt-[7px] bg-[#393D44] flex flex-col overflow-hidden transition-all duration-500 ease-in-out
            ${isClickattend && !isfull  ? "select-none p-[20px] ms-[20px] opacity-100 " : "w-0 p-0 ms-0 opacity-0"}
          `}
        >
          {otherCameraTracks.map((track)=>(
            <div  key={track.participant.identity} >
                <StudentActions name = {track.participant.identity.slice(0 , 11)} profileImage = {teacher} width={width} />
            </div>
          ))}
            
        </div>

        <div 
          className={`
             transition-all duration-500 ease-in-out overflow-hidden
             ${isClickcha && !isfull ? " ms-4 opacity-100" : "w-0 ms-0 opacity-0"}
          `}
        >
             {isClickcha && <ChatForm />}
        </div>
        
      </div>
      {!isfull && <FooterBar />}
    </div>
  );
};

export default Meeting;