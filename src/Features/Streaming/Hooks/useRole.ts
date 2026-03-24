import { useRoomContext } from "@livekit/components-react";
import {ControlParticipant} from "../Types/types";
import { Role } from "../Services/Role";
import { useControlContext } from "../Context/ControlContext";
import { useLocalParticipant } from "@livekit/components-react";
export const useRole = () => {
    const room = useRoomContext();
   const {localParticipant} = useLocalParticipant();
   //  const room = useRoomContext();
   //  const {setMic , setCameraView , setMute} = useControlContext();
    const DisabledMicParticipant = async (identity:any , isCurrentlyMicEnabled:any ) => {
       try{
       const roomName = localStorage.getItem("sessionName")?.toString();
       ControlParticipant.identity = identity;
       ControlParticipant.roomName = roomName ? roomName :"";
       ControlParticipant.mute =  isCurrentlyMicEnabled;
       console.log(ControlParticipant);
      //  setCameraView(false);
      //  setMic(false);
    //    setMute((prev) => !prev);
       const res = await Role(ControlParticipant);
       console.log( res.data);
       }catch(err:any){
        console.log("errors" , err);
       }
       
    }
    
  
   const MuteParticipant = async (identity: string) => {
        try {
            const payload = JSON.stringify({ 
                type: 'SOFT_MUTE', 
                targetIdentity: identity 
            });
            const encoder = new TextEncoder();
            
            await room.localParticipant.publishData(encoder.encode(payload), { 
                reliable: true, 
                topic: "control" 
            });
        } catch (error) {
            console.error(error);
        }
    };
    return {DisabledMicParticipant , MuteParticipant}
}

