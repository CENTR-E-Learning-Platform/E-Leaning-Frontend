import axios from "axios"
import { GET_ALL_CLASSES_QUIZ_API } from "../Utils/Api";
export const getAllClassesQuiz = async () => {
    return axios.get(GET_ALL_CLASSES_QUIZ_API,
        {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
}