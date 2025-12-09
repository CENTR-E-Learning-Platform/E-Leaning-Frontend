import { CREATEROOM_API } from "../Utils/Apis";
import axios from "axios";

export const createRoom = async (data: any) => {
  const token = localStorage.getItem("token");
  console.log("this is token", token);

  return await axios.post(
    `${CREATEROOM_API}?${data}`,
    {}, 
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};