import axios from 'axios';
import { RESEND_EMAIL_API } from '../Utils/api';

export const SendEmail = async (data: any) => {
    return axios.post(RESEND_EMAIL_API,
        {
            email: data,
            type: 0,
        });
}