import axios from "axios";
import { BALANCE } from "../Utils/Apis";

export const getBalance = async () => {
    const token = localStorage.getItem("token");
    return await axios.get(
        BALANCE , 
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
}