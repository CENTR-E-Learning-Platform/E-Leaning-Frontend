import axios from "axios";

export const VerifyEmail = (url:any) => {
    return axios.get(url);
}