import axios from "axios"
import { BASE_URL } from "../Utils/Apis"
export const joinRoom = async()=> {
    const roomname = localStorage.getItem("sessionName")?.toString();
    console.log(roomname);
    
    const token = localStorage.getItem("token");
    return await axios.get(
        `${BASE_URL}/api/Room/${roomname}/token`,
        {
            headers: {
        Authorization: `Bearer ${token}`
        }
        }
    );
}