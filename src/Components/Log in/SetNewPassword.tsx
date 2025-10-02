import image from "../../assets/images/Reset password-pana.png";
import left_arrow from "../../assets/icons/mingcute_left-line.png";
import eye_icon from "../../assets/icons/flowbite_eye-outline.png";
import skip_eye_icon from "../../assets/icons/icons8-eye-24 (1).png";
import password_icon from "../../assets/icons/material-symbols_lock-outline.png";

import { useState } from "react";

const SetNewPassword = () => {
  const [openNewEye, setOpenNewEye] = useState(false);
  const [openConfirmEye, setOpenConfirmEye] = useState(false);

  return (
    <>
      <div className="h-[100vh] flex w-full">
        {/* Left Section */}
        <div className="w-[50%] flex justify-center bg-[#F9FBFC]">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center mb-[11px]">
              <p className="font-bold text-[28px] text-[#2A2D34]">
                Set New password
              </p>
              <p className="text-[#2A2D34] text-[13px]">
                Create your new password
              </p>
            </div>

            <div className="mt-[12px]">
              <form>
                {/* New Password */}
                <div className="flex flex-col relative mt-[5px]">
                  <label
                    htmlFor="newPassword"
                    className="text-[#2A2D34] text-[14px] font-semibold"
                  >
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    className="w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px] pl-[35px] pb-[2px] pr-5 focus:outline-none focus:ring-1 focus:ring-[#2A2D34]"
                    type={openNewEye ? "text" : "password"}
                    placeholder="Your password"
                  />
                  <img
                    src={password_icon}
                    className="absolute left-3 top-[39px] -translate-y-1/2 w-[17px]"
                    alt="Password icon"
                  />
                  <img
                    src={openNewEye ? eye_icon : skip_eye_icon}
                    className="absolute left-[350px] cursor-pointer top-[39px] -translate-y-1/2 w-[17px]"
                    alt="Toggle visibility"
                    onClick={() => setOpenNewEye(!openNewEye)}
                  />
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col relative mt-[5px]">
                  <label
                    htmlFor="confirmPassword"
                    className="text-[#2A2D34] text-[14px] font-semibold"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    className="w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px] pl-[35px] pb-[2px] pr-5 focus:outline-none focus:ring-1 focus:ring-[#2A2D34]"
                    type={openConfirmEye ? "text" : "password"}
                    placeholder="Your password"
                  />
                  <img
                    src={password_icon}
                    className="absolute left-3 top-[39px] -translate-y-1/2 w-[17px]"
                    alt="Password icon"
                  />
                  <img
                    src={openConfirmEye ? eye_icon : skip_eye_icon}
                    className="absolute left-[350px] cursor-pointer top-[39px] -translate-y-1/2 w-[17px]"
                    alt="Toggle visibility"
                    onClick={() => setOpenConfirmEye(!openConfirmEye)}
                  />
                </div>

                {/* Submit Button */}
                <button
                  className="font-semibold text-[#F9FBFC] cursor-pointer text-[14px] w-[379px] h-[36px] bg-[#525FE1] rounded-[4px] mt-[13px]"
                  type="submit"
                >
                  Reset password
                </button>
              </form>

              {/* Back to Login */}
              <div className="cursor-pointer flex justify-center items-center mt-[9px] text-[#2A2D34] w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px]">
                <img className="w-[17px] me-[5px]" src={left_arrow} alt="" />
                <p className="text-[13px] text-[#525FE1] font-semibold">
                  Back to log in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          style={{
            background: "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",
          }}
          className="w-[50%] flex justify-center items-center"
        >
          <img className="w-[450px]" src={image} alt="Reset password illustration" />
        </div>
      </div>
    </>
  );
};

export default SetNewPassword;
