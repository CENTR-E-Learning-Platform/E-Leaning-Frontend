import axios from "axios";
import { CHANGE_TEACHER_NAME_API } from "../Utils/Apis";
export const changeTeacherName = async (name: string) => {
    const token = localStorage.getItem("token");
    return await axios.patch(
        CHANGE_TEACHER_NAME_API,
        { name },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
};