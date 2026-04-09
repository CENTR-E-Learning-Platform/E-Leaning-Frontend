import axios from "axios";
import { RECOMMENDED_TEACHERS } from "../Utils/Api";

export const GetRecommendedTeacher = async () =>{
    const token = localStorage.getItem("token");
    return await axios.get(
        RECOMMENDED_TEACHERS,
        {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
    )
}