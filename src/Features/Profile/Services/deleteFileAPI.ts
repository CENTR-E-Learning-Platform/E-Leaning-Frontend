import axios from "axios";
import { DELETE_FILE_API } from "../Utils/Apis";

export const DeleteFile = async (fileType: number) => {

    const token = localStorage.getItem("token");
    return await axios.patch(
        DELETE_FILE_API,
        { fileType },
        {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
    )
}