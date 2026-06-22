import axios from "axios";
import { PAY_FOR_SESSION_API } from "../Utils/api";
export const payforsession = async (roomName: string) => {
    const token = localStorage.getItem("token") || "";
    console.log(token)
    return await axios.post(
        PAY_FOR_SESSION_API,
        {
            roomName: roomName
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
}