import axios from "axios";
import { GET_ACTIVE_QUIZZES_SUMMARY_TEACHER } from "../Utils/Api";

export const getQuizzesSummaryTeacher = async () => {
  const token = localStorage.getItem("token");
  return await axios.get(GET_ACTIVE_QUIZZES_SUMMARY_TEACHER, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
