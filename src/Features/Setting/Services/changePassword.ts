
import axios from 'axios';
import { CHANGE_PASSWORD } from '../Utils/Apis';

export const changepassword = async (data :any) => {
    const token = localStorage.getItem("token");
    return await axios.post(
        CHANGE_PASSWORD,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
}

