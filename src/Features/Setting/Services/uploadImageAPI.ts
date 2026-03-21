import axios from "axios";
import { UPLOADIMAGE_API } from "../Utils/Apis";

export const sendUploadImageData = async (file : File) =>{

    const formData = new FormData();
    const token = localStorage.getItem("token");
    formData.append("file", file);
    formData.append("FileType", String(0));
    return await axios.patch(
        UPLOADIMAGE_API,
        formData  , 
        {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        }
    )
}