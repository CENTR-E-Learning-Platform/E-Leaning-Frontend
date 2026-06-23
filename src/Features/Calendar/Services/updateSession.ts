import axios from "axios"
import { UPDATE_SESSION_API, UPDATE_SESSION_SERIES_API } from "../Utils/api"

export const UpdateSession = async (data: any) => {
    const token = localStorage.getItem("token") || "";
    return axios.patch(
        UPDATE_SESSION_API,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
}

export const UpdateSessionSeries = async (data: any) => {
    const token = localStorage.getItem("token") || "";
    return axios.patch(
        UPDATE_SESSION_SERIES_API,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
}
