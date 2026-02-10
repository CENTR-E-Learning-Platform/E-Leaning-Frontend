const API_BASE_URL = "https://localhost:7251";

const LOGIN_API = `${API_BASE_URL}/Account/Login`;
const REGISTER_API = `${API_BASE_URL}/Account/Register`;
const EXTERNAL_LOGIN_API = `${API_BASE_URL}/Account/external-login`;
const VERIFY_OTP_API = `${API_BASE_URL}/Account/verify-otp`;
const RESEND_EMAIL_API = `${API_BASE_URL}/Account/Resend`;
const SEND_EMAIL = `${API_BASE_URL}/Account/forget-password`;
const Reset_PASSWORD = `${API_BASE_URL}/Account/reset-password`;
const VERIFY_API = `${API_BASE_URL}/Account/Resend`;

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
