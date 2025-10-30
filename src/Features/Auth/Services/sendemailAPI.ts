import axios from 'axios';
import { SEND_EMAIL } from '../Utils/api';

export const SendEmail = async (data :any) => {
    return axios.post(SEND_EMAIL , data);
}