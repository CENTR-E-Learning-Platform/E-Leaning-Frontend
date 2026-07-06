import { useSearchParams } from "react-router-dom";
import VerifySuccess from "./VerifySuccess"; 
import VerifyFail from "./VerifyFail";      

const VerifyHandler = () => {
  const [searchParams] = useSearchParams(); 
  const isConfirmed = searchParams.get("emailConfirmed") === "success";


  return !isConfirmed ?  <VerifyFail /> :<VerifySuccess />; 
};

export default VerifyHandler;