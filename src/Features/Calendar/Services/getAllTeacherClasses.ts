import axios from "axios";
import { TEACHER_CLASSES } from "../Utils/api";
import { BASE_URL } from "../Utils/api";
export const getAllTeacherClasses = async() => {
    const token  = localStorage.getItem("token");
    return await axios.get(`${BASE_URL}/${TEACHER_CLASSES}` ,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }  
    )
}