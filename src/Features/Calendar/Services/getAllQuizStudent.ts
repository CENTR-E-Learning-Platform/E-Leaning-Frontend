import axios from "axios";
import { STUDENT_QUIZ } from "../Utils/api";
export const getAllQuizzesStudent = async() => {
    const token  = localStorage.getItem("token");
    return await axios.get(`${STUDENT_QUIZ}` ,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }  
    )
}