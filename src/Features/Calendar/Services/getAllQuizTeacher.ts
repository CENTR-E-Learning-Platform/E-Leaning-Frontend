import axios from "axios";
import { TEACHER_QUIZ } from "../Utils/api";
export const getAllQuizTeacher = async() => {
    return await axios.get(TEACHER_QUIZ ,
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }  
    )
}