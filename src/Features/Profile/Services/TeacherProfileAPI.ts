import axios from "axios";
import { TeacherProfile_API } from "../Utils/Apis";

export const GetTeacherProfileData = async () =>{

    const token = localStorage.getItem("token");
    return await axios.get(
        TeacherProfile_API,
        {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
    )
}