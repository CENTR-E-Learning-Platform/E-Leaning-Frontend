import axios from "axios";
import { CHARGE_API } from "../Utils/api";

export const sendcharge = async (chargeData : any) =>{
    const token  = localStorage.getItem("token");
    return await axios.post(
        CHARGE_API,
        chargeData,
        {
        headers: {
        Authorization: `Bearer ${token}`
      }
    }
    )
}