import axios from "axios"
import { HISTORY_NOTIFICATIONS_API } from "../Utils/Api";
export const getHistoryNotifications = async (page: number, pageSize: number) => {
    return await axios.get(`${HISTORY_NOTIFICATIONS_API}?pageNumber=${page}&pageSize=${pageSize}`
        ,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
}