import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../Services/googleAPI";

export const useGoogle = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const token = tokenResponse.access_token;
        console.log("Google Access Token:", token);

      
        const res = await googleLogin(token);
        console.log("Backend JWT:", res.data);

        
        localStorage.setItem("token", res.data.token);
      } catch (error) {
        console.error("Backend error:", error);
      }
    },
    onError: () => console.error("Google Login Failed"),
  });

  return login;
};
