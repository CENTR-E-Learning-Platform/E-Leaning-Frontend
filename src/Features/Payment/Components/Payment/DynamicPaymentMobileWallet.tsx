import { useInitialAmount } from "../../Hooks/useInitialAmount";
import { useState } from "react";
import type { mobileData } from "../../Types/types";
import { Link } from "react-router-dom";
import { MobileWalletSchema } from "../../Validation/MobileWalletSchema";
import card from '../../../../assets/icons/PaymentCardB.svg';
import wallet from '../../../../assets/icons/MobilewalletW.svg';
const DynamicPaymentMobileWallet = () => {
  const { sendPayByWallet } = useInitialAmount();
  const [errors, setErrors] = useState<{ mobileNumber?: string; amount?: string }>({});
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const [formData, setFormData] = useState<mobileData>({
    amount: 0,
    mobileNumber: "",
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    let parsedValue: string | number = value.replace(/\D/g, "");

    if (id === "mobileNumber" && parsedValue.length > 11) {
      parsedValue = parsedValue.slice(0, 11);
    }

    if (id === "amount") {
      if (parsedValue !== "") {
        parsedValue = Number(parsedValue);
        if (parsedValue > 5000) return;
      } else {
        parsedValue = 0;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [id]: parsedValue,
    }));

    if (!submittedOnce) return;

    try {
      await MobileWalletSchema.validateAt(id, {
        ...formData,
        [id]: parsedValue,
      });

      setErrors((prev) => ({ ...prev, [id]: "" }));
    } catch (err: any) {
      setErrors((prev) => ({ ...prev, [id]: err.message }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedOnce(true);

    try {
      await MobileWalletSchema.validate(formData, { abortEarly: false });
      setErrors({});
      console.log("SENDING WALLET DATA:", formData);
      await sendPayByWallet(formData.mobileNumber, formData.amount);
    } catch (err: any) {
      if (err.inner) {
        const newErrors: any = {};
        err.inner.forEach((e: any) => {
          newErrors[e.path] = e.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <>
      <div className="w-[600px] min-h-[355px] h-auto rounded-[8px] border border-gray-300 p-[30px]">
        <p className="font-semibold text-[18px] text-[#2A2D34] mb-[15px]">
          Choose how to pay
        </p>

        <div className="flex mb-4 justify-between h-[77px] w-[310px] gap-[20px]">
          <Link
            to={"/payment/paymentCart"}
            className="h-[77px] w-[145px] flex flex-col items-center justify-center rounded-[4px] p-[16px] border gap-[10px] border-gray-300"
          >
            <img
              src={card}
              alt="PaymentCardBlack"
            />
            <p className="text-[16px] w-[115px] font-medium leading-[17px] tracking-[0]">
              Payment card
            </p>
          </Link>

          <Link
            to={"/payment/mobileWallet"}
            className="h-[77px] w-[145px] flex flex-col items-center justify-center rounded-[4px] bg-[#525FE1] p-[16px] gap-[10px]"
          >
            <img
              src={wallet}
              alt="Mobilewalletwhite"
            />
            <p className="text-[16px] font-medium leading-[13px] text-white tracking-[0]">
              Mobile wallet
            </p>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label
              htmlFor="mobileNumber"
              className="block text-[16px] font-normal text-[#2A2D34]"
            >
              Phone number
            </label>

            <input
              id="mobileNumber"
              type="text"
              placeholder="01116023154"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full h-[52px] py-[12px] px-[18px] rounded-[8px] border border-gray-300 text-[18px] text-[#2A2D34] focus:outline-none focus:border-[#525FE1] mb-2"
            />
            {errors.mobileNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
            )}
          </div>

          <div className="space-y-1 mt-4">
            <label
              htmlFor="amount"
              className="block text-[16px] font-normal text-[#2A2D34]"
            >
              Amount
            </label>

            <input
              id="amount"
              type="text"
              placeholder="0"
              value={formData.amount || ""}
              onChange={handleChange}
              className="w-full h-[52px] py-[12px] px-[18px] rounded-[8px] border border-gray-300 text-[18px] text-[#2A2D34] focus:outline-none focus:border-[#525FE1] mb-2"
            />
            {errors.amount && (
              <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full h-[56px] mt-6 rounded-[8px] bg-[#525FE1] text-[18px] text-white font-bold cursor-pointer"
          >
            Continue
          </button>
        </form>
        <p className="mt-4 text-[14px] text-gray-500 text-center flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Note: You are adding funds to your wallet. Maximum limit is 5,000.
        </p>
      </div>
    </>
  );
};

export default DynamicPaymentMobileWallet;