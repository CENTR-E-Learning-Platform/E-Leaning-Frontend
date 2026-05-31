import axios from "axios";
import { UPCOMING_CLASSES_STUDENT } from "../Utils/Api";

export const GetUpcomingClassesForStudent = async () => {
  const token = localStorage.getItem("token");
  return await axios.get(UPCOMING_CLASSES_STUDENT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
