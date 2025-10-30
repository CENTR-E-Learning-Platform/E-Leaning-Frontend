// src/features/auth/hooks/useRegister.ts
import { useFormik } from "formik";
import { registerSchema } from "../Validation/registerSchema";
import { useNavigate } from "react-router-dom";
import { useRegContext } from "../Contexts/RegContext";
import { registerUser } from "../Services/registerAPI";

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

export const usehandelRegister = (
  formData:
    | {
        fullName?: string;
        email?: string;
        password?: string;
        educationLevelOrSubject?: string;
        role?: string;
      }
    | any
) => {

  return registerUser(formData)
    .then((res) => {
      console.log("Success :", res.data);
      return res;
    })
    .catch((error) => {
      console.log("Error :", error.message);
      if (error.response) {
        console.log("Server :", error.response.data.title);
      }
      throw error;
    });
}

export const usehandelBackRegister = () => {
  const navigate = useNavigate();
  const { role, setrole } = useRegContext();
  const handleContinue = () => {
    if (!role) {
      return;
    }
    if (role === "Teacher") {
      navigate("/TeacherOption");
    } else {
      navigate("/StudentOption");
    }
  };
  function BackReg() {
    localStorage.removeItem("role");
    navigate("/Register");
  }

  return {
    handleContinue,
    BackReg,
    role,
    setrole,
  };
};
