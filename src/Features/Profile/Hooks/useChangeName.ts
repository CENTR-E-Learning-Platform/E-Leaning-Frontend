import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeTeacherName } from "../Services/changeNameAPI";

export const useChangeName = () => {
  const queryClient = useQueryClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutation = useMutation({
    mutationFn: (name: string) => changeTeacherName(name),
    onSuccess: (res) => {
      console.log("Name changed successfully:", res.data);
      queryClient.invalidateQueries({ queryKey: ["teacherProfile"] });
    },
    onError: (err) => {
      console.error("Error changing name:", err);
    },
  });

  return mutation;
};
