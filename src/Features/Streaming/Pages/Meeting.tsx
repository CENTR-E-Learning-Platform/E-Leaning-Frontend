import React, { useState, useEffect, use } from "react";
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
import { motion } from "framer-motion";
import { useControlContext } from "../Context/ControlContext";
import Leave from "../Components/meeting/Leave";
import { useFooter } from "../Hooks/useFooter";
import { useRole } from "../Hooks/useRole";
import { useRoomContext } from "@livekit/components-react";
import { RoomEvent, RemoteParticipant, LocalParticipant } from "livekit-client";

const Meeting: React.FC = () => {
  const [width, setWidth] = useState<number>(1400);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [isClickcha, setIsClickcha] = useState<boolean>(false);
  const [isClickattend, setIsClickattend] = useState<boolean>(false);
  const [isfull, setIsFull] = useState<boolean>(false);
  
  const { emoji, optionLeave } = useControlContext();
  const { otherCameraTracks } = useParticipant();
  const { getEmojiIcon, removeEmoji, AddEmoji } = useFooter();
  const {MuteParticipant} = useRole();
  const room = useRoomContext();

  const startResizing = () => setIsResizing(true);
  const stopResizing = () => setIsResizing(false);


  useEffect(() => {
    const handleDataReceived = (
        payload: Uint8Array, 
        participant?: RemoteParticipant | LocalParticipant, 
        _kind?: any, 
        topic?: string
    ) => {
      
      try {
        const strData = new TextDecoder().decode(payload);
        const data = JSON.parse(strData);

        if (data.type === 'EMOJI' && data.content) {
          
          AddEmoji(data.content);
        }

        if(data.type === 'raisHand' && topic === "notifications"){
          const user = participant?.name;
          alert(user);
        }
      } catch (err) {
        console.error("Error parsing emoji data:", err);
      }
    };

    room.on(RoomEvent.DataReceived, handleDataReceived);

    return () => {
      room.off(RoomEvent.DataReceived, handleDataReceived);
    };
  }, [room, AddEmoji]);

  const handlRenderChatAndAttend = () => {
    setIsClickattend(false);
    setIsClickcha(!isClickcha);
  };

  const handlRenderAttendAndChat = () => {
    setIsClickcha(false);
    setIsClickattend(!isClickattend);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) {
      const newWidth = e.clientX - 135;
      if (newWidth >= 1100 && newWidth <= 1400 && isClickattend) {
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
            <img src={teacher} className="w-[40px] h-[40px] rounded-full me-[13px]" alt="Host" />
            <h1 className="text-[16px] text-[#F9FBFC] me-[13px]">Hosted by Mr.Mohammed</h1>
          </div>
          <div className="flex me-[30px] gap-4">
            <div className="w-[187px] h-[48px] bg-[#393D44] rounded-[43px] flex items-center cursor-pointer">
              <img src={vector} className="w-[16px] h-[16px] ms-[20px]" alt="Copy Link" />
              <h1 className="text-[16px] text-[#F9FBFC] me-[13px] ms-[11px]">Copy class link</h1>
            </div>
            <div
              onClick={() => {
                handlRenderAttendAndChat();
                setWidth(!isClickattend ? 1100 : 1400);
              }}
            >
              <Attend click={isClickattend} />
            </div>
            <div
              onClick={() => {
                handlRenderChatAndAttend();
                setWidth(!isClickcha ? 896 : 1400);
              }}
            >
              <Bar click={isClickcha} />
            </div>
          </div>
        </div>
      )}

      <div
        className={`flex ${isfull ? "p-0 h-screen" : "ps-[30px] pe-[30px] pt-[16px] pb-[16px] h-[80vh]"} transition-all duration-300 relative`}
        onMouseMove={handleMouseMove}
        onMouseUp={stopResizing}
        onMouseLeave={stopResizing}
      >
        <div
          className="relative transition-all duration-300 bg-[#393D44] rounded-2xl overflow-hidden"
          style={{
            width: isfull ? "100%" : `${width}px`,
          }}
        >
          <ParticipantsGrid />

          <div
            onClick={toggleFullScreen}
            className="absolute bottom-5 select-none right-5 bg-[#2A2D34B2] text-white flex items-center justify-center rounded-[8px] w-[40px] h-[40px] cursor-pointer z-50 hover:bg-[#2A2D34]"
          >
            <img className="w-[16px] h-[16px]" src={fullscreen} alt="Fullscreen" />
          </div>

          <div
            className="absolute top-0 right-0 w-[10px] m-1 h-full cursor-ew-resize hover:bg-white/10"
            onMouseDown={startResizing}
          ></div>
        </div>

        <div
          className={`
            rounded-[20px] bg-[#393D44] flex flex-col overflow-hidden transition-all duration-500 ease-in-out
            ${isClickattend && !isfull ? "select-none p-[20px] ms-[20px] opacity-100" : "w-0 p-0 ms-0 opacity-0"}
          `}
        >
          {otherCameraTracks.map((track) => (
            <div 
            key={track.participant.identity}>
              <StudentActions 
              func = {()=>MuteParticipant(track.participant.identity)}
              name={track.participant.name} profileImage={track.participant.attributes["UserImage"]} width={width} />
            </div>
          ))}
        </div>

        <div className="absolute bottom-[250px] left-[520px] z-50">
            {optionLeave ? <Leave/> : ""}
        </div>

        <div
          className={`
            transition-all duration-500 ease-in-out overflow-hidden
            ${isClickcha && !isfull ? " ms-4 opacity-100" : "w-0 ms-0 opacity-0"}
          `}
        >
          {isClickcha && <ChatForm />}
        </div>

        
        {emoji.map((item: any) => (
          <motion.div

            key={item.id}

            initial={{ x: 600, y: 500, opacity: 1, scale: 0.5 }}

            animate={{ x: 600 + Math.random() * 100 - 50, y: -100, opacity: 0, scale: 1.5 }}

            transition={{ duration: 2, ease: "easeOut" }}

            onAnimationComplete={() => removeEmoji(item.id)}

            className="absolute z-50 pointer-events-none"

          >
            <img src={getEmojiIcon(item.type)} className="w-16 h-16 drop-shadow-lg" alt="emoji" />
          </motion.div>
        ))}
      </div>
      {!isfull && <FooterBar />}
    </div>
  );
};

export default Meeting;