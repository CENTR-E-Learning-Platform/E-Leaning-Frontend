import axios from "axios";
import { RESEND_EMAIL_API } from "../Utils/api";

export const ConfirmEmail = (email: string) => {
  return axios.get(RESEND_EMAIL_API, {
    params: {
      type: "verify",
      email,
    },
  });
};
