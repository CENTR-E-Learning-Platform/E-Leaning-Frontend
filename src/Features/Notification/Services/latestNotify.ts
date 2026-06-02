import axios from "axios"
import { LATEST_NOTIFICATIONS_API } from "../Utils/Api";
export const getLatestNotifications = async () => {
    return await axios.get(LATEST_NOTIFICATIONS_API
        ,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
}