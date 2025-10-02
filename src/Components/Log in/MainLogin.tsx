import image from "../../assets/images/Online learning-amico 1.png";
import name_icon from "../../assets/icons/ix_user-profile.png";
import password_icon from "../../assets/icons/material-symbols_lock-outline.png";
import eye_icon from "../../assets/icons/flowbite_eye-outline.png";
import skip_eye_icon from "../../assets/icons/icons8-eye-24 (1).png";
import google_icon from "../../assets/icons/material-icon-theme_google.png";
import facebook_icon from "../../assets/icons/logos_facebook.png";

import { useState } from "react";

const MainLogin = () => {
  const [openEye, setOpenEye] = useState(false);

  return (
    <main className="h-[100vh] flex w-full">
      <section className="w-[50%] flex justify-center bg-[#F9FBFC]">
        <article className="flex flex-col items-center justify-center">
          <header className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-[28px] text-[#2A2D34] mb-[16px]">
              Welcome back!
            </h1>
            <nav className="flex bg-[#FFFFFF] border-[1px] border-[#6D7588] rounded-[4px] w-[379px] h-[37px] p-[2px]">
              <button
                className="w-[50%] bg-[#DCDFF9] rounded-[4px] text-[12px] font-bold text-[#525FE1] cursor-pointer"
                type="button"
              >
                Log in
              </button>
              <button
                className="w-[50%] text-[12px] font-bold text-[#2A2D34] cursor-pointer"
                type="button"
              >
                Sign up
              </button>
            </nav>
          </header>

          {/* Login Form */}
          <section className="mt-[12px]">
            <form>
              {/* Email */}
              <div className="flex flex-col relative">
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
                  src={name_icon}
                  className="absolute left-3 top-[39px] -translate-y-1/2 w-[17px]"
                  alt="User icon"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col relative mt-[5px]">
                <label
                  htmlFor="password"
                  className="flex justify-between text-[#2A2D34] text-[14px] font-semibold"
                >
                  Password
                  <a
                    href="#"
                    className="text-[#525FE1] underline cursor-pointer text-[13px]"
                  >
                    Forget password?
                  </a>
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
                  alt="Toggle password visibility"
                  onClick={() => setOpenEye(!openEye)}
                />
              </div>

              {/* Remember me */}
              <div className="mt-[8px] items-center flex">
                <input
                  id="remember"
                  className="w-[16px] h-[16px]"
                  type="checkbox"
                />
                <label
                  htmlFor="remember"
                  className="text-[#2A2D34] text-[12px] ms-[2px]"
                >
                  Remember me
                </label>
              </div>

              {/* Submit */}
              <button
                className="font-semibold text-[#F9FBFC] cursor-pointer text-[14px] w-[379px] h-[36px] bg-[#525FE1] rounded-[4px] mt-[13px]"
                type="submit"
              >
                Log in
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center w-[375px] mt-[13px]">
              <div className="flex-grow border-t border-[#6D7588]"></div>
              <span className="px-3 text-[#2A2D34] text-[14px]">Or</span>
              <div className="flex-grow border-t border-[#6D7588]"></div>
            </div>

            {/* Social Logins */}
            <button
              type="button"
              className="cursor-pointer flex justify-center items-center mt-[8px] text-[#2A2D34] w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px]"
            >
              <img className="w-[17px] me-[5px]" src={google_icon} alt="Google" />
              <p className="text-[13px] text-[#2A2D34] font-semibold">
                Continue With Google
              </p>
            </button>

            <button
              type="button"
              className="cursor-pointer flex justify-center items-center mt-[8px] text-[#2A2D34] w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px]"
            >
              <img className="w-[17px] me-[5px]" src={facebook_icon} alt="Facebook" />
              <p className="text-[13px] text-[#2A2D34] font-semibold">
                Continue With Facebook
              </p>
            </button>
          </section>
        </article>
      </section>

      <aside
        style={{
          background: "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",
        }}
        className="w-[50%] flex justify-center items-center"
      >
        <img className="w-[450px]" src={image} alt="Login illustration" />
      </aside>
    </main>
  );
};

export default MainLogin;
