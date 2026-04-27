import axios from "axios"
import { QUIZ_CSV_API} from "../Utils/Api"
export const quizCsv = async(quizId: number) => {
    return axios.get(`${QUIZ_CSV_API}?QuizId=${quizId}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
}