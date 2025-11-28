import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInitialAmount } from "../../Hooks/useInitialAmount";
import type { CardFormData } from "../../Types/types";
import { paymentCardSchema } from "../../Validation/paymentCartSchema";

const DynamicPaymentCard = () => {
  const { sendAmount, sendpaymob, sendingcharge } = useInitialAmount();
  const [errors, setErrors] = useState<any>({});
  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState<CardFormData>({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    saveCard: false,
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    let newValue = type === "checkbox" ? checked : value;

    ///////////// cardNumber

    if (id === "cardNumber") {
      let digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length > 16) {
        digitsOnly = digitsOnly.slice(0, 16);
      }
      let formattedcardNumber = digitsOnly.replace(/(.{4})/g, "$1 ").trim();
      newValue = formattedcardNumber;
    }

    ///////////// expiryDate

    if (id === "expiryDate") {
      let digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length > 4) {
        digitsOnly = digitsOnly.slice(0, 4);
      }
      if (digitsOnly.length > 2) {
        digitsOnly = digitsOnly.slice(0, 2) + "/" + digitsOnly.slice(2);
      }
      newValue = digitsOnly;
    }

    ///////////// cvc

    if (id === "cvc") {
      let digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length > 3) {
        digitsOnly = digitsOnly.slice(0, 3);
      }
      newValue = digitsOnly;
    }

    setFormData((prev) => ({
      ...prev,
      [id]: newValue,
    }));

    //                ده بيشوف لو اليوزير داس على البوتوم اول مره ولا لا لو داس هيظهر الايرور مداسش مش هيظهر الايرورز       ///////
    if (!submittedOnce) {
      return;
    }

    try {
      await paymentCardSchema.validateAt(id, { ...formData, [id]: newValue });
      setErrors((prev: any) => ({ ...prev, [id]: "" }));
    } catch (err: any) {
      setErrors((prev: any) => ({
        ...prev,
        [id]: err.message,
      }));
    }
  };

  const handleSubmit = async () => {
    setSubmittedOnce(true);
    try {
      await paymentCardSchema.validate(formData, { abortEarly: false });
      console.log("Form Data:", formData);
      await sendAmount();
      const paymentKey = localStorage.getItem("paymentKey");
      console.log("Payment Key:", paymentKey);

      if (!paymentKey) {
        alert("Payment key not found!");
        return;
      }
      console.log(formData.expiryDate.split("/")[0]);
      console.log(formData.expiryDate.split("/")[1]);

      const userDetails = {
        pan: formData.cardNumber,
        cardholder_name: "Abdelrahman",
        expiry_month: formData.expiryDate.split("/")[0],
        expiry_year: formData.expiryDate.split("/")[1],
        cvn: formData.cvc,
      };

      await sendpaymob(userDetails);
      await sendingcharge();
    } catch (err: Error | any) {
      if (err.inner) {
        const formattedErrors: any = {};
        const ArrayError = err.inner;
        ArrayError.forEach((obj: any) => {
          formattedErrors[obj.path] = obj.message;
        });
        setErrors(formattedErrors);
      }
      console.log("Validation Error:", err);
    }
  };

  useEffect(() => {
    const checkForm = async () => {
      try {
        await paymentCardSchema.validate(formData, { abortEarly: false });
        setIsValid(true);
      } catch {
        setIsValid(false);
      }
    };
    checkForm();
  }, [formData]);

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

      <form
        className="w-[540px] h-[341px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-1">
          <label
            htmlFor="cardNumber"
            className="block text-[16px] font-normal text-[#2A2D34]"
          >
            Card number
          </label>
          <input
            id="cardNumber"
            type="text"
            placeholder="1234 1234 1234 1234"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full h-[52px] py-[12px] px-[18px] rounded-[8px] border border-gray-300 text-[18px] text-black placeholder:text-gray-400 focus:outline-none focus:border-[#525FE1] mb-2"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm">{errors.cardNumber}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-[17px]">
          <div className="space-y">
            <label
              htmlFor="expiryDate"
              className="block text-[16px] font-normal text-[#2A2D34]"
            >
              Expiry date
            </label>
            <input
              id="expiryDate"
              type="text"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              className="w-full h-[52px] py-[12px] px-[18px] rounded-[8px] border border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:border-[#525FE1]"
            />
            {errors.expiryDate && (
              <p className="text-red-500 text-sm">{errors.expiryDate}</p>
            )}
          </div>

          <div className="space-y">
            <label
              htmlFor="cvc"
              className="block text-[16px] font-normal text-[#2A2D34]"
            >
              CVC/CVV
            </label>
            <input
              id="cvc"
              type="text"
              placeholder="CVC"
              value={formData.cvc}
              onChange={handleChange}
              className="w-full h-[52px] py-[12px] px-[18px] rounded-[8px] border border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:border-[#525FE1]"
            />
            {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc}</p>}
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
          <label
            htmlFor="saveCard"
            className="text-[16px] font-normal text-[#2A2D34] cursor-pointer"
          >
            Save this card for future payments
          </label>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className={`w-full h-[56px] rounded-[8px] text-[18px] font-semibold transition-colors ${
            isValid
              ? "bg-[#525FE1] text-white hover:bg-[#4248c0]"
              : "bg-[#CBCFF6] text-[#868CEA] hover:bg-[#B5BEF0]"
          }`}
        >
          Book class and pay EGP 110
        </button>

        <div className="space-y-3 text-[14px] text-gray-500">
          <p>
            By pressing the “Book class and pay EGP 110” button, you agree
            to&nbsp;
            <a
              href="#"
              className="text-[#2A2D34] underline hover:text-[#525FE1]"
            >
              Centr’s Refund and Payment Policy
            </a>
          </p>
          <p>
            It’s safe to pay on Centr. All transactions are protected and
            encrypted
          </p>
        </div>
      </form>
    </div>
  );
};

export default DynamicPaymentCard;
