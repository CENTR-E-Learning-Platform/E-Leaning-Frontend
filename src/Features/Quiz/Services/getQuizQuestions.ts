import axios from "axios"

export const getQuizQuestions = async (params: string) => {
    return axios.get(params,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    );
}