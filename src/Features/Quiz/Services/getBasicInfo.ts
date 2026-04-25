import axios from "axios"
import { QUIZ_BASIC_INFO_API } from "../Utils/Api"
export const getBasicInfo = async(data:any)=>{
    return axios.get(`${QUIZ_BASIC_INFO_API}?QuizId=${data}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
}