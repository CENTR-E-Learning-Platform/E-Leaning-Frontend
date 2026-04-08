import axios from "axios";
import { ADD_WALLET } from "../Utils/Apis";

export const addWallet = async (data:any) => {
    const token = localStorage.getItem("token");
    return await axios.post(
        ADD_WALLET , 
        data,
         {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
}