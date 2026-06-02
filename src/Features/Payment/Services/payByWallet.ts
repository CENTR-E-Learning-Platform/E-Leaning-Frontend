import axios from "axios";
import { PAYEMENT_WALLET_API } from "../Utils/api";

export const payByWallet = async (mobileNumber: string, amount: number) => {
    const token = localStorage.getItem("token");
    return axios.post(
        `${PAYEMENT_WALLET_API}?Amount=${amount}`,
        {
            walletNumber: mobileNumber
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}
