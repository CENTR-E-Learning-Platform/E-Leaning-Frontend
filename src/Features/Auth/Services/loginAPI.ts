import axios from 'axios';
import {LOGIN_API } from '../Utils/api';

export const loginUser = async (data :any) => {
    return axios.post(LOGIN_API , data);
}