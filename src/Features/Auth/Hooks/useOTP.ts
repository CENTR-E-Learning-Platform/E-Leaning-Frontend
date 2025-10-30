import { useFormik } from "formik";
import { otpLogin } from "../Services/otpAPI";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { otpSchema } from "../Validation/otpSchema";

export const useOTP = () => {
  const Email = localStorage.getItem("emailForOTP") || "";
  const location = useLocation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      otp: ["", "", "", "", ""],
    },
    validationSchema: otpSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const currentPath = location.pathname;

      if (currentPath.includes("/login/SendEmail/otp")) {
        localStorage.setItem("otpForForgetPassword", values.otp.join(""));
        navigate("/login/SendEmail/otp/setNewPassword");
      } else if (currentPath.includes("/login/otp")) {
        try {
          setSubmitting(true);
          const finalOTP = {
            otp: values.otp.join(""),
            email: Email,
          };
          const res = await otpLogin(finalOTP);
          console.log(" Login successful:", res.data);
          var token = res.data.data.token;
          localStorage.setItem("token", token);
          console.log(token);
        } catch (error: any) {
          const MSError = error.response?.data.errors[0] || error.message;
          console.error(" Login failed:", MSError);
          alert(MSError);
        } finally {
          setSubmitting(false);
        }
      }
    },
  });

  return formik;
};

export const useOTPHandler = (formik: any) => {
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);
  const navegate = useNavigate();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    // منع أي إدخال غير رقمي
    if (/[^0-9]/.test(value)) {
      e.target.value = "";
      return;
    }

    // تحديث قيمة الـ OTP داخل Formik
    formik.values.otp[index] = value;
    // أو ممكن تستخدم setFieldValue لو عايز تعمل re-render:
    // formik.setFieldValue(`otp[${index}]`, value);

    // التنقل التلقائي بين الخانات
    if (value && index < inputRef.current.length - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };
  const handelKeyBack = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key == "Backspace" && !e.currentTarget.value && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };
  const BackLogin = () => {
    localStorage.removeItem("emailForOTP");
    navegate("/login");
  };

  return { inputRef, handleChange, handelKeyBack, BackLogin };
};

export const usehandlePaste = () => {
  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    inputRef: any,
    formik: any
  ) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").trim();
    const digits = pasteData.replace(/\D/g, "").slice(0, 5).split("");
    digits.forEach((digit, index) => {
      if (inputRef.current[index]) {
        inputRef.current[index]!.value = digit;
        formik.setFieldValue(`otp[${index}]`, digit);
      }
    });

    const nextIndex = digits.length < 5 ? digits.length : 4;
    inputRef.current[nextIndex]?.focus();
  };
  return { handlePaste };
};
