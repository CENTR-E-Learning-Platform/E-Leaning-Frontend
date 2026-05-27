import { useRef, useEffect } from "react";
import menu from "../../../../assets/icons/smallmenu.svg";
import raishand from "../../../../assets/icons/raishand.svg";
import muteIco from "../../../../assets/icons/disableMic.svg";
import dismicro from '../../../../assets/icons/mic2.svg';
import { useControlContext } from "../../Context/ControlContext";
import ParticipantList from "./List/ParticipantList";
import { useRemoteParticipant, useIsSpeaking, useLocalParticipant } from "@livekit/components-react";
import { BASE_URL } from "../../Utils/Apis";
import DefaultImage from "./DefaultImage";
import { motion } from "framer-motion";

const StudentActions = ({ name, profileImage, width, disabledP, muteP, Partici, isRais }: any) => {
  const { checkIdentity, setCheckIdentity, setMute } = useControlContext();
  const isOpen = checkIdentity === Partici.identity;
  const remoteParticipant = useRemoteParticipant(Partici.identity);
  const isMuted = remoteParticipant ? !remoteParticipant.permissions?.canPublish : true;
  const isSpeaking = useIsSpeaking(Partici);
  const { localParticipant } = useLocalParticipant();
  useEffect(() => {
    setMute(isMuted);
  }, [isMuted, setMute]);

  const menuContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuContainerRef.current && !menuContainerRef.current.contains(event.target as Node)) {
        setCheckIdentity("");
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
          ? `flex justify-between h-[48px] w-full items-center`
          : `flex items-center justify-between w-full`
      }
    >
      {/* {width > 1133 && (
        <div className="flex items-center p-[4px]">
      {
        profileImage ? 
          <img src={profileImage} className="w-[88px] h-[88px] rounded-full mb-[16px] object-cover" alt=""/> :
          <div className="w-[88px] h-[88px] mb-[16px]">
             <DefaultImage character={name?.toString()?.substring(0,2).toLocaleUpperCase()} />
          </div>
      }
        </div>
      )} */}

      {width < 1133 && (
        <div className="flex items-center flex-1 min-w-0">
          {
            profileImage ?
              <img src={`${BASE_URL}/${profileImage}`} className="w-[40px] h-[40px] rounded-full me-[13px] object-cover shrink-0" alt="" /> :
              <div className="w-[40px] h-[40px] me-[13px] shrink-0">
                <DefaultImage character={name?.toString()?.substring(0, 2).toLocaleUpperCase()} />
              </div>
          }
          {width < 1250 && (
            <div className="relative group flex items-center cursor-pointer min-w-0 pr-2">
              <h1 className="text-[16px] text-[#F9FBFC] truncate">
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
        <div ref={menuContainerRef} className="flex items-center justify-end gap-[10px] relative shrink-0">

          {isRais?.includes(Partici.name) && (
            <div className="bg-[#454950] w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0">
              <img src={raishand} alt="" className="w-[16px] h-[16px] cursor-pointer" />
            </div>
          )}

          <div className="bg-[#454950] w-[26px] h-[26px] rounded-full flex items-center justify-center cursor-pointer shrink-0">
            {isMuted || !localParticipant.isMicrophoneEnabled ? (
              <img src={isMuted ? muteIco : dismicro} alt="Muted" className="w-[14px]" />
            ) : isSpeaking ? (

              <div className="flex items-center justify-center gap-[2px] h-[14px]">
                <motion.div
                  animate={{ height: ["4px", "12px", "4px"] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                  className="w-[3px] bg-[#80da88] rounded-full"
                />
                <motion.div
                  animate={{ height: ["4px", "16px", "4px"] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="w-[3px] bg-[#80da88] rounded-full"
                />
                <motion.div
                  animate={{ height: ["4px", "10px", "4px"] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="w-[3px] bg-[#80da88] rounded-full"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center gap-[2px] h-[14px]">
                <div className="w-[3px] h-[4px] bg-[#80da88] rounded-full" />
                <div className="w-[3px] h-[4px] bg-[#80da88] rounded-full" />
                <div className="w-[3px] h-[4px] bg-[#80da88] rounded-full" />
              </div>
            )}
          </div>


          {localParticipant.attributes["UserRole"] === "Teacher" && (
            <div className="px-2 py-1 cursor-pointer shrink-0" onClick={toggleMenu}>
              <img src={menu} alt="" className="w-[4px] h-[17px] cursor-pointer" />
            </div>

          )}
          {isOpen && (
            <div className="absolute top-[120%] right-0 z-50">
              <ParticipantList onDisabled={disabledP} onMute={muteP} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentActions;