import axios from "axios";
import { COUNT_UNREAD_NOTIFICATIONS_API } from "../Utils/Api";

export const getUnreadCount = async () => {
    return await axios.get(COUNT_UNREAD_NOTIFICATIONS_API, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};
