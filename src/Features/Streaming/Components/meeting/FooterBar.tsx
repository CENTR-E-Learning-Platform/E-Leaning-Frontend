import Button from "./Button";
import microphon from "../../../../assets/icons/mic.svg";
import microphondis from "../../../../assets/icons/mic2.svg";
import video from "../../../../assets/icons/video.svg";
import videodis from "../../../../assets/icons/camera-disabled.svg";
import emoj from "../../../../assets/icons/emoj.svg";
import hand from "../../../../assets/icons/hand.svg";
import share from "../../../../assets/icons/share.svg";
import menu from "../../../../assets/icons/menu.svg";
import leave from "../../../../assets/icons/leave.svg";
import upArrow from "../../../../assets/icons/upArrow.svg";
import downArrow from "../../../../assets/icons/downArrow.svg";
import { useLocalParticipant } from "@livekit/components-react";
import { useControlContext } from '../../Context/ControlContext';
import CustomButton from "./CustomButton";
import MicList from "./List/MicList";
import ControlList from "./List/ControlList";
import Reaction from "./Reaction";
import { useFooter } from "../../Hooks/useFooter";
import { useState } from "react";

const FooterBar = ({setRais , handsound}:any) => {
  const { localParticipant } = useLocalParticipant();
  const {setMic, setCameraView, optionMic, setOptionMic, optionCamera, setOptionCamera, optionMenu, setOptionMenu, setOptionLeave, optionEmoji, setOptionEmoji } = useControlContext();
  const { raisHand } = useFooter();
  const [myHand , setMyHand] = useState(false);
  const [shared , setShared] = useState(false);

  const canPublish = localParticipant.permissions?.canPublish;
  const isMicOn = localParticipant.isMicrophoneEnabled;
  const isCamOn = localParticipant.isCameraEnabled;

  return (
    <>
      <div className="flex justify-center mb-[10px] mt-auto gap-4">
        <div className="flex gap-2">

          {/* Mic */}
          <div className="absolute bottom-[80px] left-[428px] z-10 ">
            {optionMic ? <MicList /> : ""}
          </div>
          <CustomButton
            func={() => {
              if (!canPublish) return; 
              const newState = !isMicOn;
              localParticipant.setMicrophoneEnabled(newState);
              setMic(newState); 
            }}
            arrowFunc={() => setOptionMic((prev) => !prev)}
            arrow={optionMic ? upArrow : downArrow}
            icons={canPublish && isMicOn ? microphon : microphondis}
            size={isMicOn ? "w-[14px] h-[20px]" : "w-[18px] h-[20px]"}
            customStyle={!canPublish ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} 
          />

          {/* Camera */}
          <CustomButton
            func={() => {
              if (!canPublish) return; 
              
              const newState = !isCamOn;
              localParticipant.setCameraEnabled(newState);
              setCameraView(newState);
            }}
            arrowFunc={() => setOptionCamera((prev) => !prev)}
            arrow={optionCamera ? upArrow : downArrow}
            icons={canPublish && isCamOn ? video : videodis}
            size={isCamOn ? "w-[18px] h-[12px]" : "w-[18px] h-[20px]"}
            customStyle={!canPublish ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          />

            {/* Emoji */}
          <div className="absolute bottom-[70px] left-[510px] z-10 ">
            {optionEmoji ? <Reaction /> : ""}
          </div>
          <Button
            func={() => setOptionEmoji((prev) => !prev)}
            icons={emoj}
            size="w-[19px] h-[19px]"
            customStyle={optionEmoji ? "bg-[#454950]" : ""}
          />

            {/* Rais Hand */}
          <Button
            func={() => {
              const newstate = !myHand;
              setMyHand(newstate);
              raisHand(newstate);
              
              if (newstate && handsound?.current) {
                handsound.current.currentTime = 0;
                handsound.current.play().catch((err: any) => console.log(err));
              }

            if (setRais && localParticipant.name) {
                setRais((prev: any) => {
                  if (!newstate) {
                    return prev.filter((name: any) => name !== localParticipant.name);
                  } else {
                    if (prev.includes(localParticipant.name)) return prev;
                    return [...prev, localParticipant.name];
                  }
                });
              }
            }}
            icons={hand}
            size="w-[15px] h-[18px]"
            customStyle={myHand ? "bg-[#454950]" : ""}
          />

            {/* share */}
          <Button
            func={async () => {
            if(canPublish){
                await localParticipant.setScreenShareEnabled(!localParticipant.isScreenShareEnabled)
                setShared(localParticipant.isScreenShareEnabled)
            }
            }}
            icons={share}
            size={`w-[21px] h-[18px] ${!canPublish ? "opacity-60 cursor-not-allowed !hover:none" : "cursor-pointer"}`}
             customStyle={shared ? "bg-[#454950]" : ""}
          />

            {/* Menu */}
          {
            localParticipant.attributes["UserRole"] === "Teacher" &&(
              <div>
                <div className="absolute bottom-[80px] left-[770px] z-10 ">
                  {optionMenu ? <ControlList /> : ""}
                </div>
                 <Button
                  func={() => setOptionMenu((prev) => !prev)}
                  icons={menu}
                  size="w-[4px] h-[17px]"
                  customStyle={optionMenu ? "bg-[#454950]" : ""}
                />
              </div>
            )
          }
       
        </div>

            {/* Leave */}
        <button
          onClick={() => setOptionLeave(true)}
          className="w-[103px] h-[48px] bg-[#D24747] rounded-[8px] flex justify-center items-center cursor-pointer"
        >
          <img src={leave} className="w-[14px] h-[14px]" alt="" />
          <h1 className="text-[16px] text-[#F9FBFC] ms-[10px]">Leave</h1>
        </button>
      </div>
    </>
  );
};

export default FooterBar;