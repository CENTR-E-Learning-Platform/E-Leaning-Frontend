import axios from "axios"
import { SUBMIT_QUIZ_API } from "../Utils/Api";
export const submitQuiz = async (data: any) => {
    return axios.post(SUBMIT_QUIZ_API, data,
        {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
}