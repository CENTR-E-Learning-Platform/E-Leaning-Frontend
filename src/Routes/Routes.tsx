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
import MainPayment from "../Features/Payment/Pages/MainPayment";
import DynamicPaymentCard from "../Features/Payment/Components/Payment/DynamicPaymentCard";
import DynamicPaymentMobileWallet from "../Features/Payment/Components/Payment/DynamicPaymentMobileWallet";
import DynamicPaymentMobileWalletconfirm from "../Features/Payment/Components/Payment/DynamicPaymentMobileWalletconfirm";
import Meeting from "../Features/Streaming/Pages/Meeting";
import LiveRoom from "../Features/Streaming/Pages/LiveRoom";
import CreateRoomTeacher from "../Features/Streaming/Pages/CreateRoomTeacher";
import JoinNow from "../Features/Streaming/Pages/JoinNow";
import ChatForm from "../Features/Streaming/Components/chat/ChatForm";
import JoinRoomStudent from "../Features/Streaming/Pages/JoinRoomStudent";
import MainCalendar from "../Features/Calendar/Pages/MainCalendar";
import GoodBy from "../Features/Streaming/Pages/GoodBye";
import NotifyRaiseHand from "../Features/Streaming/Components/meeting/NotifyRaiseHand";
import MainExplore from "../Features/ExploreTeacher/Pages/MainExplore";
import ViewTeacher from "../Features/Profile/Pages/ViewTeacher";
import Navbar from "../Components/Navbar/Navbar";
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
  { path: "/explore", element: <MainExplore/> },

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

]);
