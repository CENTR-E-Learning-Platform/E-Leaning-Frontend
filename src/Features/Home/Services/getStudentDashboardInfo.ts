import axios from "axios";
import { GET_STUDENT_DASHBOARD_INFO } from "../Utils/Api";


export const GetStudentDashboardInfo = async () =>{
    const token = localStorage.getItem("token");
    return await axios.get(
        GET_STUDENT_DASHBOARD_INFO,
        {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
    )
}