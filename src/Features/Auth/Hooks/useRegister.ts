// src/features/auth/hooks/useRegister.ts
import { useFormik } from "formik";
import { registerSchema } from "../Validation/registerSchema";
import { useNavigate } from "react-router-dom";
import { useRegContext } from "../Contexts/RegContext";

export const useRegister = () => {
  const { setUserData } = useRegContext();
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
      setUserData(values);
      navigate("/OptionRegister");
    },
  });

  return formik;
};
