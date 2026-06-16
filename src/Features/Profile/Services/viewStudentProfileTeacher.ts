import axios from "axios";
import { STUDENT_TEACHERPROFILE_API } from "../Utils/Apis";

export const GetStudentProfile = async (teacherId: string) =>{

    const token = localStorage.getItem("token");
    return await axios.post(
        STUDENT_TEACHERPROFILE_API,
        {
            teacherId,
        },
        {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
    )
}