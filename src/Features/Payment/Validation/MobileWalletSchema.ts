import * as Yup from "yup";

export const MobileWalletSchema = Yup.object({
  mobileNumber: Yup.string()
    .matches(/^01[0-2,5][0-9]{8}$/, "Invalid Egyptian mobile number")
    .required("Phone number is required"),

  amount: Yup.number()
    .typeError("Amount must be a valid number")
    .min(1, "Amount must be greater than 0")
    .max(5000, "Maximum limit is 5,000")
    .required("Amount is required"),
});