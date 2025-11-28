import * as Yup from "yup";

export const paymentCardSchema = Yup.object({
  cardNumber: Yup.string()
    .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Invalid card number format (1234 1234 1234 1234 )")
    .required("Card number is required"),

  expiryDate: Yup.string()
    .matches(/^\d{2}\/\d{2}$/, "Expiry must be MM/YY")
    .required("Expiry date is required"),

  cvc: Yup.string()
    .matches(/^\d{3}$/, "CVC must be 3 digits")
    .required("CVC is required"),
});