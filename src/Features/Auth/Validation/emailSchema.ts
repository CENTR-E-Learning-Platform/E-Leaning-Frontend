import * as Yup from "yup";
export const emailSchema = Yup.object({
  email: Yup.string()
    .required("Email must be Required")
    .email("Email is invalid")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ),
});