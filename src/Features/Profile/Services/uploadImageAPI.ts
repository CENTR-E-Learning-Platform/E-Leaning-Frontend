import axios from "axios";
import { UploadImage_API } from "../Utils/Apis";

export const sendUploadImageData = async (file : File) =>{

    const formData = new FormData();
    const token = localStorage.getItem("token");
    formData.append("file", file);
    return await axios.patch(
        UploadImage_API,
        formData  , 
        {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        }
    )
}