import { createBrowserRouter } from "react-router-dom";
import { Children, lazy } from "react"; 
import MainRegister from "../Features/Auth/Pages/MainRegister";
import MainLogin from "../Features/Auth/Pages/MainLogin";
import TeacherOption from "../Features/Auth/Components/Register/TeacherOption";
import StudentOption from "../Features/Auth/Components/Register/StudentOption";
import OTP from "../Features/Auth/Components/Log in/OTP";
import ForgetPassword from "../Features/Auth/Components/Log in/ForgetPassword";
import SetNewPassword from "../Features/Auth/Components/Log in/SetNewPassword";
import EmailConfig from "../Features/Auth/Components/Register/EmailConfig";
import MainPayment from "../Features/Payment/Pages/MainPayment";
import DynamicPaymentCard from "../Features/Payment/Components/Payment/DynamicPaymentCard";
import DynamicPaymentMobileWallet from "../Features/Payment/Components/Payment/DynamicPaymentMobileWallet";
import DynamicPaymentMobileWalletconfirm from "../Features/Payment/Components/Payment/DynamicPaymentMobileWalletconfirm";
import LiveRoom from "../Features/Streaming/Pages/LiveRoom";
import CreateRoomTeacher from "../Features/Streaming/Pages/CreateRoomTeacher";
import JoinNow from "../Features/Streaming/Pages/JoinNow";
import ChatForm from "../Features/Streaming/Components/chat/ChatForm";
import JoinRoomStudent from "../Features/Streaming/Pages/JoinRoomStudent";
import GoodBy from "../Features/Streaming/Pages/GoodBye";
import ViewTeacher from "../Features/Profile/Pages/ViewTeacher";
import Navbar from "../Components/Navbar/Navbar";
import MainSetting from "../Features/Setting/Pages/MainSetting";
import ProfileStudent from "../Features/Setting/Components/ProfileStudent/ProfileStudent";
import MainFinancial from "../Features/Setting/Components/Financial/MainFinancial";
import ChangePassword from "../Features/Setting/Components/Security/ChangePassword";
import NotificationsSettings from "../Features/Setting/Components/NotificationsSetting/NotificationsSettings";
import { CLoader } from "../Components/UI/CLoader";
import OptionRegister from "../Features/Auth/Components/Register/OptionRegister";
import { MainStudentHome } from "../Features/Home/Pages/MainStudentHome";
import CreateNewQuiz from "../Features/Quiz/Pages/CreateNewQuiz";
import QuizSetting from "../Features/Quiz/Pages/QuizSetting";
import QuizQuistions from "../Features/Quiz/Pages/QuizQuistions";
import ResultQuiz from "../Features/Quiz/Pages/ResultQuiz";
import StartQuizforStudent from "../Features/Quiz/Pages/StartQuizforStudent";
import { roleToAuth } from "../Utils/Constant";
import DashboardQuiz from "../Features/Quiz/Pages/DashboardQuiz";
const lazyWithDelay = (importFunction: () => Promise<any>, delay: number = 2000) => {
  return lazy(() =>
    Promise.all([
      importFunction(),
      new Promise((resolve) => setTimeout(resolve, delay)), 
    ]).then(([moduleExports]) => moduleExports) 
  );
};
const MainCalendar = lazyWithDelay(() => import("../Features/Calendar/Pages/MainCalendar"));
const MainExplore = lazyWithDelay(() => import("../Features/ExploreTeacher/Pages/MainExplore"));
const MainTeacherHome = lazyWithDelay(() => import("../Features/Home/Pages/MainTeacherHome"));
const MainTeacherMessage = lazyWithDelay(() => import("../Features/Messages/Pages/MainTeacherMessage"));
// const MainStudentHome = lazyWithDelay(() => import("../Features/Home/Pages/MainStudentHome"));


export const router = createBrowserRouter([
  {path: "/explore/TeacherPayment", element: <MainPayment /> , children: [
    {path: "/explore/TeacherPayment/paymentCart", element: <DynamicPaymentCard/>},
    {path: "/explore/TeacherPayment", element: <DynamicPaymentCard/>},
    {path: "/explore/TeacherPayment/mobileWallet", element: <DynamicPaymentMobileWallet/>},
    {path: "/explore/TeacherPayment/mobileWallet/confirm", element:  <DynamicPaymentMobileWalletconfirm/>}
  ]
  },
  

  { path: "/", element: <Navbar/> , children: [
    { path: "OptionRegister", element: <OptionRegister /> },
    // { path: "/meeting", element: <LiveRoom /> },
    { path: "Calendar", element: <MainCalendar/> },
    { path: "explore", element: <MainExplore/> },
    { path: "home", element: <MainStudentHome/> },
    { path: "", element: <MainStudentHome/> },
    { path: "messages", element: <MainTeacherMessage/> },

  ] },

  { path: "/setting", element: <MainSetting/> , children: [
    !roleToAuth?.includes("Teacher") ? {path: "profile", element: <ProfileStudent/>}:{},
    {path: "", element: <ProfileStudent/>},
    roleToAuth?.includes("Teacher") ? {path: "financial", element: <MainFinancial/>} : {},
    {path: "security", element: <ChangePassword/>},
    {path: "notification", element: <NotificationsSettings/>},
  ] },
  { path: "teacher-option", element: <TeacherOption /> },
  { path: "student-option", element: <StudentOption /> },
  { path: "/confing", element: <EmailConfig /> },
  { path: "/createroom", element: <CreateRoomTeacher /> },
  { path: "/createroom/joinnow", element: <JoinNow/> },
  { path: "/createroom/joinnow/meeting", element: <LiveRoom/> },
  { path: "/createroom/joinnow/meeting/chat", element: <ChatForm/> },
  { path: "/createroom/joinStudent", element: <JoinRoomStudent/> },
  { path: "/GoodBy",  element: <GoodBy/> },
  { path: "/auth", element: <OptionRegister /> },
  { path: "register", element: <MainRegister /> },
  { path: "login", element: <MainLogin /> },
  { path: "login/otp", element: <OTP /> },
  { path: "login/SendEmail", element: <ForgetPassword /> },
  { path: "login/SendEmail/otp", element: <OTP /> },
  { path: "login/SendEmail/otp/setNewPassword", element: <SetNewPassword /> },
  { path: "/profile", element: <ViewTeacher/> },
  { path: "/loder", element: <CLoader/> },
  { path: "/quiz", element: <CreateNewQuiz/>  , children:[
    {path: "/quiz/add-questions", element: <QuizQuistions/>},
    {path: "/quiz/quizsetting", element: <QuizSetting/>},
  ]},
  {path: "/quiz/result", element: <ResultQuiz/>},
  {path: "/quiz/start", element: <StartQuizforStudent/>},
  {path: "/quiz/dashboard", element: <DashboardQuiz/>},
]);