import axios from "axios"
import { QUIZ_SEARCH_API} from "../Utils/Api"
export const quizSearch = async(quizId: number, StudentName: string) => {
    return axios.get(`${QUIZ_SEARCH_API}?QuizId=${quizId}&StudentName=${StudentName}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
}