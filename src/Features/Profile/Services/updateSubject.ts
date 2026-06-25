import axios from "axios";
import { UPDATE_TEACHER_SUBJECTS_API } from "../Utils/Apis";
import type { UpdateSubjectsPayload } from "../Types/SubjectsPayload";

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