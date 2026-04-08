import axios from "axios";
import { DISBURSE } from "../Utils/Apis";

export const disburse = async () => {
return await axios.get(DISBURSE,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
);
}