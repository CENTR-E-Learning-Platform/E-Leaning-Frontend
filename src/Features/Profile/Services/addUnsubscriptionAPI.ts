import axios from "axios";
import { UNSUBSCRIPTION_API } from "../Utils/Apis";
export const addUnsubscription = async (teacherId: string) => {
    const token = localStorage.getItem("token");
    return await axios.post(
        UNSUBSCRIPTION_API,
        {},
        {
            params: { teacherId },
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
};
