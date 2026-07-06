import { useFormik } from "formik";
import { registerSchema } from "../Validation/registerSchema";
import { useNavigate } from "react-router-dom";
import { useRegContext } from "../Contexts/RegContext";
import { registerUser } from "../Services/registerAPI";

export const useRegister = () => {
  const { setUserData, educationLevelOrSubject, role } = useRegContext();
  const navigate = useNavigate();
  const { RegisterClick } = usehandelClickLogin();
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        const finalData = {
          ...values,
          role,
          educationLevelOrSubject,
        };
        console.log("Form data", values);
        setUserData(values);
        await RegisterClick(finalData);
        navigate("/emailconfirmation");
      } catch (error: any) {
        alert(error.response?.data?.errors?.[0] || error.message || "Registration failed");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return formik;
};

const usehandelRegister = (
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
};

export const usehandelClickLogin = () => {
  const navigate = useNavigate();
  const { educationLevelOrSubject, seteducationLevelOrSubject } = useRegContext();

  function RegisterClick(FormRegister: object) {
    return usehandelRegister(FormRegister);
  }

  function BackOption() {
    localStorage.removeItem("educationLevelOrSubject");
    navigate("/auth");
  }

  return {
    seteducationLevelOrSubject,
    RegisterClick,
    BackOption,
    educationLevelOrSubject,
  };
};

export const usehandelBackRegister = () => {
  const navigate = useNavigate();
  const { role, setrole } = useRegContext();
  const handleContinue = () => {
    if (!role) {
      return;
    }
    if (role === "Teacher") {
      navigate("/teacher-option");
    } else {
      navigate("/student-option");
    }
  };
  function BackReg() {
    localStorage.removeItem("role");
    navigate("/Home");
  }

  return {
    handleContinue,
    BackReg,
    role,
    setrole,
  };
};
