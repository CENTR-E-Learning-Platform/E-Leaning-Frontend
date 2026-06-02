import axios from "axios";
import { BASE_URL } from "../../Home/Utils/Api";

export const readNotifyById = async (id: number) => {
    return await axios.patch(
        `${BASE_URL}/Notification/${id}/read/`,
        {},
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    );
};

export const markAllNotificationsRead = async () => {
    return await axios.patch(
        `${BASE_URL}/Notification/read-all`,
        {},
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    );
};