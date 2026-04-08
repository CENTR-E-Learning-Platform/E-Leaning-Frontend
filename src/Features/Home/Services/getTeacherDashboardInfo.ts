import axios from "axios";
import { GET_TEACHER_DASHBOARD_INFO } from "../Utils/Api";

export const GetTeacherDashboardInfo = async () =>{
    const token = localStorage.getItem("token");
    return await axios.get(
        GET_TEACHER_DASHBOARD_INFO,
        {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
    )
}