import { useRegContext } from "../Contexts/RegContext";
import { EXTERNAL_LOGIN_API } from "../Utils/api";
export const useFacebook = () => {
  const { role, educationLevelOrSubject } = useRegContext();

  const facebook = () => {
    const data = {
      returnURL: "https://localhost:7251/OptionRegister",
      Role: role ?? "student",
      Provider: "Facebook",
      GradeOrSubject: educationLevelOrSubject ?? "",
    };

    const params = new URLSearchParams({
      returnURL: data.returnURL,
      Role: data.Role,
      Provider: data.Provider,
      GradeOrSubject: data.GradeOrSubject,
    });

    window.location.href = `${EXTERNAL_LOGIN_API}?${params.toString()}`;
  };

  return facebook;
};
