import { useFormik } from "formik"
import { initialValues } from "../Types/types";
import { createRoom } from "../Services/createRoom";
import { joinRoom } from "../Services/joinRoom";
import { useNavigate } from "react-router-dom";
import { useControlling } from "./useControlling";
export const useCreateRoom = ()=> {
    const navigate = useNavigate();
    const {initStream} = useControlling();
    const formik = useFormik({
        initialValues,
        onSubmit: async(values)=> {
          const params = new URLSearchParams({
           StartTime : values.StartTime,
           DurationMinutes : values.DurationMinutes,
           Title : values.Title,
           Description : values.Description 
    });
        try{
            const response =await createRoom(params);
            console.log(response.data);
            localStorage.setItem("sessionName" , response.data.sessionLiveKitRoom); 
            navigate("joinnow")
        }catch(err){
            alert(err);
        }
        },
        
    });
  
    const JoinRoom = async () => {
        try{
            const response = await joinRoom();
            console.log(response.data);
            localStorage.setItem("sessionToken", response.data.token);
             navigate("meeting")
             initStream;
        }catch(err){
            console.log(err);
            
            alert(err);
        }
    }
    return {formik, JoinRoom};
}


