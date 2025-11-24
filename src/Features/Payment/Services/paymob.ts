import { PAYMOB_API } from "../Utils/api";
import axios from "axios";

export const paymob = async(userDetails:object)=>{
    //const token = localStorage.getItem("token");
    return await axios.post(
        `${PAYMOB_API}${localStorage.getItem("paymentKey")}`,
        userDetails,
    {
      headers: { "Content-Type": "application/json" }
    }    
    )
}