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
import { useLocalParticipant, useRoomContext } from "@livekit/components-react";
import {useControlContext} from '../../Context/ControlContext';
import { useControlling } from "../../Hooks/useControlling";
const FooterBar = () => {
  const {stopStream} = useControlling();
  const { localParticipant } = useLocalParticipant();
  const room = useRoomContext();
  const {mic , cameraView} = useControlContext();
  return (
    <>
      <div className="flex justify-center mb-[10px] mt-auto gap-4">
        <div className="flex gap-2">
          <Button
            func={() =>
              localParticipant.setMicrophoneEnabled(
                !localParticipant.isMicrophoneEnabled
              )
            }
            icons={mic || localParticipant.isMicrophoneEnabled ? microphon : microphondis}
            size="w-[14] h-[20px]"
          />
          <Button
            icons={cameraView || localParticipant.isCameraEnabled ? video : videodis}
            func={() =>
              localParticipant.setCameraEnabled(
                !localParticipant.isCameraEnabled
              )
            }
            size={cameraView || localParticipant.isCameraEnabled ?"w-[18px] h-[12px]":"w-[18px] h-[20px]" }
          />
          <Button icons={emoj} size="w-[19px] h-[19px]" />
          <Button icons={hand} size="w-[15px] h-[18px]" />
          <Button
            func={() =>
              localParticipant.setScreenShareEnabled(
                !localParticipant.isScreenShareEnabled
              )
            }
            icons={share}
            size="w-[21px] h-[18px]"
          />
          <Button icons={menu} size="w-[4px] h-[17px]" />
        </div>
        <button
          onClick={() => {
            room.disconnect();
             stopStream(); 
          }}
          className=" w-[103px] h-[48px] bg-[#D24747] rounded-[8px] flex justify-center items-center cursor-pointer"
        >
          <img src={leave} className="w-[14px] h-[14px]" alt="" />
          <h1 className="text-[16px] text-[#F9FBFC] ms-[10px]">Leave</h1>
        </button>
      </div>
    </>
  );
};
export default FooterBar;
