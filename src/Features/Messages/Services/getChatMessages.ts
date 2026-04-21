
import axios from "axios";
import { CHAT_GET_MESSAGES } from "../Utils/Api";
export const getChatMessages = async (ChatGetMessages: object) => {
    const token = localStorage.getItem("token");
    return await axios.post(
        CHAT_GET_MESSAGES,
        ChatGetMessages,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
};