import axios from "axios"
import { ADD_QUIZ_API } from "../Utils/Api";
export const createQuiz = async (quizData: any) => {
    return await axios.post(ADD_QUIZ_API, quizData
        ,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
}