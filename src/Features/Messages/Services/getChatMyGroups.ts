import axios from "axios";
import { CHAT_GET_MY_GROUPS } from "../Utils/Api";

export const getChatMyGroups = async () => {
    const token = localStorage.getItem("token");
    return await axios.get(
        CHAT_GET_MY_GROUPS,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
};

