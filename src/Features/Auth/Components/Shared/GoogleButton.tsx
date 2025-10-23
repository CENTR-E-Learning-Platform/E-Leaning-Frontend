import google_icon from "../../../../assets/icons/material-icon-theme_google.png";
import { useGoogle } from "../../Hooks/useGoogle";

const GoogleButton = () => {
  const loginWithGoogle = useGoogle();

  return (
    <button
      type="button"
      onClick={loginWithGoogle}
      className="cursor-pointer flex justify-center items-center mt-[8px] text-[#2A2D34] w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px]"
    >
      <img className="w-[17px] me-[5px]" src={google_icon} alt="Google icon" />
      <span className="text-[13px] text-[#2A2D34] font-semibold">
        Continue With Google
      </span>
    </button>
  );
};

export default GoogleButton;
