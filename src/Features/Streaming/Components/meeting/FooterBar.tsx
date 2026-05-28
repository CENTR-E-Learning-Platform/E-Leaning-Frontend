import Button from "./Button";
import microphon from "../../../../assets/icons/mic.svg";
import microphondis from "../../../../assets/icons/mic2.svg";
import video from "../../../../assets/icons/video.svg";
import videodis from "../../../../assets/icons/camera-disabled.svg";
import emoj from "../../../../assets/icons/emoj.svg";
import hand from "../../../../assets/icons/hand.svg";
import share from "../../../../assets/icons/share.svg";
import leave from "../../../../assets/icons/leave.svg";
import upArrow from "../../../../assets/icons/upArrow.svg";
import downArrow from "../../../../assets/icons/downArrow.svg";
import { useLocalParticipant, useRoomContext } from "@livekit/components-react";
import { useControlContext } from '../../Context/ControlContext';
import CustomButton from "./CustomButton";
import Reaction from "./Reaction";
import { useFooter } from "../../Hooks/useFooter";
import { useState, useRef } from "react";
import DeviceDropdown from "./DeviceDropdown";

const FooterBar = ({ setRais, handsound }: any) => {
  const { localParticipant } = useLocalParticipant();
  const room = useRoomContext();
  const {
    setMic,
    setCameraView,
    optionMic,
    setOptionMic,
    optionCamera,
    setOptionCamera,
    setOptionLeave,
    optionEmoji,
    setOptionEmoji,
    cameraPermitted,
    screensharePermitted,
  } = useControlContext();
  const { raisHand } = useFooter();
  const [myHand, setMyHand] = useState(false);
  const [shared, setShared] = useState(false);
  const [activeMicDevice, setActiveMicDevice] = useState("");
  const [activeCamDevice, setActiveCamDevice] = useState("");
  const micAnchorRef = useRef<HTMLDivElement>(null);
  const camAnchorRef = useRef<HTMLDivElement>(null);

  const isTeacher = localParticipant.attributes?.["UserRole"] === "Teacher";
  const canPublish = localParticipant.permissions?.canPublish ?? false;

  const micDisabled = !isTeacher && !canPublish;
  const cameraDisabled = !isTeacher && !cameraPermitted;
  const screenShareDisabled = !isTeacher && !screensharePermitted;

  const isMicOn = localParticipant.isMicrophoneEnabled;
  const isCamOn = localParticipant.isCameraEnabled;

  const handleMicDeviceChange = async (deviceId: string) => {
    setActiveMicDevice(deviceId);
    try {
      if (room) {
        await room.switchActiveDevice('audioinput', deviceId);
      } else if (isMicOn) {
        await localParticipant.setMicrophoneEnabled(false);
        await localParticipant.setMicrophoneEnabled(true, { deviceId });
      }
    } catch (_) { }
  };

  const handleCamDeviceChange = async (deviceId: string) => {
    setActiveCamDevice(deviceId);
    try {
      if (room) {
        await room.switchActiveDevice('videoinput', deviceId);
      } else if (isCamOn) {
        await localParticipant.setCameraEnabled(false);
        await localParticipant.setCameraEnabled(true, { deviceId });
      }
    } catch (_) { }
  };

  return (
    <>
      <div className="flex justify-center mb-[10px] mt-auto gap-4">
        <div className="flex gap-2">

          <div ref={micAnchorRef} style={{ position: "relative" }}>
            <DeviceDropdown
              isOpen={optionMic && !micDisabled}
              onClose={() => setOptionMic(false)}
              mode="mic"
              onDeviceChange={handleMicDeviceChange}
              activeDevice={activeMicDevice}
              anchorRef={micAnchorRef}
            />
            {micDisabled ? (
              <div className="relative opacity-50 cursor-not-allowed select-none pointer-events-none">
                <button
                  disabled
                  className="bg-[#454950] w-[71px] h-[48px] rounded-[8px] flex items-center me-[4px] border-[2px] border-[#393D44] cursor-not-allowed"
                >
                  <div className="flex justify-center items-center w-[21px] h-full">
                    <img src={downArrow} className="w-[12px] h-[12px]" alt="" />
                  </div>
                  <div className="w-[48px] h-[46px] bg-[#2A2D34] flex justify-center items-center rounded-[8px]">
                    <img src={microphondis} className="w-[18px] h-[20px]" alt="" />
                  </div>
                </button>
              </div>
            ) : (
              <CustomButton
                func={() => {
                  const newState = !isMicOn;
                  if (newState && activeMicDevice) {
                    localParticipant.setMicrophoneEnabled(true, { deviceId: activeMicDevice });
                  } else {
                    localParticipant.setMicrophoneEnabled(newState);
                  }
                  setMic(newState);
                }}
                arrowFunc={() => setOptionMic((prev: boolean) => !prev)}
                arrow={optionMic ? upArrow : downArrow}
                icons={isMicOn ? microphon : microphondis}
                size={isMicOn ? "w-[14px] h-[20px]" : "w-[18px] h-[20px]"}
                customStyle="cursor-pointer"
              />
            )}
          </div>

          <div ref={camAnchorRef} style={{ position: "relative" }}>
            <DeviceDropdown
              isOpen={optionCamera && !cameraDisabled}
              onClose={() => setOptionCamera(false)}
              mode="camera"
              onDeviceChange={handleCamDeviceChange}
              activeDevice={activeCamDevice}
              anchorRef={camAnchorRef}
            />
            {cameraDisabled ? (
              <div
                className="relative opacity-50 cursor-not-allowed select-none pointer-events-none"
                title="Camera is disabled. Ask the teacher to enable it."
              >
                <button
                  disabled
                  className="bg-[#454950] w-[71px] h-[48px] rounded-[8px] flex items-center me-[4px] border-[2px] border-[#393D44] cursor-not-allowed"
                >
                  <div className="flex justify-center items-center w-[21px] h-full">
                    <img src={downArrow} className="w-[12px] h-[12px]" alt="" />
                  </div>
                  <div className="w-[48px] h-[46px] bg-[#2A2D34] flex justify-center items-center rounded-[8px]">
                    <img src={videodis} className="w-[18px] h-[20px]" alt="" />
                  </div>
                </button>
              </div>
            ) : (
              <CustomButton
                func={() => {
                  const newState = !isCamOn;
                  if (newState && activeCamDevice) {
                    localParticipant.setCameraEnabled(true, { deviceId: activeCamDevice });
                  } else {
                    localParticipant.setCameraEnabled(newState);
                  }
                  setCameraView(newState);
                }}
                arrowFunc={() => setOptionCamera((prev: boolean) => !prev)}
                arrow={optionCamera ? upArrow : downArrow}
                icons={isCamOn ? video : videodis}
                size={isCamOn ? "w-[18px] h-[12px]" : "w-[18px] h-[20px]"}
                customStyle="cursor-pointer"
              />
            )}
          </div>

          <div style={{ position: "relative" }}>
            {optionEmoji ? <Reaction /> : null}
            <Button
              func={() => setOptionEmoji((prev: boolean) => !prev)}
              icons={emoj}
              size="w-[19px] h-[19px]"
              customStyle={optionEmoji ? "bg-[#454950]" : ""}
            />
          </div>

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

          {screenShareDisabled ? (
            <div
              className="opacity-50 cursor-not-allowed select-none pointer-events-none"
              title="Screen sharing is disabled. Ask the teacher to enable it."
            >
              <button
                disabled
                className="bg-[#2A2D34] w-[48px] h-[48px] rounded-[8px] flex justify-center items-center me-[4px] border-[2px] border-[#393D44] cursor-not-allowed"
              >
                <img src={share} className="w-[21px] h-[18px]" alt="" />
              </button>
            </div>
          ) : (
            <Button
              func={async () => {
                await localParticipant.setScreenShareEnabled(!localParticipant.isScreenShareEnabled);
                setShared(localParticipant.isScreenShareEnabled);
              }}
              icons={share}
              size="w-[21px] h-[18px]"
              customStyle={shared ? "bg-[#454950]" : ""}
            />
          )}

        </div>

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