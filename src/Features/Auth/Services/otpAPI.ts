import axios from 'axios';
import { VERIFY_OTP_API } from '../Utils/api';

export const otpLogin = async (data :any) => {
    return axios.post(VERIFY_OTP_API , data);
}