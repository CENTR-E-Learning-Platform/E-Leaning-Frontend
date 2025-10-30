import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {  SendEmail } from "../Services/sendemailAPI";
import { emailSchema } from "../Validation/emailSchema";
import { PassAndRepassSchema } from "../Validation/Pass&repas";
import { forgetpassword } from "../Services/forgetpasswordAPI";

export const useSendEmail = () => {
    const navigate = useNavigate();
    const ClickSendEmail = () => {
      navigate("/login/SendEmail");
    }
    ////////////////////////////////////////////////////////////////////////////
    const formik = useFormik({
        initialValues: {
          email: "",
        },
        validationSchema: emailSchema,
        onSubmit: async (values, { setSubmitting }) => {
          try {
            setSubmitting(true);
            const res = await SendEmail(values);
            localStorage.setItem("emailSendEmail", values.email);
            if (res.data.message === "Email Resnet Successfully" || res.status === 200) {
              navigate("/login/SendEmail/otp");
            }
            console.log(" Email:", res.data);
          } catch (error: any) {
            const MSError = error.response?.data.errors[0] || error.message;
            console.error("Email failed:", MSError);
            alert(MSError);
          } finally {
            setSubmitting(false);
          }
        },
      });
    
      
  return {ClickSendEmail , formik};
}

export const useResetpassword = () => {
  const navigate = useNavigate();
  const Email = localStorage.getItem("emailSendEmail");
  const OTPforgetPassword = localStorage.getItem("otpForForgetPassword");
  const formik = useFormik({
    initialValues: {
      NewPassword: "",
      confirmPassword: "",
    },
    
    validationSchema: PassAndRepassSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const finalResetPassword = {
        newPassword: values.NewPassword,
        confirmPassword: values.confirmPassword,
        email: Email,
        otp: OTPforgetPassword,
      };
      console.log(finalResetPassword)
      try {
        setSubmitting(true);
        const res = await forgetpassword(finalResetPassword);
        console.log(" Resetpassword successful:", res.data);
        alert("Succes Resetpassword" );
        navigate("/login");
      } catch (error: any) {
        const MSError = error.response?.data.errors[0] || error.message;
        console.error(" Resetpassword failed:", MSError);
        alert(MSError);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return formik;
};