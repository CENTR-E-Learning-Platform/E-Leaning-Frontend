import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .required("Name must be Required")
    .min(3, "Name at least 3 characters")
    .max(50, "Name must be at most 50 characters"),
  email: Yup.string()
    .required("Email must be Required")
    .email("Email is invalid"),
  password: Yup.string()
    .required("Password must be Required")
    .min(8, "Password at least 8 characters")
    .max(25, "Password must be at most 25 characters"),
});
