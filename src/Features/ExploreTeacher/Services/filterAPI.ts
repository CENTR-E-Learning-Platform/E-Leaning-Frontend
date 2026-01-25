import axios from "axios";
import { FILTER_TEACHER_API } from "../Utils/api";

export const sendFilterData = async (FilterData : any) =>{
    const token = localStorage.getItem("token") || "";
    console.log(token)
    return await axios.get(
        FILTER_TEACHER_API,
        {
            params: FilterData,
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
}