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
            let finalStartTime = new Date(`${values.StartTime}T${values.Time}`);
         const params = new URLSearchParams({
    Price: values.Price.toString(),
    StartTime: finalStartTime.toISOString(), 
    DurationMinutes: values.DurationMinutes.toString(),
    Title: values.Title,
    Reminder: values.Reminder ? values.Reminder.toString() : "",
    Description: values.Description || ""
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


