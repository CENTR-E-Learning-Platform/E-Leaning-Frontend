// src/Features/Auth/Hooks/useLogin.ts
import { useFormik } from "formik";
import { loginSchema } from "../Validation/loginSchema";
// import { useLoginContext } from "../Contexts/LoginContext";
import { loginUser } from "../Services/loginAPI";

export const useLogin = () => {
//   const { setloginData } = useLoginContext();

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
        localStorage.setItem("token" , token);
        console.log(token);
        // setloginData(res.data);

      } catch (error: any) {
        console.error(" Login failed:", error.response?.data || error.message);
        alert("Invalid email or password");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return formik;
};

