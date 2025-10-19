import facebook_icon from '../../../../assets/icons/logos_facebook.png';
const FacebookButton = () => {
        return(
            <button
              type="button"
              className="cursor-pointer flex justify-center items-center mt-[8px] text-[#2A2D34] w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px]"
            >
              <img className="w-[17px] me-[5px]" src={facebook_icon} alt="Facebook" />
              <p className="text-[13px] text-[#2A2D34] font-semibold">
                Continue With Facebook
              </p>
            </button> 
        );
}

export default FacebookButton;
