import image from "../../assets/images/Online learning-amico 1.png";
import name_icon from "../../assets/icons/ix_user-profile.png";
import email_icon from "../../assets/icons/ic_outline-email.png";
import password_icon from "../../assets/icons/material-symbols_lock-outline.png";
import eye_icon from "../../assets/icons/flowbite_eye-outline.png";
import skip_eye_icon from "../../assets/icons/icons8-eye-24 (1).png";
import google_icon from "../../assets/icons/material-icon-theme_google.png";

import { useState } from "react";

const MainRegister = () => {
  const [openEye, setOpenEye] = useState(false);

  return (
    <main className="h-[100vh] flex w-full">
      <section className="w-[50%] flex justify-center bg-[#F9FBFC]">
        <div className="flex flex-col items-center justify-center">
          <header className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-[28px] text-[#2A2D34] mb-[16px]">
              Create New Account
            </h1>
            <nav
              aria-label="Auth switch"
              className="flex bg-[#FFFFFF] border-[1px] border-[#6D7588] rounded-[4px] w-[379px] h-[37px] p-[2px]"
            >
              <button
                type="button"
                className="w-[50%] text-[12px] font-bold text-[#2A2D34] cursor-pointer"
              >
                Log in
              </button>
              <button
                type="button"
                className="w-[50%] bg-[#DCDFF9] rounded-[4px] text-[12px] font-bold text-[#525FE1] cursor-pointer"
              >
                Sign up
              </button>
            </nav>
          </header>

          <div className="mt-[12px]">
            <form>
              {/* Name */}
              <div className="flex flex-col relative">
                <label
                  htmlFor="name"
                  className="text-[#2A2D34] text-[14px] font-semibold"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px] pl-[35px] pb-[2px] pr-5 focus:outline-none focus:ring-1 focus:ring-[#2A2D34]"
                  type="text"
                  placeholder="Your name"
                  required
                />
                <img
                  src={name_icon}
                  className="absolute left-3 top-[39px] -translate-y-1/2 w-[17px]"
                  alt="Name icon"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col relative mt-[5px]">
                <label
                  htmlFor="email"
                  className="text-[#2A2D34] text-[14px] font-semibold"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px] pl-[35px] pb-[2px] pr-5 focus:outline-none focus:ring-1 focus:ring-[#2A2D34]"
                  type="email"
                  placeholder="Your email"
                  required
                />
                <img
                  src={email_icon}
                  className="absolute left-3 top-[39px] -translate-y-1/2 w-[17px]"
                  alt="Email icon"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col relative mt-[5px]">
                <label
                  htmlFor="password"
                  className="text-[#2A2D34] text-[14px] font-semibold"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  className="w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px] pl-[35px] pb-[2px] pr-5 focus:outline-none focus:ring-1 focus:ring-[#2A2D34]"
                  type={openEye ? "text" : "password"}
                  placeholder="Your password"
                  required
                />
                <img
                  src={password_icon}
                  className="absolute left-3 top-[39px] -translate-y-1/2 w-[17px]"
                  alt="Password icon"
                />
                <img
                  src={openEye ? eye_icon : skip_eye_icon}
                  className="absolute left-[350px] cursor-pointer top-[39px] -translate-y-1/2 w-[17px]"
                  alt={openEye ? "Hide password" : "Show password"}
                  onClick={() => setOpenEye(!openEye)}
                />
              </div>

              {/* Submit */}
              <button
                className="font-semibold text-[#F9FBFC] cursor-pointer text-[14px] w-[379px] h-[36px] bg-[#525FE1] rounded-[4px] mt-[13px]"
                type="submit"
              >
                Continue
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center w-[375px] mt-[13px]">
              <div className="flex-grow border-t border-[#6D7588]"></div>
              <span className="px-3 text-[#2A2D34] text-[14px]">Or</span>
              <div className="flex-grow border-t border-[#6D7588]"></div>
            </div>

            {/* Google button */}
            <button
              type="button"
              className="cursor-pointer flex justify-center items-center mt-[8px] text-[#2A2D34] w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px]"
            >
              <img
                className="w-[17px] me-[5px]"
                src={google_icon}
                alt="Google icon"
              />
              <span className="text-[13px] text-[#2A2D34] font-semibold">
                Continue With Google
              </span>
            </button>
          </div>
        </div>
      </section>

      <aside
        style={{
          background: "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",
        }}
        className="w-[50%] flex justify-center items-center"
      >
        <img
          className="w-[450px]"
          src={image}
          alt="Online learning illustration"
        />
      </aside>
    </main>
  );
};

export default MainRegister;
