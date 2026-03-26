import { useFormik } from "formik"
import { initialValues } from "../Types/types";
import { createRoom } from "../Services/createRoom";
import { joinRoom } from "../Services/joinRoom";
import { useNavigate } from "react-router-dom";
import { useControlling } from "./useControlling";
import { useControlContext } from "../Context/ControlContext";
import { ClassFormShema } from "../Validation/ClassFormSchema";
export const useCreateRoom = ()=> {
    const navigate = useNavigate();
    const {stopStream} = useControlling();
    const {setJoin} = useControlContext();
    const formik = useFormik({
        initialValues,
        validationSchema:ClassFormShema,
        onSubmit: async(values)=> {
        
        const time = new Date(values.StartTime);
        time.setHours(time.getHours() + 2);    
        const params = {
            Price: Number(values.Price),
            Title: values.Title,
            StartTime: time.toISOString(),
            DurationMinutes: Number(values.DurationMinutes),
            weeksNumber:values.weeksNumber,
            ClassGrade: values.Grade,
            Reminder: values.Reminder,
            Description: values.Description || ""
        };

        try{
            console.log("grad" , params);
            
            const response =await createRoom(params);
            console.log(response.data);
            console.log("success");
            // localStorage.setItem("sessionName" , response.data.sessionLiveKitRoom); 
            // navigate("/createroom/joinnow")
        }catch(err:any){
            console.log("Error Details:", err.response?.data);
            console.log(err);
            
        }
        },
        
    });
    const JoinRoom = async () => {
        try{
            const roomname = localStorage.getItem("sessionName")?.toString();
            const data = {roomName :roomname};
            console.log(roomname);
            const response = await joinRoom(data);
            console.log(response.data);
            await localStorage.setItem("sessionToken", response.data.token);
            setJoin(true);
            // stopStream();
            navigate("meeting")
            
            // initStream();
        }catch(err){
            console.log(err);
            
            alert(err);
        }
    }
    return {formik, JoinRoom};
}


