import * as Yup from "yup";

export const MobileWalletSchema = Yup.object({
  mobileNumber: Yup.string()
    .matches(/^01[0-2,5][0-9]{8}$/, "Invalid Egyptian mobile number")
    .required("Phone number is required"),
});
