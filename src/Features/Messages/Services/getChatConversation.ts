


import axios from "axios";
import { CHAT_GET_CONVERSATION } from "../Utils/Api";

export const getChatConversation = async () => {
    const token = localStorage.getItem("token");
    return await axios.get(
        CHAT_GET_CONVERSATION,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
};

