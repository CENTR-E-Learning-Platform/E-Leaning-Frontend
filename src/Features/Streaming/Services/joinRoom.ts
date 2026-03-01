import axios from "axios"
import { BASE_URL } from "../Utils/Apis"
export const joinRoom = async(data:any)=> {
   
    
    const token = localStorage.getItem("token");
    return await axios.post(
        `${BASE_URL}/api/Room/token`,data,
        {
            headers: {
        Authorization: `Bearer ${token}`
        }
        }
    );
}