import { useRoomContext } from "@livekit/components-react";
import {ControlParticipant} from "../Types/types";
import { Role } from "../Services/Role";
import { useControlContext } from "../Context/ControlContext";
export const useRole = () => {
   //  const room = useRoomContext();
   //  const {setMic , setCameraView , setMute} = useControlContext();
    const MuteParticipant = async (identity:any , isCurrentlyMicEnabled:any ) => {
       try{
       const roomName = localStorage.getItem("sessionName")?.toString();
       ControlParticipant.identity = identity;
       ControlParticipant.roomName = roomName ? roomName :"";
       ControlParticipant.mute =  isCurrentlyMicEnabled;
       console.log(ControlParticipant);
      //  setCameraView(false);
      //  setMic(false);
    //    setMute((prev) => !prev);
       const res =await Role(ControlParticipant);
       console.log( res.data);
       }catch(err:any){
        console.log("errors" , err);
       }
       
    }
    return {MuteParticipant}
}

