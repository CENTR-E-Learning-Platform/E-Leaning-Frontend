import axios from "axios";
import { UPCOMING_CLASSES_TEACHER } from "../Utils/Api";

export const GetUpcomingClassesForTeacher = async () => {
  const token = localStorage.getItem("token");
  return await axios.get(UPCOMING_CLASSES_TEACHER, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
