import axios from "axios";
import { GET_STUDENT_PROFILE_API } from "../Utils/Apis";

export const GetStudentProfileData = async () =>{

    const token = localStorage.getItem("token");
    return await axios.get(
        GET_STUDENT_PROFILE_API,
        {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
    )
}