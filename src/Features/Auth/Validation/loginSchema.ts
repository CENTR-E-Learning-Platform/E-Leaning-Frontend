import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .required("Email must be Required")
    .email("Email is invalid"),
  password: Yup.string()
    .required("Password must be Required")
    .min(8, "Password at least 8 characters")
    .max(25, "Password must be at most 25 characters"),
});
