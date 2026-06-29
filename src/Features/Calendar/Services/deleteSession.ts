import axios from "axios";
import { DELETE_SESSION_API } from "../Utils/api";

const deleteSession = async (sessionId: string) => {
    const token = localStorage.getItem("token") || "";

    return await axios.delete(`${DELETE_SESSION_API}?SessionId=${sessionId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        
    });
};

export default deleteSession;