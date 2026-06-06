import axios from "axios";
import {  PAY_FOR_SESSION_API } from "../Utils/api";

export const payforsession = async () =>{
    const token = localStorage.getItem("token") || "";
    console.log(token)
    return await axios.post(
        PAY_FOR_SESSION_API,
        {
            roomName: "session_14227585-1836-401f-b7d6-08dec412f497_1"
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
}