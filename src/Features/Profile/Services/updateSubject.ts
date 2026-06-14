import axios from "axios";
import { UPDATE_TEACHER_SUBJECTS_API } from "../Utils/Apis";

type UpdateSubjectsPayload = {
  subjects: number[];
};

export const UpdateSubjects = async (data: UpdateSubjectsPayload) => {
  const token = localStorage.getItem("token");
  return await axios.patch(
    UPDATE_TEACHER_SUBJECTS_API,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};