import { useFormik } from "formik";
import { loginSchema } from "../Validation/loginSchema";
import { loginUser } from "../Services/loginAPI";
import { useNavigate } from "react-router-dom";

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
        const roleToAuth = res.data.data.roles[0];
        localStorage.setItem("roleToAuth", roleToAuth);
        console.log(res.data.message);
        window.location.href = "https://e-leaning-frontend-one.vercel.app/";
      } catch (error: any) {
        const MSError = error.response?.data.errors[0] || error.message;
        console.error(" Login failed:", error.status);
        if (MSError === "OTP verification required. Check your email." || error.status === 403) {
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
