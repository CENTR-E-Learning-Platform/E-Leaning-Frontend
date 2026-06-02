import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import 'paymob-pixel';
import { useInitialAmount } from "../../Hooks/useInitialAmount";

const DynamicPaymentCard = () => {
  const isInitialized = useRef(false);
  const { sendAmount } = useInitialAmount();

  useEffect(() => {
    const initPayment = async () => {
      await sendAmount();

      const testPublicKey = localStorage.getItem("publicKey");
      const testClientSecret = localStorage.getItem("clientSecret");

      if (!isInitialized.current && testPublicKey && testClientSecret) {
        try {
          console.log("public id: " + testPublicKey);
          console.log("client secret: " + testClientSecret);

          const pixel = new (window as any).Pixel({
            publicKey: testPublicKey,
            clientSecret: testClientSecret,
            paymentMethods: ['wallet', 'card'],
            elementId: 'paymob-elements',
            showSaveCard: true,

            customStyle: {
              Color_Primary: '#525FE1',
              Color_Text: '#2A2D34',
              Radius_Border: '8',
              Height_Payment_Button: '56',
              Color_Container: '#ffffff',
              Color_Input_Background: '#ffffff',
            },

            afterPaymentComplete: async (response: any) => {
              console.log('Payment Success:', response);
            },
            onPaymentCancel: () => {
              console.log('Payment Cancelled');
            },
          });

          isInitialized.current = true;
          console.log("Paymob Pixel initialized successfully");
        } catch (error) {
          console.error("Error initializing Paymob:", error);
        }
      } else if (!testPublicKey || !testClientSecret) {
        console.error("Missing Paymob keys in localStorage.");
      }
    };

    initPayment();
  }, [sendAmount]);

  return (
    <div className="w-[600px] min-h-[531px] rounded-[8px] border border-gray-300 p-[30px] bg-white">
      <p className="font-semibold text-[18px] text-[#2A2D34] tracking-[0] mb-[15px]">
        Choose how to pay
      </p>

      <div className="flex mb-6 justify-between h-[77px] w-[310px] gap-[20px]">
        <div className="h-[77px] w-[145px] rounded-[4px] p-[16px] bg-[#525FE1] flex flex-col items-center justify-center gap-[10px] cursor-pointer">
          <img src="/src/assets/icons/PaymentCardW.svg" alt="Card" />
          <p className="text-[16px] w-[115px] text-center font-medium text-white leading-[17px] tracking-[0]">
            Payment card
          </p>
        </div>
        <Link
          to={"/payment/mobileWallet"}
          className="h-[77px] w-[145px] flex flex-col items-center justify-center rounded-[4px] p-[16px] border gap-[10px] border-gray-300"
        >
          <img src="/src/assets/icons/MobilewalletB.svg" alt="Wallet" />
          <p className="text-[16px] font-medium leading-[13px] tracking-[0] text-[#2A2D34]">
            Mobile wallet
          </p>
        </Link>
      </div>

      <div id="paymob-elements" className="w-[540px] min-h-[250px] mb-4"></div>

      <div className="space-y-3 text-[14px] text-gray-500 mt-4 border-t pt-4">
        <p>
          By pressing the payment button, you agree to&nbsp;
          <a href="#" className="text-[#2A2D34] underline hover:text-[#525FE1]">
            Centr’s Refund and Payment Policy
          </a>
        </p>
        <p>
          It’s safe to pay on Centr. All transactions are protected and encrypted.
        </p>
      </div>
    </div>
  );
};

export default DynamicPaymentCard;