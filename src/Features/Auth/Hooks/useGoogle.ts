import { useRegContext } from "../Contexts/RegContext";
import {EXTERNAL_LOGIN_API} from '../Utils/api';
export const useGoogle = () => {
  const { role, educationLevelOrSubject } = useRegContext();

  const login = () => {
    const data = {
      returnURL: `https://localhost:7251/OptionRegister`,
      Role: role ?? "student",
      Provider: "Google",
      GradeOrSubject: educationLevelOrSubject ?? "",
    };


    const params = new URLSearchParams({
      returnURL: data.returnURL,
      Role: data.Role,
      Provider: data.Provider,
      GradeOrSubject : data.GradeOrSubject
    });

  
    window.location.href = `${EXTERNAL_LOGIN_API}?${params.toString()}`;
  };

  return login;
};
