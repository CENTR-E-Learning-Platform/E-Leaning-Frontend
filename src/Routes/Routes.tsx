import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import LandingPage from "../Features/LandingPage/Pages/LandingPage";
import MainRegister from "../Features/Auth/Pages/MainRegister";
import MainLogin from "../Features/Auth/Pages/MainLogin";
import TeacherOption from "../Features/Auth/Components/Register/TeacherOption";
import StudentOption from "../Features/Auth/Components/Register/StudentOption";
import OTP from "../Features/Auth/Components/Log in/OTP";
import ForgetPassword from "../Features/Auth/Components/Log in/ForgetPassword";
import SetNewPassword from "../Features/Auth/Components/Log in/SetNewPassword";
import EmailConfig from "../Features/Auth/Components/Register/EmailConfig";
import DynamicPaymentCard from "../Features/Payment/Components/Payment/DynamicPaymentCard";
import DynamicPaymentMobileWallet from "../Features/Payment/Components/Payment/DynamicPaymentMobileWallet";
import DynamicPaymentMobileWalletconfirm from "../Features/Payment/Components/Payment/DynamicPaymentMobileWalletconfirm";
import LiveRoom from "../Features/Streaming/Pages/LiveRoom";
import CreateRoomTeacher from "../Features/Streaming/Pages/CreateRoomTeacher";
import JoinNow from "../Features/Streaming/Pages/JoinNow";
import ChatForm from "../Features/Streaming/Components/chat/ChatForm";
import JoinRoomStudent from "../Features/Streaming/Pages/JoinRoomStudent";
import GoodBy from "../Features/Streaming/Pages/GoodBye";
import Navbar from "../Components/Navbar/Navbar";
import ProfileStudent from "../Features/Setting/Components/ProfileStudent/ProfileStudent";
import MainFinancial from "../Features/Setting/Components/Financial/MainFinancial";
import ChangePassword from "../Features/Setting/Components/Security/ChangePassword";
import NotificationsSettings from "../Features/Setting/Components/NotificationsSetting/NotificationsSettings";
import { CLoader } from "../Components/UI/CLoader";
import OptionRegister from "../Features/Auth/Components/Register/OptionRegister";
import { MainStudentHome } from "../Features/Home/Pages/MainStudentHome";
import QuizQuistions from "../Features/Quiz/Pages/QuizQuistions";
import ResultQuiz from "../Features/Quiz/Pages/ResultQuiz";
import StartQuizforStudent from "../Features/Quiz/Pages/StartQuizforStudent";
import { roleToAuth } from "../Utils/Constant";
import DashboardQuiz from "../Features/Quiz/Pages/DashboardQuiz";
import NotificationsPage from "../Features/Notification/Pages/NotificationsPage";
import ViewStudent from "../Features/Profile/Pages/ViewStudent";
import VerifyHandler from "../Features/Auth/Components/Register/VerifyHandler";
const lazyWithDelay = (importFunction: () => Promise<any>, delay: number = 2000) => {
  return lazy(() =>
    Promise.all([
      importFunction(),
      new Promise((resolve) => setTimeout(resolve, delay)),
    ]).then(([moduleExports]) => moduleExports)
  );
};
const Loadable = (Component: any) => (props: any) => (
  <Suspense fallback={<div className="flex justify-center items-center h-screen">
    <CLoader />
  </div>}>
    <Component {...props} />
  </Suspense>
);
const MainCalendar = (lazyWithDelay(() => import("../Features/Calendar/Pages/MainCalendar")));
const MainExplore = (lazyWithDelay(() => import("../Features/ExploreTeacher/Pages/MainExplore")));
const MainTeacherHome = (lazyWithDelay(() => import("../Features/Home/Pages/MainTeacherHome")));
const MainMessage = (lazyWithDelay(() => import("../Features/Messages/Pages/MainMessage")));
const QuizSetting = (lazyWithDelay(() => import("../Features/Quiz/Pages/QuizSetting")));
const CreateNewQuiz = Loadable(lazyWithDelay(() => import("../Features/Quiz/Pages/CreateNewQuiz")));
const MainSetting = Loadable(lazyWithDelay(() => import("../Features/Setting/Pages/MainSetting")));
const ViewTeacher = Loadable(lazyWithDelay(() => import("../Features/Profile/Pages/ViewTeacher")));
const DynamicPaymewantMobileWallet = Loadable(lazyWithDelay(() => import("../Features/Payment/Components/Payment/DynamicPaymentMobileWallet")));
const MainPayment = Loadable(lazyWithDelay(() => import("../Features/Payment/Pages/MainPayment")));
// const MainStudentHome = Loadable(lazyWithDelay(() => import("../Features/Home/Pages/MainStudentHome")));

