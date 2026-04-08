import { useState } from "react";
import eye_icon from "../../../../assets/icons/flowbite_eye-outline.png";
import skip_eye_icon from "../../../../assets/icons/icons8-eye-24 (1).png";
import password_icon from "../../../../assets/icons/material-symbols_lock-outline.png";
import { useChangePassword } from "../../Hooks/useChangePassword";

const ChangePassword = () => {
  const [openNewEye, setOpenNewEye] = useState([false, false, false]);
  const formik = useChangePassword();

  return (
    <>
      <section className="ChangePassword-section">
        <div className="w-[570px] text-[#2A2D34] border border-[#E8EAED] rounded-[8px] bg-[#FFFFFF] p-7">
          <h2 className="text-[22px] font-semibold leading-[13px] mb-7">
            Change Password
          </h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col relative mt-[4px]">
              <label
                htmlFor="currentPassword"
                className="text-[#2A2D34] text-[15px] font-normal"
              >
                Current password
              </label>
              <input
                id="currentPassword"
                className={`w-[513px] h-[46px] rounded-[8px] pl-[35px] pr-10 border-2 border-[#D1D5DB] focus:outline-none ${
                  formik.touched.currentPassword &&
                  formik.errors.currentPassword
                    ? "border-red-600"
                    : formik.touched.currentPassword &&
                      formik.errors.currentPassword
                    ? "border-[#525FE1]"
                    : "border-[#6D7588]"
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.currentPassword}
                type={openNewEye[0] ? "text" : "password"}
                placeholder="Current password"
              />
              <img
                src={password_icon}
                className="absolute left-2.5 top-[45px] -translate-y-1/2 w-[22px]"
                alt="Password icon"
              />
              <img
                src={openNewEye[0] ? eye_icon : skip_eye_icon}
                className="absolute left-[475px] cursor-pointer top-[45px] -translate-y-1/2 w-[22px]"
                alt="Toggle visibility"
                onClick={() =>
                  setOpenNewEye([!openNewEye[0], openNewEye[1], openNewEye[2]])
                }
              />
              {formik.touched.currentPassword &&
                formik.errors.currentPassword && (
                  <p className="text-red-600 text-[11px]">
                    {formik.errors.currentPassword}
                  </p>
                )}
            </div>

            <div className="flex flex-col relative mt-[4px]">
              <label
                htmlFor="newPassword"
                className="text-[#2A2D34] text-[15px] font-normal"
              >
                New password
              </label>
              <input
                id="newPassword"
                className={`w-[513px] h-[46px] rounded-[8px] pl-[35px] pr-10 border-2 border-[#D1D5DB] focus:outline-none ${
                  formik.touched.newPassword && formik.errors.newPassword
                    ? "border-red-600"
                    : formik.touched.newPassword && formik.errors.newPassword
                    ? "border-[#525FE1]"
                    : "border-[#6D7588]"
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
                type={openNewEye[1] ? "text" : "password"}
                placeholder="New password"
              />
              <img
                src={password_icon}
                className="absolute left-2.5 top-[45px] -translate-y-1/2 w-[22px]"
                alt="Password icon"
              />
              <img
                src={openNewEye[1] ? eye_icon : skip_eye_icon}
                className="absolute left-[475px] cursor-pointer top-[45px] -translate-y-1/2 w-[22px]"
                alt="Toggle visibility"
                onClick={() =>
                  setOpenNewEye([openNewEye[0], !openNewEye[1], openNewEye[2]])
                }
              />
              {formik.touched.newPassword && formik.errors.newPassword && (
                <p className="text-red-600 text-[11px]">
                  {formik.errors.newPassword}
                </p>
              )}
            </div>

            <div className="flex flex-col relative mt-[4px]">
              <label
                htmlFor="confirmPassword"
                className="text-[#2A2D34] text-[15px] font-normal"
              >
                Confirm password
              </label>
              <input
                id="confirmPassword"
                className={`w-[513px] h-[46px] rounded-[8px] pl-[35px] pr-10 border-2 border-[#D1D5DB] focus:outline-none ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "border-red-600"
                    : formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    ? "border-[#525FE1]"
                    : "border-[#6D7588]"
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                type={openNewEye[2] ? "text" : "password"}
                placeholder="Confirm password"
              />
              <img
                src={password_icon}
                className="absolute left-2.5 top-[45px] -translate-y-1/2 w-[22px]"
                alt="Password icon"
              />
              <img
                src={openNewEye[2] ? eye_icon : skip_eye_icon}
                className="absolute left-[475px] cursor-pointer top-[45px] -translate-y-1/2 w-[22px]"
                alt="Toggle visibility"
                onClick={() =>
                  setOpenNewEye([openNewEye[0], openNewEye[1], !openNewEye[2]])
                }
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="text-red-600 text-[11px]">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>

            <button
              className="font-bold text-[#F9FBFC] leading-[13px] cursor-pointer text-[15px] w-[513px] h-[46px] bg-[#525FE1] rounded-[8px] mt-[14px]"
              type="submit"
            >
              Update Password
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;