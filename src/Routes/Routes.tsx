import { createBrowserRouter } from "react-router-dom";
import MainRegister from "../Features/Auth/Pages/MainRegister";
import MainLogin from "../Features/Auth/Pages/MainLogin";
import OptionRegister from "../Features/Auth/Components/Register/OptionRegister";
import TeacherOption from "../Features/Auth/Components/Register/TeacherOption";
import StudentOption from "../Features/Auth/Components/Register/StudentOption";
import OTP from "../Features/Auth/Components/Log in/OTP";
import ForgetPassword from "../Features/Auth/Components/Log in/ForgetPassword";
import SetNewPassword from "../Features/Auth/Components/Log in/SetNewPassword";
import EmailConfig from "../Features/Auth/Components/Register/EmailConfig";

export const router = createBrowserRouter([
  { path: "/", element: <MainRegister /> },
  { path: "register", element: <MainRegister /> },
  { path: "login", element: <MainLogin /> },
  { path: "login/otp", element: <OTP /> },

  { path: "login/SendEmail", element: <ForgetPassword /> },
  { path: "login/SendEmail/otp", element: <OTP /> },
  { path: "login/SendEmail/otp/setNewPassword", element: <SetNewPassword /> },

  { path: "OptionRegister", element: <OptionRegister /> },
  { path: "TeacherOption", element: <TeacherOption /> },
  { path: "StudentOption", element: <StudentOption /> },
  { path: "/confing", element: <EmailConfig /> },
]);
