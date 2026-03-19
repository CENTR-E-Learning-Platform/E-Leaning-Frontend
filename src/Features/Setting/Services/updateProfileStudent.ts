import axios from "axios";
import { UPDATE_STUDENT_PROFILE_API } from "../Utils/Apis";
export const updateProfileStudent = async (data: object) => {
    const token = localStorage.getItem("token");
    return await axios.patch(
        UPDATE_STUDENT_PROFILE_API,
        data ,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
};