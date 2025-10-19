import axios from "axios";
import { EXTERNAL_LOGIN_API } from "../Utils/api";
export const googleLogin = (data:any) => {
    return axios.post(EXTERNAL_LOGIN_API , data);
}