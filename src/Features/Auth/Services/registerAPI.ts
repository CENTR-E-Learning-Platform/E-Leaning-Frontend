import axios from "axios";
import {REGISTER_API } from '../Utils/api';

export const registerUser = async (data:any) => {
    return axios.post(REGISTER_API , data);
}
