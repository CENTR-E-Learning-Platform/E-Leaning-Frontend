import axios from "axios";
import { ALL_TEACHER_API } from "../Utils/api";

export const sendAllTeacherData = async (SendData : any) =>{
    const token = localStorage.getItem("token") || "";
    return await axios.get(
        ALL_TEACHER_API,
        {
            params: SendData,
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
}