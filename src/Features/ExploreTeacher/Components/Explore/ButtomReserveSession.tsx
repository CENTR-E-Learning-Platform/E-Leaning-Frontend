import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { payforsession } from "../../Services/payforsession";

interface Teacher {
  closesetSessionPrice: number;
  closesetSessionAvailableSeats: number;
}

const ButtomReserveSession = ({ teacher }: { teacher: Teacher }) => {
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleReserve = async () => {
    setIsProcessing(true);
    try {
      await payforsession();
      navigate("/calendar");
    } catch (error) {
      setIsProcessing(false);
    }
  };

  const studentBalance = 5000;
  const remainingBalance = studentBalance - (teacher.closesetSessionPrice || 0);

  return (
    <>
      <section className="w-[285px] h-[60px]">
        <p className="text-[13px] font-bold text-[#E15254]">
          {teacher.closesetSessionAvailableSeats} seats left
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="font-semibold cursor-pointer w-[285px] h-[40px] flex justify-center items-center text-[16px] text-[#F9FBFC] bg-[#525FE1] rounded-[8px] p-[14px]"
        >
          Reserve Session
        </button>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70 bg-black/40 ">
          <div className="bg-white rounded-[16px] p-[32px] w-[400px] shadow-2xl flex flex-col items-center">
            <h2 className="text-[20px] font-bold text-[#2A2D34] mb-[24px]">Confirm Reservation</h2>

            <div className="w-full flex flex-col gap-[16px] mb-[24px]">
              <div className="flex justify-between items-center border-b border-gray-100 pb-[12px]">
                <span className="text-[#434656] font-medium text-[15px]">Current Balance</span>
                <span className="text-[#2A2D34] font-bold text-[16px]">EGP {studentBalance}</span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-100 pb-[12px]">
                <span className="text-[#434656] font-medium text-[15px]">Session Price</span>
                <span className="text-[#E15254] font-bold text-[16px]">EGP {teacher.closesetSessionPrice}</span>
              </div>

              <div className="flex justify-between items-center pt-[4px]">
                <span className="text-[#434656] font-semibold text-[15px]">Balance After</span>
                <span className={`font-bold text-[18px] ${remainingBalance >= 0 ? "text-[#22C55E]" : "text-[#E15254]"}`}>
                  EGP {remainingBalance}
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-[12px] w-full mt-[8px]">
              <button
                onClick={() => setShowModal(false)}
                disabled={isProcessing}
                className="flex-1 py-[12px] rounded-[8px] font-semibold text-[15px] text-[#434656] bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleReserve}
                disabled={isProcessing || remainingBalance < 0}
                className={`flex-1 py-[12px] rounded-[8px] font-semibold text-[15px] text-white transition-colors ${remainingBalance < 0 || isProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-[#525FE1] hover:bg-[#4351d1]"
                  }`}
              >
                {isProcessing ? "Processing..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtomReserveSession;