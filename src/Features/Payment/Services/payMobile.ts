import axios from "axios";
import { MOBILE_API } from "../Utils/api";

export const paymobile = async (data:object) => {
    const token = localStorage.getItem("token");
    return axios.post(
        MOBILE_API,
        data,
       {
        headers: {
        Authorization: `Bearer ${token}`
      }
    }  
    )
}
