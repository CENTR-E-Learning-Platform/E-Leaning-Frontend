import axios from "axios";
import { STUDENT_CLASSES } from "../Utils/api";
import { BASE_URL } from "../Utils/api";
export const getAllStudentClasses = async(start: string, end: string) => {
    const token  = localStorage.getItem("token");
    return await axios.get(`${BASE_URL}/${STUDENT_CLASSES}` ,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }  
    )
}