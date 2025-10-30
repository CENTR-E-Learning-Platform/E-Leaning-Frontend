import axios from 'axios';
import { Reset_PASSWORD } from '../Utils/api';

export const forgetpassword = async (data :any) => {
    return axios.post(Reset_PASSWORD , data);
}