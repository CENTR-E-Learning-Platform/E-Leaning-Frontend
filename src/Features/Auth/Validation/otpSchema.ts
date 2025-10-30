import * as Yup from "yup";

export const otpSchema = Yup.object({
  otp: Yup.array()
    .of(
      Yup.string()
        .matches(/^[0-9]$/, "Each digit must be a number")
        .required("All fields are required")
    )
    .min(5, "OTP must be 5 digits")
    .max(5, "OTP must be 5 digits"),
});
