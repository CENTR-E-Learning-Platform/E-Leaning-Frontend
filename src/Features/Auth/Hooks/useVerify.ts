import { useRegContext } from "../Contexts/RegContext"
import { VerifyEmail } from "../Services/verifyAPI"
import { VERIFY_API } from "../Utils/api";
export const useVerify = ()=> {
    const {userData} = useRegContext();
  const handleVerify = async () => {
    const params = new URLSearchParams({
      type: "verify",
      email: userData?.email || "",
    });

    try {
      const res = await VerifyEmail(`${VERIFY_API}?${params.toString()}`);
      console.log("Email sent:", res.data);
    } catch (err: any) {
      console.log("error:", err.message);
    }
  };
  return {handleVerify}
}