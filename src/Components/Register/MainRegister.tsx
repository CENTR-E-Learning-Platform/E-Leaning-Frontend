import image from "../../assets/images/Online learning-amico 1.png";
import eye_icon from "../../assets/icons/flowbite_eye-outline.png";
import skip_eye_icon from "../../assets/icons/icons8-eye-24 (1).png";
import google_icon from "../../assets/icons/material-icon-theme_google.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegContext } from "../Contexts/RegContext";
import { CircleUserRound, LockKeyhole, Mail } from "lucide-react";

const handelValidation = Yup.object({
  fullName: Yup.string()
    .required("Name must be Required")
    .min(3, "Name at least 3 characters")
    .max(50, "Name must be at most 50 characters"),
  email: Yup.string()
    .required("Email must be Required")
    .email("Email is invalid"),
  password: Yup.string()
    .required("Password must be Required")
    .min(8, "Password at least 8 characters")
    .max(25, "Password must be at most 25 characters"),
});

const MainRegister = () => {
  const [openEye, setOpenEye] = useState(false);
  const { setUserData } = useRegContext();
  const NavigateOptionRegister = useNavigate();

  const intialData = {
    email: "",
    fullName: "",
    password: "",
  };
  function onsubmit(values: typeof intialData) {
    console.log("Form data", values);
    setUserData(values);
    NavigateOptionRegister("/OptionRegister");
  }
  const formik = useFormik({
    initialValues: intialData,
    onSubmit: onsubmit,
    validationSchema: handelValidation,
  });

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
              <NavLink
                to={"/login"}
                className="w-[50%] flex justify-center items-center text-[12px] font-bold text-[#2A2D34] cursor-pointer"
              >
                Log in
              </NavLink>
              <NavLink
                to={"/register"}
                className="w-[50%] flex justify-center items-center bg-[#DCDFF9] rounded-[4px] text-[12px] font-bold text-[#525FE1] cursor-pointer"
              >
                Sign up
              </NavLink>
            </nav>
          </header>

          <div className="mt-[12px]">
            <form onSubmit={formik.handleSubmit}>
              {/* Name */}
              <div className="flex flex-col relative">
                <label
                  htmlFor="fullName"
                  className="text-[#2A2D34] text-[14px] font-semibold"
                >
                  Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  className={`w-[379px] h-[36px] rounded-[4px] pl-[35px] pb-[2px] pr-5 focus:outline-none focus:ring-1 transition-all duration-200
                    ${
                      formik.touched.fullName && formik.errors.fullName
                        ? "border-red-600 border-[1px] focus:ring-red-500"
                        : formik.touched.fullName && !formik.errors.fullName
                        ? "border-[#525FE1] border-[1px] focus:ring-[#525FE1]"
                        : "border-[#6D7588] border-[1px] focus:ring-[#2A2D34]"
                    }`}
                  type="text"
                  placeholder="Your name"
                />
                <CircleUserRound
                  className={
                    formik.errors.fullName && formik.touched.fullName
                      ? "absolute left-3 top-[39px] -translate-y-1/2 w-[17px] text-red-600"
                      : formik.touched.fullName && !formik.errors.fullName
                      ? "absolute left-3 top-[39px] -translate-y-1/2 w-[17px] text-[#525FE1]"
                      : "absolute left-3 top-[39px] -translate-y-1/2 w-[17px] text-[#2A2D34]"
                  }
                />

                {formik.errors.fullName && formik.touched.fullName ? (
                  <div className="">
                    <p className="text-red-600"> {formik.errors.fullName} </p>
                  </div>
                ) : (
                  ""
                )}
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
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className={`w-[379px] h-[36px] rounded-[4px] pl-[35px] pb-[2px] pr-5 focus:outline-none focus:ring-1 transition-all duration-200
                    ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-600 border-[1px] focus:ring-red-500"
                        : formik.touched.email && !formik.errors.email
                        ? "border-[#525FE1] border-[1px] focus:ring-[#525FE1]"
                        : "border-[#6D7588] border-[1px] focus:ring-[#2A2D34]"
                    }`}
                  type="email"
                  placeholder="Your email"
                />
                <Mail
                  className={
                    formik.errors.email && formik.touched.email
                      ? "absolute left-3 top-[39px] -translate-y-1/2 w-[17px] text-red-600"
                      : formik.touched.email && !formik.errors.email
                      ? "absolute left-3 top-[39px] -translate-y-1/2 w-[17px] text-[#525FE1]"
                      : "absolute left-3 top-[39px] -translate-y-1/2 w-[17px] text-[#2A2D34]"
                  }
                />

                {formik.errors.email && formik.touched.email ? (
                  <div className="">
                    <p className="text-red-600"> {formik.errors.email} </p>
                  </div>
                ) : (
                  ""
                )}
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
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className={`w-[379px] h-[36px] rounded-[4px] pl-[35px] pb-[2px] pr-5 focus:outline-none focus:ring-1 transition-all duration-200
                    ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-600 border-[1px] focus:ring-red-500"
                        : formik.touched.password && !formik.errors.password
                        ? "border-[#525FE1] border-[1px] focus:ring-[#525FE1]"
                        : "border-[#6D7588] border-[1px] focus:ring-[#2A2D34]"
                    }`}
                  type={openEye ? "text" : "password"}
                  placeholder="Your password"
                />
                <LockKeyhole
                  className={
                    formik.errors.password && formik.touched.password
                      ? "absolute left-3 top-[39px] -translate-y-1/2 w-[17px] text-red-600"
                      : formik.touched.password && !formik.errors.password
                      ? "absolute left-3 top-[39px] -translate-y-1/2 w-[17px] text-[#525FE1]"
                      : "absolute left-3 top-[39px] -translate-y-1/2 w-[17px] text-[#2A2D34]"
                  }
                />

                <img
                  src={openEye ? eye_icon : skip_eye_icon}
                  className="absolute left-[350px] cursor-pointer top-[39px] -translate-y-1/2 w-[17px]"
                  alt={openEye ? "Hide password" : "Show password"}
                  onClick={() => setOpenEye(!openEye)}
                />

                {formik.errors.password && formik.touched.password ? (
                  <div className="">
                    <p className="text-red-600"> {formik.errors.password} </p>
                  </div>
                ) : (
                  ""
                )}
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
