import facebook_icon from "../../../../assets/icons/logos_facebook.png";
import { useFacebook } from "../../Hooks/useFacebook";

interface FacebookButtonProps {
  onBeforeNavigate?: () => void;
}

const FacebookButton = ({ onBeforeNavigate }: FacebookButtonProps) => {
  const facebook = useFacebook();

  const handleClick = () => {
    if (onBeforeNavigate) {
      onBeforeNavigate();
    } else {
      facebook();
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="cursor-pointer flex justify-center items-center mt-[8px] text-[#2A2D34] w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px]"
    >
      <img className="w-[17px] me-[5px]" src={facebook_icon} alt="Facebook" />
      <p className="text-[13px] text-[#2A2D34] font-semibold">
        Continue With Facebook
      </p>
    </button>
  );
};

export default FacebookButton;
