import axios from "axios";
import { TEACHER_CLASSES } from "../Utils/api";
import { BASE_URL } from "../Utils/api";
export const getAllTeacherClasses = async(start:any , end:any) => {
    const token  = localStorage.getItem("token");
    return await axios.get(`${BASE_URL}/${TEACHER_CLASSES}?Start=${start}&End=${end}` ,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }  
    )
}