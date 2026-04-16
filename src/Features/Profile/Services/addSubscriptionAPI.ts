import axios from "axios";
import { SUBSCRIPTION_API } from "../Utils/Apis";
export const addSubscription = async (teacherId: string) => {
    const token = localStorage.getItem("token");
    return await axios.post(
        SUBSCRIPTION_API,
        {},
        {
            params: { teacherId },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};




