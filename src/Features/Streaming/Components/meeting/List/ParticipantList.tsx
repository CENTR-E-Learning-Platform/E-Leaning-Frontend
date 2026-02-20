import ParticipantComp from "./ParticipantComp"
import mic from '../../../../../assets/icons/mic2.svg';
import disMic from '../../../../../assets/icons/disableMic.svg';
import disrais from '../../../../../assets/icons/disablehand.svg';
import kick from '../../../../../assets/icons/kick.svg';
import { useRole } from "../../../Hooks/useRole";
const participantList = () => {
  const {MuteParticipant} = useRole();
  return (
    <>
        <ParticipantComp 
        func = {()=> {
          MuteParticipant();
        }}
        rad = "rounded-t-[8px]" icon ={mic} color = "#F9FBFC" parg ="Mute Participant" />     
        <ParticipantComp rad = "" icon ={disMic}  color = "#F9FBFC" parg ="Disable Mic" />     
        <ParticipantComp rad = "" icon ={disrais} color = "#F9FBFC" parg ="Lower Hand" />     
        <ParticipantComp rad = "rounded-b-[8px]" icon ={kick} color = "#D24747" parg ="Remove Participant" />     
    </>
  )
}

export default participantList