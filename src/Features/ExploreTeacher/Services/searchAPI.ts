import axios from "axios";
import { SEARCH_TEACHER_API } from "../Utils/api";

export const sendSearchData = async (SearchData : any) =>{
    const token = localStorage.getItem("token") || "";
    return await axios.get(
        SEARCH_TEACHER_API,
        {
            params: SearchData,
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
}