import { INITIAL_AMOUNT_API } from "../Utils/api";
import axios from "axios";

export const amountServices = async(amount:number) => {
    const token = localStorage.getItem("token");
   // console.log(token);
    return await axios.post(
         `${INITIAL_AMOUNT_API}?Amount=${amount}`,
         {},
      {
        headers: {
        Authorization: `Bearer ${token}`
      }
      }
    )
}