const isTeacher = roleToAuth?.includes("Teacher") ? true : false;
const isAuthenticated = !!localStorage.getItem("token");

export const router = createBrowserRouter([
  { path: "/landing", element: <LandingPage /> },

  {
    path: "/payment", element: <MainPayment />, children: [
      { path: "/payment/paymentCart", element: <DynamicPaymentCard /> },
      { path: "/payment", element: <DynamicPaymentCard /> },
      { path: "/payment/mobileWallet", element: <DynamicPaymentMobileWallet /> },
      { path: "/payment/mobileWallet/confirm", element: <DynamicPaymentMobileWalletconfirm /> }
    ]
  },


  {
    path: "/", element: isAuthenticated ? <Navbar /> : <LandingPage />, children: isAuthenticated ? [
      { path: "OptionRegister", element: <OptionRegister /> },
      // { path: "/meeting", element: <LiveRoom /> },
      { path: "Calendar", element: <MainCalendar /> },
      !isTeacher ? { path: "explore", element: <MainExplore /> } : {},
      { path: "home", element: isTeacher ? <MainTeacherHome /> : <MainStudentHome /> },
      { path: "", element: isTeacher ? <MainTeacherHome /> : <MainStudentHome /> },
      { path: "messages", element: <MainMessage /> },
      { path: "notifications", element: <NotificationsPage /> },
    ] : [],
  },

  {
    path: "/setting", element: <MainSetting />, children: [
      !isTeacher ? { path: "profile", element: <ProfileStudent /> } : {},
      { path: "", element: <ProfileStudent /> },
      isTeacher ? { path: "financial", element: <MainFinancial /> } : {},
      { path: "security", element: <ChangePassword /> },
      { path: "notification", element: <NotificationsSettings /> },

    ]
  },
  !isTeacher ? { path: "wallet", element: <DynamicPaymewantMobileWallet /> } : {},
  { path: "teacher-option", element: <TeacherOption /> },
  { path: "student-option", element: <StudentOption /> },
  { path: "/confing", element: <EmailConfig /> },
  { path: "/createroom", element: <CreateRoomTeacher /> },
  { path: "/createroom/joinnow", element: <JoinNow /> },
  { path: "/createroom/joinnow/meeting", element: <LiveRoom /> },
  { path: "/createroom/joinnow/meeting/chat", element: <ChatForm /> },
  { path: "/createroom/joinStudent", element: <JoinRoomStudent /> },
  { path: "/GoodBy", element: <GoodBy /> },
  { path: "/auth", element: <OptionRegister /> },
  { path: "register", element: <MainRegister /> },
  { path: "login", element: <MainLogin /> },
  { path: "login/otp", element: <OTP /> },
  { path: "login/SendEmail", element: <ForgetPassword /> },
  { path: "login/SendEmail/otp", element: <OTP /> },
  { path: "login/SendEmail/otp/setNewPassword", element: <SetNewPassword /> },
  {path: "/profile/view-student", element: <ViewStudent /> },
  { path: "/profile", element: <ViewTeacher /> },
  { path: "/loder", element: <CLoader /> },
  {
    path: "/quiz", element: <CreateNewQuiz />, children: [
      { path: "/quiz/add-questions", element: <QuizQuistions /> },
      { path: "/quiz/quizsetting", element: <QuizSetting /> },
    ]
  },
  { path: "/quiz/result", element: <ResultQuiz /> },
  { path: "/quiz/:quizId", element: <StartQuizforStudent /> },
  { path: "/quiz/dashboard/:quizId", element: <DashboardQuiz /> },
  { path: "/emailconfirmation", element: <EmailConfig/> },
  { path: "/verify", element: <VerifyHandler/> },
  { path: "verify", element: <VerifyHandler/> },
]);