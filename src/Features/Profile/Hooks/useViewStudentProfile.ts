import { useMutation } from "@tanstack/react-query";
import { GetStudentProfile } from "../Services/viewStudentProfileTeacher";

export const useStudentProfile = () => {
  return useMutation({
    mutationFn: (teacherId: string) =>
      GetStudentProfile(teacherId),
  });
};