import axios from "axios"
import { CONTROL_API } from "../Utils/Apis";
export const Role = async (data:any) => {
    const token = localStorage.getItem("token");
    return await axios.post(CONTROL_API,data , {
            headers: {
        Authorization: `Bearer ${token}`
        }
    })

}