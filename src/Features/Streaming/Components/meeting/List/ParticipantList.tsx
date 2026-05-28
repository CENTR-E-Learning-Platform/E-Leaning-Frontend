import ParticipantComp from "./ParticipantComp";
import micOn from '../../../../../assets/icons/mic.svg';
import micOff from '../../../../../assets/icons/mic2.svg';
import disrais from '../../../../../assets/icons/disablehand.svg';
import videoOn from '../../../../../assets/icons/video.svg';
import videoOff from '../../../../../assets/icons/camera-disabled.svg';
import shareOn from '../../../../../assets/icons/share.svg';

interface ParticipantListProps {
  isMicOn: boolean;
  isCamOn: boolean;
  isShareOn: boolean;
  isHandRaised: boolean;
  onMuteToggle?: () => void;
  onCameraToggle?: () => void;
  onShareToggle?: () => void;
  onLowerHand?: () => void;
}

const ParticipantList = ({
  isMicOn,
  isCamOn,
  isShareOn,
  isHandRaised,
  onMuteToggle,
  onCameraToggle,
  onShareToggle,
  onLowerHand,
}: ParticipantListProps) => {
  return (
    <>
      <ParticipantComp
        func={onMuteToggle}
        rad="rounded-t-[8px]"
        icon={isMicOn ? micOff : micOn}
        color="#F9FBFC"
        parg={isMicOn ? "Mute Participant" : "Unmute Participant"}
      />

      <ParticipantComp
        func={onCameraToggle}
        rad=""
        icon={isCamOn ? videoOff : videoOn}
        color="#F9FBFC"
        parg={isCamOn ? "Disable Camera" : "Enable Camera"}
      />

      <ParticipantComp
        func={onShareToggle}
        rad={isHandRaised ? "" : "rounded-b-[8px]"}
        icon={shareOn}
        color="#F9FBFC"
        parg={isShareOn ? "Disable Screen Share" : "Enable Screen Share"}
      />

      {isHandRaised && (
        <ParticipantComp
          func={onLowerHand}
          rad="rounded-b-[8px]"
          icon={disrais}
          color="#F9FBFC"
          parg="Lower Hand"
        />
      )}
    </>
  );
};

export default ParticipantList;