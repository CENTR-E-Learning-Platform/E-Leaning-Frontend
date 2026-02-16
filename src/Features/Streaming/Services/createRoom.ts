import { CREATEROOM_API } from "../Utils/Apis";
import axios from "axios";

export const createRoom = async (data: any) => {
  const token = localStorage.getItem("token");
  console.log("this is token", token);
  console.log(data.params);
  

  return await axios.post(CREATEROOM_API, {}, { 
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: data 
  });
};