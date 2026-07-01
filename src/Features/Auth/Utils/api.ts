import { BASE_URL } from "../../../APIs/APIs";

const LOGIN_API = `${BASE_URL}/Account/Login`;
const REGISTER_API = `${BASE_URL}/Account/Register`;
const EXTERNAL_LOGIN_API = `${BASE_URL}/Account/external-login`;
const VERIFY_OTP_API = `${BASE_URL}/Account/verify-otp`;
const RESEND_EMAIL_API = `${BASE_URL}/Account/Send`;
const SEND_EMAIL = `${BASE_URL}/Account/forget-password`;
const Reset_PASSWORD = `${BASE_URL}/Account/forget-password`;
const VERIFY_API = `${BASE_URL}/Account/Resend`;

export {
  LOGIN_API,
  REGISTER_API,
  EXTERNAL_LOGIN_API,
  VERIFY_OTP_API,
  SEND_EMAIL,
  VERIFY_API,
  Reset_PASSWORD,
  RESEND_EMAIL_API
};
