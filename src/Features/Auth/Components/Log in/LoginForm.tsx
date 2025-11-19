import { CircleUserRound, LockKeyhole } from "lucide-react";
import { assetsIconsLinks } from "../../Utils/utils";
import { useState } from "react";
import GoogleButton from "../Shared/GoogleButton";
import FacebookButton from "../Shared/FacebookButton";
import { useLogin } from "../../Hooks/useLogin";
import { useSendEmail } from "../../Hooks/useforgetpasswordAndSendemail";
const LoginForm = () => {
  const [openEye, setOpenEye] = useState(false);
  const formik = useLogin();
  const {ClickSendEmail} = useSendEmail();
  return (
    <>
      <section className="mt-[12px]">
        <form onSubmit={formik.handleSubmit}>
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
              className={`w-[379px] h-[36px] rounded-[4px] pl-[35px] pr-5 border-[1px] focus:outline-none ${
              formik.touched.email && formik.errors.email
                ? "border-red-600"
                : formik.touched.email && formik.errors.email
                ? "border-[#525FE1]"
                : "border-[#6D7588]"
              }`}
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Your email"
            />
            <CircleUserRound className="absolute left-[10px] top-[27px] w-[17px] text-[#2A2D34] " />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-600 text-[12px]">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col relative mt-[5px]">
            <label
              htmlFor="password"
              className="flex justify-between text-[#2A2D34] text-[14px] font-semibold"
            >
              Password
              <button
                type="button"
                onClick={() => ClickSendEmail()}
                className="text-[#525FE1] underline cursor-pointer text-[13px]"
              >
                Forget password?
              </button>
            </label>
            <input
              id="password"
              name="password"
              className={`w-[379px] h-[36px] rounded-[4px] pl-[35px] pr-5 border-[1px] focus:outline-none ${
              formik.touched.password && formik.errors.password
                ? "border-red-600"
                : formik.touched.password && formik.errors.password
                ? "border-[#525FE1]"
                : "border-[#6D7588]"
              }`}
              type={openEye ? "text" : "password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Your password"
            />
            <LockKeyhole className="absolute left-[10px] top-[27px] w-[17px] text-[#2A2D34]" />
            <img
              src={
                openEye
                  ? assetsIconsLinks.eye_icon
                  : assetsIconsLinks.skip_eye_icon
              }
              className="absolute left-[350px] cursor-pointer top-[39px] -translate-y-1/2 w-[17px]"
              alt="Toggle password visibility"
              onClick={() => setOpenEye(!openEye)}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-600 text-[12px]">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Remember me */}
          <div className="mt-[8px] items-center flex">
            <input
              id="remember"
              className="w-[16px] h-[16px]"
              style={{accentColor:"#525FE1"}}
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
            disabled={formik.isSubmitting}
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
        <GoogleButton />
        <FacebookButton/>
      </section>
    </>
  );
};
export default LoginForm;
