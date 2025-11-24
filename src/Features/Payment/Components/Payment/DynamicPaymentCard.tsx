import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInitialAmount } from "../../Hooks/useInitialAmount";
import type { CardFormData } from "../../Types/types";

const DynamicPaymentCard = () => {
  const { sendAmount , sendpaymob, sendingcharge} = useInitialAmount();

  
  const [formData, setFormData] = useState<CardFormData>({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    saveCard: false,
  });

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

 

const handleSubmit = async () => {
  try {
    console.log("Form Data:", formData);
    await sendAmount();
    const paymentKey = localStorage.getItem("paymentKey");
    console.log("Payment Key:", paymentKey);

    if (!paymentKey) {
      alert("Payment key not found!");
      return;
    }
    console.log( formData.expiryDate.split("/")[0]);
    console.log( formData.expiryDate.split("/")[1]);
    
    const userDetails = {
        pan: formData.cardNumber,
        cardholder_name: "Abdelrahman", 
        expiry_month: formData.expiryDate.split("/")[0],
        expiry_year: formData.expiryDate.split("/")[1],
        cvn: formData.cvc
    };

    await sendpaymob(userDetails);
    await sendingcharge();
    
  } catch (err) {
    console.log("Error in handleSubmit:", err);
  }
};

  return (
    <div className="w-[600px] h-[531px] rounded-[8px] border border-gray-300 p-[30px]">
      <p className="font-semibold text-[18px] text-[#2A2D34] tracking-[0] mb-[15px]">
        Choose how to pay
      </p>

      <div className="flex mb-4 justify-between h-[77px] w-[310px] gap-[20px]">
        <Link
          to={"/explore/TeacherPayment/paymentCart"}
          className="h-[77px] w-[145px] rounded-[4px] p-[16px] bg-[#525FE1] flex flex-col items-center justify-center gap-[10px]"
        >
          <img
            src="../../../../../src/assets/icons/PaymentCardW.svg"
            alt="PaymentCardwhite"
          />
          <p className="text-[16px] font-medium text-white leading-[13px] tracking-[0]">
            Payment card
          </p>
        </Link>
        <Link
          to={"/explore/TeacherPayment/mobileWallet"}
          className="h-[77px] w-[145px] flex flex-col items-center justify-center rounded-[4px] p-[16px] border gap-[10px] border-gray-300"
        >
          <img
            src="../../../../../src/assets/icons/MobilewalletB.svg"
            alt="MobilewalletBlack"
          />
          <p className="text-[16px] font-medium leading-[13px] tracking-[0]">
            Mobile wallet
          </p>
        </Link>
      </div>

      <form className="w-[540px] h-[341px]" onSubmit={e => e.preventDefault()}>
        <div className="space-y-1">
          <label htmlFor="cardNumber" className="block text-[16px] font-normal text-[#2A2D34]">
            Card number
          </label>
          <input
            id="cardNumber"
            type="text"
            placeholder="1234 1234 1234 1234"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full h-[52px] py-[12px] px-[18px] rounded-[8px] border border-gray-300 text-[18px] text-gray-400 placeholder:text-gray-400 focus:outline-none focus:border-[#525FE1] mb-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-[17px]">
          <div className="space-y">
            <label htmlFor="expiryDate" className="block text-[16px] font-normal text-[#2A2D34]">
              Expiry date
            </label>
            <input
              id="expiryDate"
              type="text"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              className="w-full h-[52px] py-[12px] px-[18px] rounded-[8px] border border-gray-300 text-gray-400 placeholder:text-gray-400 focus:outline-none focus:border-[#525FE1]"
            />
          </div>

          <div className="space-y">
            <label htmlFor="cvc" className="block text-[16px] font-normal text-[#2A2D34]">
              CVC/CVV
            </label>
            <input
              id="cvc"
              type="text"
              placeholder="CVC"
              value={formData.cvc}
              onChange={handleChange}
              className="w-full h-[52px] py-[12px] px-[18px] rounded-[8px] border border-gray-300 text-gray-400 placeholder:text-gray-400 focus:outline-none focus:border-[#525FE1]"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2 mt-2">
          <input
            id="saveCard"
            type="checkbox"
            style={{ accentColor: "#525FE1" }}
            checked={formData.saveCard}
            onChange={handleChange}
            className="w-5 h-5 rounded border border-gray-300"
          />
          <label htmlFor="saveCard" className="text-[16px] font-normal text-[#2A2D34] cursor-pointer">
            Save this card for future payments
          </label>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full h-[56px] rounded-[8px] bg-[#CBCFF6] text-[#868CEA] text-[18px] font-semibold hover:bg-[#B5BEF0] transition-colors"
        >
          Book class and pay EGP 110
        </button>

        <div className="space-y-3 text-[14px] text-gray-500">
          <p>
            By pressing the “Book class and pay EGP 110” button, you agree to&nbsp;
            <a href="#" className="text-[#2A2D34] underline hover:text-[#525FE1]">
              Centr’s Refund and Payment Policy
            </a>
          </p>
          <p>It’s safe to pay on Centr. All transactions are protected and encrypted</p>
        </div>
      </form>
    </div>
  );
};

export default DynamicPaymentCard;
