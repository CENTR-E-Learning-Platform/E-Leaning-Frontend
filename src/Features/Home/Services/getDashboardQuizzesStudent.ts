import axios from "axios";
import { GET_DASHBOARD_QUIZZES_STUDENT } from "../Utils/Api";

export const getDashboardQuizzesStudent = async () => {
  const token = localStorage.getItem("token");
  return await axios.get(GET_DASHBOARD_QUIZZES_STUDENT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
