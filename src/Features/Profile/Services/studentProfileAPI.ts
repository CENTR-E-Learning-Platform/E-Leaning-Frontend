import axios from "axios";
import { STUDENTPROFILE_API } from "../Utils/Apis";

export const GetStudentProfileData = async () =>{

    const token = localStorage.getItem("token");
    return await axios.get(
        STUDENTPROFILE_API,
        {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
    )
}