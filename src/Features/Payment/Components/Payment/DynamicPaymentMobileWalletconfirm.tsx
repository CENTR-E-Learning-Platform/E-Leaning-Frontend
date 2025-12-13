
import { Link } from "react-router-dom";

const DynamicPaymentMobileWalletconfirm = () => {
  return (
    <>
      <div className="w-[600px] h-[435px] rounded-[8px] border border-gray-300 p-[30px]">
        <p className="font-semibold text-[18px] text-[#2A2D34] tracking-[0] mb-[15px]">
          Choose how to pay
        </p>

        <div className="flex mb-4 justify-between h-[77px] w-[310px] gap-[20px]">
          <Link
            to={"/explore/TeacherPayment/paymentCart"}
            className="h-[77px] w-[145px] flex flex-col items-center justify-center rounded-[4px] p-[16px] border gap-[10px] border-gray-300"
          >
            <img
              src="../../../../../src/assets/icons/PaymentCardB.svg"
              alt="PaymentCardBlack"
            />
            <p className="text-[16px] w-[115px] font-medium leading-[17px] tracking-[0]">
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
            <p className="text-[16px] font-medium leading-[13px] text-white tracking-[0]">Mobile wallet</p>
          </Link>
        </div>

        <form>
          <div className="grid grid-cols-2 gap-[17px] mb-2">
            <div className="space-y">
              <label
                htmlFor="Pin"
                className="block text-[16px] font-normal text-[#2A2D34]"
              >
                PIN
              </label>
              <input
                id="Pin"
                type="text"
                placeholder="***"
                className="w-full h-[52px] py-[12px] px-[18px] rounded-[8px] border border-gray-300 text-gray-400 placeholder:text-gray-400 focus:outline-none focus:border-[#525FE1]"
              />
            </div>

            <div className="space-y">
              <label
                htmlFor="otp"
                className="block text-[16px] font-normal text-[#2A2D34]"
              >
                OTP
              </label>
              <input
                id="otp"
                type="text"
                placeholder="OTP"
                className="w-full h-[52px] py-[12px] px-[18px] rounded-[8px] border border-gray-300 text-gray-400 placeholder:text-gray-400 focus:outline-none focus:border-[#525FE1]"
              />
            </div>
          </div>

          <a href="" className="text-[#525FE1] underline hover:text-[#525FE1]">
            Resend OTP
          </a>

          <button
            type="submit"
            className="w-full h-[56px] rounded-[8px] bg-[#CBCFF6] text-[#868CEA] text-[18px] font-semibold hover:bg-[#B5BEF0] transition-colors mt-2"
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
    </>
  );
};

export default DynamicPaymentMobileWalletconfirm;
