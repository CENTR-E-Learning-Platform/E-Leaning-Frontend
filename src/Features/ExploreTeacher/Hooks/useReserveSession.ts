import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { payforsession } from "../Services/payforsession";

export const useReserveSession = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const reserveSession = async (teacher: any) => {
    const roomName = teacher.roomName;

    if (!roomName) {
      setError("No room available for this teacher.");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      await payforsession(roomName);
      navigate("/calendar");
    } catch {
      setError("Payment failed. Please try again.");
      setIsProcessing(false);
    }
  };

  return { reserveSession, isProcessing, error };
};
