import axios from "axios";
import { UPLOAD_INTRO_VIDEO_API } from "../Utils/Apis";

export const sendUploadVideoData = async (file : File) =>{

    const formData = new FormData();
    const token = localStorage.getItem("token");
    formData.append("introVideo", file);
    formData.append("FileType", String(1));
    return await axios.put(
        UPLOAD_INTRO_VIDEO_API,
        formData  , 
        {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        }
    )
}