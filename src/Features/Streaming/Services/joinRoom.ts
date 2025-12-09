import axios from "axios"
import { BASE_URL } from "../Utils/Apis"
export const joinRoom = async()=> {
    const roomname = localStorage.getItem("sessionName");
    const token = localStorage.getItem("token");
    return await axios.get(
        `${BASE_URL}/${roomname}/token`,
        {
            headers: {
        Authorization: `Bearer ${token}`
        }
        }
    );
}