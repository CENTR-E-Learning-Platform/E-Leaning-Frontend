import { useFormik } from "formik";
import { initialValues } from "../Types/Types";
import { addWallet } from "../Services/addWallet";
import { walletValidationSchema } from "../Validation/walletValidationSchema";
import { getBalance } from "../Services/getBalance";
export const useFinancial = () => {
    const formik = useFormik({
        initialValues,
        validationSchema: walletValidationSchema,
        onSubmit: async (values) => {
            
            let currentIssuer = values.walletIssuer; 
            if (values.walletNumber.startsWith("011") || values.walletNumber.startsWith("11")) {
                currentIssuer = 0;
            } else if (values.walletNumber.startsWith("010")) {
                currentIssuer = 1;
            } else if (values.walletNumber.startsWith("012")) {
                currentIssuer = 2;
            }

            const params = {
                walletNumber: values.walletNumber,
                paymentMethod: values.paymentMethod,
                walletIssuer: currentIssuer 
            };
    
            try {
                console.log("Data to send: ", params);
                const response = await addWallet(params);
                console.log(response.data);
                console.log("success");
            } catch (err: any) {
                console.log("Error Details:", err.response?.data);
                console.log(err);
            }
        },
    });

    const GetBalance = async () => {
        try {
            const response = await getBalance();
            console.log(response.data);
        } catch (err: any) {
            console.log("Error Details:", err.response?.data);
            console.log(err);
        }
    }
    
    return { formik , GetBalance };
};