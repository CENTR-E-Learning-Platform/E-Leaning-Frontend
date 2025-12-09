import tech from "../../../assets/images/mester.jpg";
import micDis from "../../../assets/icons/mic2.svg";
import micIcon from "../../../assets/icons/mic.svg";
import camera from "../../../assets/icons/video.svg";
import cameraDis from "../../../assets/icons/camera-disabled.svg";
import settining from "../../../assets/icons/settings.svg";
import Button from "../Components/JoinRoom/Button";
import { useCreateRoom } from "../Hooks/useCreateRoom";
import { useControlling } from "../Hooks/useControlling";
import { useControlContext } from "../Context/ControlContext";
const JoinNow = () => {
  const {cameraView , setCameraView , mic , setMic , openStream , setOpenStream} = useControlContext();
  const { JoinRoom } = useCreateRoom();
  const { initStream, toggleCamera, toggleMic, stream } = useControlling();

  const handleCameraClickStream = () => {
    initStream();
    setOpenStream(!openStream);
  };
  const handleCameraClickCam = () => {
    toggleCamera();
    setCameraView(!cameraView);
  };
  const handleCameraClickMic = () => {
    toggleMic();
    setMic(!mic);
  };
  return (
    <>
      <div className="bg-[#2A2D34]  h-[100vh] flex justify-center items-center ">
        <div className="flex flex-col">
          <h1 className="text-[18px] text-[#F9FBFC] mb-[32px] text-center ">
            Choose your audio and video options
          </h1>
          <div className="bg-[#393D44] w-[450px] h-[300px] overflow-hidden rounded-[8px] flex justify-center items-center">
            <div className="flex flex-col  items-center ">
              {stream && cameraView ? (
                <video
                  className="w-full h-full object-cover rounded-[8px]"
                  autoPlay
                  ref={(v) => v && (v.srcObject = stream as any) }
                ></video>
              ) : (
                <>
                  <img
                    src={tech}
                    className="rounded-full w-[120px] h-[120px]"
                    alt=""
                  />
                  <h1 className="text-[13px] text-[#F9FBFC] mt-[12px]">
                    Your camera is turned off
                  </h1>
                </>
              )}
            </div>
          </div>
          <div className="w-[450px] h-[48px] flex justify-between mt-[12px]">
            <div className="w-[104px] bg-[#2A2D34]  flex gap-[8px]">
              <Button
                func={handleCameraClickMic}
                src={mic && openStream ? micIcon : micDis}
              />
              <Button
                func={handleCameraClickCam}
                src={cameraView && openStream ? camera : cameraDis}
              />
            </div>
            <Button func={handleCameraClickStream} src={settining} />
          </div>
          <div className="flex justify-center items-center mt-[20px]">
            <button
              onClick={JoinRoom}
              className="w-[249px] h-[52px] bg-[#525FE1] rounded-[8px] text-[#F9FBFC] text-[18px] font-semibold cursor-pointer"
            >
              Join now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default JoinNow;
