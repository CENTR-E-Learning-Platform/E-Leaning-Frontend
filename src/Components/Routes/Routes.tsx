import { createBrowserRouter } from "react-router-dom";
import MainRegister from "../Register/MainRegister";
import MainLogin from "../Log in/MainLogin";
import OptionRegister from "../Register/OptionRegister";
import TeacherOption from "../Register/TeacherOption";
import StudentOption from "../Register/StudentOption";

export const router =createBrowserRouter([
  {path:'/',element:<MainRegister/>},
  {path:'/register',element:<MainRegister/>},
  {path:'/login',element:<MainLogin/>},
  {path:'/OptionRegister',element:<OptionRegister/>},
  {path:'/TeacherOption',element:<TeacherOption/>},
  {path:'/StudentOption',element:<StudentOption/>},
  
])