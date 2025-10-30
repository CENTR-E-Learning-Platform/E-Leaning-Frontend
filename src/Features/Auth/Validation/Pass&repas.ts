import * as Yup from "yup";

export const PassAndRepassSchema = Yup.object({
    NewPassword:Yup.string() .required("Password must be Required")
    .min(8, "Password at least 8 characters")
    .max(25, "Password must be at most 25 characters"),
    confirmPassword:Yup.string().required("re-Password is required").oneOf([Yup.ref('NewPassword'),] , `re-Password pattern is inavalid`),
  
});
