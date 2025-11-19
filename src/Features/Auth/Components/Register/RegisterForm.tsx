// src/features/auth/components/RegisterForm.tsx
import { CircleUserRound, Mail } from "lucide-react";
import PasswordInput from "./PasswordInput ";
import GoogleButton from "../Shared/GoogleButton";
import { useRegister } from "../../Hooks/useRegister";

const RegisterForm = () => {
  const formik = useRegister();
  
  
  return (
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          placeholder="Your name"
          className={`w-[379px] h-[36px] rounded-[4px] pl-[35px] pr-5 border-[1px] focus:outline-none ${
            formik.touched.fullName && formik.errors.fullName
              ? "border-red-600"
              : formik.touched.fullName && formik.errors.fullName
              ? "border-[#525FE1]"
              : "border-[#6D7588]"
          }`}
        />
        <CircleUserRound className="absolute left-[10px] top-[27px] w-[17px] text-[#2A2D34]" />
        {formik.touched.fullName && formik.errors.fullName && (
          <p className="text-red-600 text-[12px]">{formik.errors.fullName}</p>
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Your email"
          className={`w-[379px] h-[36px] rounded-[4px] pl-[35px] pr-5 border-[1px] focus:outline-none ${
            formik.touched.email && formik.errors.email
              ? "border-red-600"
              : formik.touched.email && formik.errors.email
              ? "border-[#525FE1]"
              : "border-[#6D7588]"
          }`}
        />
        <Mail className="absolute left-[10px] top-[27px] w-[17px] text-[#2A2D34]" />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-600 text-[12px]">{formik.errors.email}</p>
        )}
      </div>

      {/* Password */}
      <PasswordInput
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password}
        touched={formik.touched.password}
      />

      <button
        type="submit"
        className="font-semibold text-white text-[14px] w-[379px] h-[36px] bg-[#525FE1] rounded-[4px] mt-[13px] cursor-pointer"
      >
        Continue
      </button>

      <div className="flex items-center w-[375px] mt-[13px]">
        <div className="flex-grow border-t border-[#6D7588]" />
        <span className="px-3 text-[#2A2D34] text-[14px]">Or</span>
        <div className="flex-grow border-t border-[#6D7588]" />
      </div>

      <GoogleButton />
    </form>
  );
};

export default RegisterForm;