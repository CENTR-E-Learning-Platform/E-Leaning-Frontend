import axios from "axios";
import { UPCOMING_CLASSES } from "../Utils/Api";

export const GetUpcomingClasses = async () =>{
    const token = localStorage.getItem("token");
    return await axios.get(
        UPCOMING_CLASSES,
        {
            params:{
                PageNumber: 1,
                PageSize: 2
            },
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
    )
}