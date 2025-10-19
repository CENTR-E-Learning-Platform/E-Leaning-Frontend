import { createBrowserRouter } from "react-router-dom";
import MainRegister from "../Features/Auth/Pages/MainRegister";
import MainLogin from "../Features/Auth/Pages/MainLogin";
import OptionRegister from "../Features/Auth/Components/Register/OptionRegister";
import TeacherOption from "../Features/Auth/Components/Register/TeacherOption";
import StudentOption from "../Features/Auth/Components/Register/StudentOption";

export const router =createBrowserRouter([
  {path:'/',element:<MainRegister/>},
  {path:'/register',element:<MainRegister/>},
  {path:'/login',element:<MainLogin/>},
  {path:'/OptionRegister',element:<OptionRegister/>},
  {path:'/TeacherOption',element:<TeacherOption/>},
  {path:'/StudentOption',element:<StudentOption/>},
  
])