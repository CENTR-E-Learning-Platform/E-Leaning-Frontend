import { useInitialAmount } from "../../Hooks/useInitialAmount";
import { useState } from "react";
import type { mobileData } from "../../Types/types";
import { Link } from "react-router-dom";

const DynamicPaymentMobileWallet = () => {
  const { sendWallet } = useInitialAmount();

  const [formData, setFormData] = useState<mobileData>({
    amount: 0,
    mobileNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      amount: 100,
      mobileNumber: formData.mobileNumber
    };

    console.log("SENDING WALLET DATA:", payload);

    await sendWallet(payload);

  };

  return (
    <>
      <div className="w-[600px] h-[330px] rounded-[8px] border border-gray-300 p-[30px]">
        <p className="font-semibold text-[18px] text-[#2A2D34] mb-[15px]">
          Choose how to pay
        </p>

        <div className="flex mb-4 justify-between h-[77px] w-[310px] gap-[20px]">
          <Link
            to={"/explore/TeacherPayment/paymentCart"}
            className="h-[77px] w-[145px] rounded-[4px] p-[16px] border border-gray-300 flex flex-col items-center justify-center gap-[10px]"
          >
            <img
              src="../../../../../src/assets/icons/PaymentCardB.svg"
              alt="PaymentCardBlack"
            />
            <p className="text-[16px] font-medium">Payment card</p>
          </Link>

          <Link
            to={"/explore/TeacherPayment/mobileWallet"}
            className="h-[77px] w-[145px] flex flex-col items-center justify-center rounded-[4px] bg-[#525FE1] p-[16px] gap-[10px]"
          >
            <img
              src="../../../../../src/assets/icons/MobilewalletW.svg"
              alt="Mobilewalletwhite"
            />
            <p className="text-[16px] font-medium text-white">Mobile wallet</p>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label
              htmlFor="phoneNumber"
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
              className="w-full h-[52px] py-[12px] px-[18px] rounded-[8px] border border-gray-300 text-[18px] text-gray-400 focus:outline-none focus:border-[#525FE1] mb-2"
            />
          </div>

          <button
            type="submit"
            className="w-full h-[56px] mt-3 rounded-[8px] bg-[#525FE1] text-[18px] text-white font-bold cursor-pointer"
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default DynamicPaymentMobileWallet;
