import axios from "axios";
import { TEACHERPROFILE_API } from "../Utils/Apis";

export const GetTeacherProfileData = async () =>{

    const token = localStorage.getItem("token");
    return await axios.get(
        TEACHERPROFILE_API,
        {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
    )
}