import { useState } from "react";
import { useFormik } from "formik";
import { initialValues } from "../Types/Types";
import { addWallet } from "../Services/addWallet";
import { walletValidationSchema } from "../Validation/walletValidationSchema";
import { getBalance } from "../Services/getBalance";
import { useSettingContext } from "../Context/useSettingContext";
import { deleteWallet } from "../Services/deleteWallet";
import { disburse } from "../Services/disburse";

export const useFinancial = () => {
    const { setIsCreated } = useSettingContext();
    const [isAdding, setIsAdding] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isWithdrawing, setIsWithdrawing] = useState(false);

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
                walletIssuer: currentIssuer,
            };

            try {
                setIsAdding(true);
                const response = await addWallet(params);
                console.log(response.data);
                setIsCreated(true);
            } catch (err: any) {
                console.log("Error Details:", err.response?.data);
            } finally {
                setIsAdding(false);
            }
        },
    });

    const GetBalance = async () => {
        try {
            const response = await getBalance();
            console.log(response.data);
        } catch (err: any) {
            console.log("Error Details:", err.response?.data);
        }
    };

    const DeleteWallet = async () => {
        setIsDeleting(true);
        try {
            await deleteWallet();
        } catch (err: any) {
            console.log("Error Details:", err.response?.data);
        } finally {
            setIsDeleting(false);
        }
    };

    const Disburse = async () => {
        setIsWithdrawing(true);
        try {
            await disburse();
        } catch (err: any) {
            console.log("Error Details:", err.response?.data);
        } finally {
            setIsWithdrawing(false);
        }
    };

    return { formik, GetBalance, DeleteWallet, Disburse, isAdding, isDeleting, isWithdrawing };
};