// src/Features/Auth/Hooks/useLogin.ts
import { useFormik } from "formik";
import { loginSchema } from "../Validation/loginSchema";
import { loginUser } from "../Services/loginAPI";
import { useNavigate } from "react-router-dom";
import { useRegContext } from "../Contexts/RegContext";
import { usehandelRegister } from "./useRegister";

export const useLogin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        const res = await loginUser(values);
        console.log(" Login successful:", res.data);
        var token = res.data.data.token;
        localStorage.setItem("token", token);
        console.log(token);
      } catch (error: any) {
        const MSError = error.response?.data.errors[0] || error.message;
        console.error(" Login failed:", error.status);
        if (MSError === "OTP verification required. Check your email." ||  error.status === 403) {
          localStorage.setItem("emailForOTP", values.email);
          navigate("/login/otp");
        } else {
          alert(MSError);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return formik;
};
export const usehandelClickLogin = () => {
  const navigate = useNavigate();

  const { educationLevelOrSubject , seteducationLevelOrSubject, FormRegister } =
    useRegContext();
  function RegisterClick() {
    if (!educationLevelOrSubject) {
      return;
    }
    usehandelRegister(FormRegister);
  }
  function BackOption() {
    localStorage.removeItem("educationLevelOrSubject");
    navigate("/OptionRegister");
  }
  return {
    seteducationLevelOrSubject,
    RegisterClick,
    BackOption,
    educationLevelOrSubject,
  };
};
