import { useEffect, useRef, useState } from "react";
import micDis from "../../../assets/icons/mic2.svg";
import micIcon from "../../../assets/icons/mic.svg";
import camera from "../../../assets/icons/video.svg";
import cameraDis from "../../../assets/icons/camera-disabled.svg";
import settining from "../../../assets/icons/settings.svg";
import Button from "../Components/JoinRoom/Button";
import SettingsDropdown from "../Components/JoinRoom/SettingsDropdown";
import { useCreateRoom } from "../Hooks/useCreateRoom";
import { useControlling } from "../Hooks/useControlling";
import { useControlContext } from "../Context/ControlContext";
import { useTeacherProfile } from "../../Profile/Hooks/useTeacherProfile";
import { BASE_URL } from "../Utils/Apis";
import DefaultImage from "../Components/meeting/DefaultImage";

const JoinNow = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsAnchorRef = useRef<HTMLDivElement>(null);
  const { data } = useTeacherProfile();

  const {
    cameraView, setCameraView,
    mic, setMic,
    setOpenStream,
  } = useControlContext();

  const { JoinRoom } = useCreateRoom();
  const { initStream, toggleCamera, toggleMic, stream, stopStream } = useControlling();

  const [activeMicId, setActiveMicId] = useState<string>("");
  const [activeCameraId, setActiveCameraId] = useState<string>("");

  useEffect(() => {
    let activeStream: any = null;

    const start = async () => {
      const media = await initStream();
      if (media) {
        activeStream = media;
        setOpenStream(true);
        setCameraView(true);
        setMic(true);
      }
    };
    start();

    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach((track: any) => track.stop());
      }
      stopStream();
    };
  }, []);

  const handleCameraClickCam = () => {
    if (stream) {
      toggleCamera();
      setCameraView((prev) => !prev);
    }
  };

  const handleCameraClickMic = () => {
    if (stream) {
      toggleMic();
      setMic((prev) => !prev);
    }
  };

  const handleSettingsClick = () => setSettingsOpen((prev) => !prev);

  const handleMicrophoneChange = async (deviceId: string) => {
    setActiveMicId(deviceId);
    if (stream) {
      try {
        const newStream = await navigator.mediaDevices.getUserMedia({
          audio: { deviceId: { exact: deviceId } }
        });
        const newAudioTrack = newStream.getAudioTracks()[0];
        const oldAudioTrack = stream.getAudioTracks()[0];

        if (oldAudioTrack) {
          stream.removeTrack(oldAudioTrack);
          oldAudioTrack.stop();
        }
        stream.addTrack(newAudioTrack);
      } catch (err) { }
    }
  };

  const handleCameraChange = async (deviceId: string) => {
    setActiveCameraId(deviceId);
    if (stream) {
      try {
        const newStream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: { exact: deviceId } }
        });
        const newVideoTrack = newStream.getVideoTracks()[0];
        const oldVideoTrack = stream.getVideoTracks()[0];

        if (oldVideoTrack) {
          stream.removeTrack(oldVideoTrack);
          oldVideoTrack.stop();
        }
        stream.addTrack(newVideoTrack);
      } catch (err) { }
    }
  };

  return (
    <div className="bg-[#2A2D34] min-h-screen flex justify-center items-center px-4 sm:px-6">
      <div className="flex flex-col w-full max-w-[450px]">
        <h1 className="text-[16px] sm:text-[18px] text-[#F9FBFC] mb-[24px] sm:mb-[32px] text-center">
          Choose your audio and video options
        </h1>

        <div className="bg-[#393D44] w-full aspect-[4/3] sm:h-[300px] overflow-hidden rounded-[8px] flex justify-center items-center relative">
          <div className="flex flex-col items-center w-full h-full justify-center">
            {stream && cameraView ? (
              <video
                className="w-full h-full object-cover rounded-[8px] transform scale-x-[-1]"
                autoPlay
                playsInline
                muted
                ref={(v) => {
                  if (v && stream) v.srcObject = stream;
                }}
              ></video>
            ) : (
              <>
                {
                  data?.data.data.profilePicturePath !== BASE_URL ?
                    <img
                      src={data?.data.data.profilePicturePath}
                      className="rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] object-cover"
                      alt="Avatar"
                    /> :
                    <div className="w-[100px] h-[100px] rounded-full">
                      <DefaultImage character={data?.data.data.fullName.slice(0, 2).toUpperCase()} />
                    </div>
                }

                <h1 className="text-[12px] sm:text-[13px] text-[#F9FBFC] mt-[12px]">
                  Your camera is turned off
                </h1>
              </>
            )}
          </div>
        </div>

        <div className="w-full h-[48px] flex justify-between mt-[12px]">
          <div className="w-[104px] bg-[#2A2D34] flex gap-[8px]">
            <Button
              func={handleCameraClickMic}
              src={mic ? micIcon : micDis}
            />
            <Button
              func={handleCameraClickCam}
              src={cameraView ? camera : cameraDis}
            />
          </div>
          <div ref={settingsAnchorRef} style={{ position: "relative" }}>
            <Button func={handleSettingsClick} src={settining} />
            <SettingsDropdown
              isOpen={settingsOpen}
              onClose={() => setSettingsOpen(false)}
              anchorRef={settingsAnchorRef}
              onMicChange={handleMicrophoneChange}
              onCameraChange={handleCameraChange}
              activeMic={activeMicId}
              activeCamera={activeCameraId}
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-[20px]">
          <button
            onClick={JoinRoom}
            className="w-full max-w-[249px] h-[52px] bg-[#525FE1] rounded-[8px] text-[#F9FBFC] text-[16px] sm:text-[18px] font-semibold cursor-pointer hover:bg-[#434db0] transition-colors"
          >
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;