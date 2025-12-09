import axios from "axios"
import { BASE_URL } from "../Utils/Apis"
export const joinStudent = async(roomname:string)=> {
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