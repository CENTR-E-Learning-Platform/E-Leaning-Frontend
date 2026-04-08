import axios from "axios";
import { DELETE_WALLET } from "../Utils/Apis";

export const deleteWallet = async () => {
    await axios.patch(
        DELETE_WALLET,
        {},
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
    );
}