import axios from "axios"
import { QUIZ_SUBMISSIONS_API} from "../Utils/Api"
export const quizSubmissions = async(quizId: number, pageNumber: number, PageSize: number) => {
    return axios.get(`${QUIZ_SUBMISSIONS_API}?QuizId=${quizId}&PageNumber=${pageNumber}&PageSize=${PageSize}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
}