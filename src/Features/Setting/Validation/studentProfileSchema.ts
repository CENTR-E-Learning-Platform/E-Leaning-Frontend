import * as Yup from "yup";
import { egyptPhoneRegex } from "../Constant/egyptPhoneRegex";



export const studentProfileSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "First name must be at least 3 characters")
    .max(30, "First name must be less than 30 characters")
    .matches(/^[a-zA-Z]+$/, "First name must contain only letters")
    .notRequired(),

  secondName: Yup.string()
    .min(3, "Last name must be at least 3 characters")
    .max(30, "Last name must be less than 30 characters")
    .matches(/^[a-zA-Z]+$/, "Last name must contain only letters")
    .notRequired(),
    

  email: Yup.string()
    .email("Email is invalid")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ),

    
  phoneNum: Yup.string()
    .notRequired()
    .test(
      "valid-and-different",
      "Phone number must be valid and different from parent phone number",
      function (value) {
        const parentPhone = this.parent.parentPhoneNumber;

        if (!value) return true;
        if (!egyptPhoneRegex.test(value)) return false;
        if (value && parentPhone && value === parentPhone) return false;

        return true;
      }
    ),

parentPhoneNumber: Yup.string()
  .notRequired()
  .test(
    "valid-and-different",
    "Parent phone number must be valid and different from student phone number",
    function (value) {
      const studentPhone = this.parent.phoneNum;

      if (!value) return true;
      if (!egyptPhoneRegex.test(value)) return false;
      if (value && studentPhone && value === studentPhone) return false;

      return true;
    }
  ),
});