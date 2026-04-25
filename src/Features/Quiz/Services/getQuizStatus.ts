import axios from "axios"
import { QUIZ_STATUS_API } from "../Utils/Api"
export const getQuizStatus = async(data:any) => {
    return axios.get(`${QUIZ_STATUS_API}?QuizId=${data}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
}