import { useMutation } from "@tanstack/react-query";
import { UpdateSubjects } from "../Services/updateSubject";

type UpdateSubjectsPayload = {
  subjects: number[];
};

export const useUpdateSubjects = () => {
  return useMutation({
    mutationFn: (data: UpdateSubjectsPayload) => UpdateSubjects(data),
    onSuccess: (res) => {
      console.log("Subjects updated successfully:", res.data);
    },
    onError: (err) => {
      console.error("Error updating subjects:", err);
    },
  });
};