import { useMutation } from "@tanstack/react-query";
import { updateProfileStudent } from "../Services/updateProfileStudent";

export const useUpdateProfileStudent = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutation = useMutation({
    mutationFn: (data : any) => updateProfileStudent(data),
    onSuccess: (res) => {
      console.log("Update Profile Student successfully:", res.data);
    },
    onError: (err) => {
      console.error("Error Updating Profile Student:", err);
    },
  });

  return mutation;
};
