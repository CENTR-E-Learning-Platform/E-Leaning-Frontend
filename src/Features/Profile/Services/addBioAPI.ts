import axios from "axios";
import { ADD_TEACHR_BIO_API } from "../Utils/Apis";

export const AddBio = async (bio: string) => {

    const token = localStorage.getItem("token");
    return await axios.patch(
        ADD_TEACHR_BIO_API,
        { bio },
        {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
    )
}