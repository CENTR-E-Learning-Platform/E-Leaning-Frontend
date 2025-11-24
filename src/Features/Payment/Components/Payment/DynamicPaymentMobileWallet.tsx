import React from "react";
import { Link } from "react-router-dom";

const DynamicPaymentMobileWallet = () => {
  return (
    <>
      <div className="w-[600px] h-[330px] rounded-[8px] border border-gray-300 p-[30px]">
        <p className="font-semibold text-[18px] text-[#2A2D34] tracking-[0] mb-[15px]">
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
            <p className="text-[16px] font-medium leading-[13px] tracking-[0]">
              Payment card
            </p>
          </Link>
          <Link
            to={"/explore/TeacherPayment/mobileWallet"}
            className="h-[77px] w-[145px] flex flex-col items-center justify-center rounded-[4px] bg-[#525FE1] p-[16px] gap-[10px]"
          >
            <img
              src="../../../../../src/assets/icons/MobilewalletW.svg"
              alt="Mobilewalletwhite"
            />
            <p className="text-[16px] font-medium leading-[13px]  text-white tracking-[0]">
              Mobile wallet
            </p>
          </Link>
        </div>

        <form>
          <div className="space-y-1">
            <label
              htmlFor="phoneNumber"
              className="block text-[16px] font-normal text-[#2A2D34]"
            >
              Phone number
            </label>
            <input
              id="phoneNumber"
              type="text"
              placeholder="01116023154"
              className="w-full h-[52px] py-[12px] px-[18px] rounded-[8px] border border-gray-300 text-[18px] text-gray-400 placeholder:text-gray-400 focus:outline-none focus:border-[#525FE1] mb-2"
            />
          </div>

          <Link to={"/explore/TeacherPayment/mobileWallet/confirm"}>
            <button className="w-full h-[56px] cursor-pointer rounded-[8px] bg-[#525FE1] text-[18px] text-white font-bold transition-colors">
              Continue
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default DynamicPaymentMobileWallet;
