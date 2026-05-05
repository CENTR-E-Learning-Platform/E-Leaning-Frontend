import axios from "axios";
import { CHAT_GROUP_MESSAGES } from "../Utils/Api";
export const getChatGroupMessages = async (ChatGetGropMessages: object) => {
    const token = localStorage.getItem("token");
    return await axios.post(
        CHAT_GROUP_MESSAGES,
        ChatGetGropMessages,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
};