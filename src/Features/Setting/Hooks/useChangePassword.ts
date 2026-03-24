import { useFormik } from "formik";
import { changepassword } from "../Services/changePassword";
import { changePasswordSchema } from "../Validation/changePasswordSchema";
import { useMutation } from "@tanstack/react-query";

export const useChangePassword = () => {
  const mutation = useMutation({
    mutationFn: (data: object) => changepassword(data),
    onSuccess: (res) => {
      alert("Change Password successful");
      console.log("Change Password successful:", res);
    },
    onError: (err) => {
      alert("Invalid input. Please check your values");
      console.error("Change Password failed:", err);
    },
  });
  

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    
    validationSchema: changePasswordSchema,
    onSubmit: async (values) => {
        await mutation.mutateAsync(values);
        console.log(values);
    },
  });

  return formik;
};