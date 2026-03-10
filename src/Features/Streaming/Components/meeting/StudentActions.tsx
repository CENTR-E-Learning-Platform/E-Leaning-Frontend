import { useRef, useEffect } from "react"; 
import sound from "../../../../assets/icons/Group.svg";
import menu from "../../../../assets/icons/smallmenu.svg";
import raishand from "../../../../assets/icons/raishand.svg";
import muteIco from "../../../../assets/icons/disableMic.svg";
import { useControlContext } from "../../Context/ControlContext";
import ParticipantList from "./List/ParticipantList";
import { useRemoteParticipant } from "@livekit/components-react";
import { BASE_URL } from "../../Utils/Apis";

const StudentActions = ({ name, profileImage, width, func, Partici  , isRais}: any) => {
  const { checkIdentity, setCheckIdentity , setMute } = useControlContext();
  const isOpen = checkIdentity === Partici.identity;
  const remoteParticipant = useRemoteParticipant(Partici.identity);
  const isMuted = remoteParticipant ? !remoteParticipant.permissions?.canPublish : true;
  setMute(isMuted);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuContainerRef.current && !menuContainerRef.current.contains(event.target as Node)) {
        setCheckIdentity(""); 
        console.log("check" , isMuted);
        
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setCheckIdentity]); 

  const toggleMenu = () => {
    setCheckIdentity(!isOpen ? Partici.identity : "");
  };

  return (
    <div
      className={
        width < 1133
          ? `flex gap-[20px] h-[48px] w-full items-center`
          : `flex items-center`
      }
    >
      {width > 1133 && (
        <div className="flex items-center p-[4px]">
          <img src={profileImage} className="w-[88px] h-[88px] rounded-full mb-[16px] " alt=""/>
        </div>
      )}

      {width < 1133 && (
        <div className="flex items-center">
          <img src={`${BASE_URL}/${profileImage}`} className="w-[40px] h-[40px] rounded-full me-[13px] bg-cover" alt=""/>
          {width < 1250 && (
            <div className="relative group flex items-center cursor-pointer">
              <h1 className="text-[16px] text-[#F9FBFC] max-w-[130px] truncate">
                {name}
              </h1>
              <div className="absolute top-full left-0 mt-2 hidden group-hover:block group-active:block bg-[#2D3036] text-[#F9FBFC] text-[14px] px-3 py-1.5 rounded-md shadow-lg z-50 whitespace-nowrap border border-[#454950]">
                {name}
              </div>
            </div>
          )}
        </div>
      )}

      {width < 1115 && (
        <div ref={menuContainerRef} className="flex items-center gap-[10px] relative">
          
         {isRais.includes(Partici.name) && (
           <div className="bg-[#454950] w-[26px] h-[26px] rounded-full flex items-center justify-center">
            <img src={raishand} alt="" className="w-[16px] h-[16px] cursor-pointer" />
          </div>
         )}
          
          <div className="bg-[#454950] w-[26px] h-[26px] rounded-full flex items-center justify-center">
            <img src={!isMuted ? sound : muteIco} alt="" className="w-[14px] cursor-pointer" />
          </div>
          
          <div className="px-2 py-1 cursor-pointer" onClick={toggleMenu}>
             <img src={menu} alt="" className="w-[4px] h-[17px] cursor-pointer" />
          </div>

          {isOpen && (
            <div className="absolute top-[120%] right-0 z-50">
              <ParticipantList onMute={func} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentActions;