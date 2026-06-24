import React from "react";
import { Calendar, Lock, UserCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmptyStudent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-[#F3F6FF] select-none">
      {/* Illustration */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer glow ring */}
        <div className="absolute w-[220px] h-[220px] rounded-full bg-[#525FE1]/8 animate-pulse" />
        <div className="absolute w-[170px] h-[170px] rounded-full bg-[#525FE1]/10" />

        {/* Chat bubbles illustration */}
        <div className="relative w-[140px] h-[140px] flex items-center justify-center">
          {/* Left bubble */}
          <div className="absolute left-0 top-6 w-[52px] h-[36px] bg-white rounded-t-[14px] rounded-br-[14px] shadow-md flex items-center justify-center gap-[5px] px-3">
            <div className="w-[6px] h-[6px] rounded-full bg-[#525FE1]/40" />
            <div className="w-[14px] h-[5px] rounded-full bg-[#525FE1]/40" />
            <div className="w-[8px] h-[5px] rounded-full bg-[#525FE1]/25" />
          </div>
          {/* Right bubble */}
          <div className="absolute right-0 top-14 w-[56px] h-[36px] bg-[#525FE1] rounded-t-[14px] rounded-bl-[14px] shadow-md flex items-center justify-center gap-[5px] px-3">
            <div className="w-[8px] h-[5px] rounded-full bg-white/50" />
            <div className="w-[14px] h-[5px] rounded-full bg-white/60" />
            <div className="w-[6px] h-[5px] rounded-full bg-white/40" />
          </div>
          {/* Center shield / lock icon */}
          <div className="w-[72px] h-[72px] rounded-[20px] bg-white shadow-[0_8px_32px_rgba(82,95,225,0.18)] flex items-center justify-center">
            <Lock className="w-[34px] h-[34px] text-[#525FE1]" strokeWidth={1.8} />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-3 mb-8 px-6 max-w-[380px] text-center">
        <h1 className="font-['Poppins'] font-bold text-[26px] leading-[34px] text-[#2A2D34]">
          No messages yet
        </h1>
        <p className="font-['Poppins'] font-normal text-[14px] leading-[22px] text-[#6D7588]">
          Once students start booking sessions with you, your conversations will show up here.
        </p>
        {/* Encryption badge */}
        <div className="flex items-center gap-[6px] mt-1 px-3 py-[5px] bg-[#525FE1]/8 rounded-full">
          <Lock className="w-[11px] h-[11px] text-[#525FE1]" strokeWidth={2.5} />
          <span className="font-['Poppins'] font-medium text-[11px] text-[#525FE1]">
            Your personal messages are end-to-end encrypted
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-row items-center gap-[12px] flex-wrap justify-center">
        <button
          onClick={() => navigate("/profile")}
          className="flex flex-row justify-center items-center cursor-pointer py-[14px] px-[28px] gap-[10px] h-[52px] bg-[#525FE1] rounded-[10px] transition-all hover:bg-[#414cb1] hover:shadow-[0_6px_20px_rgba(82,95,225,0.35)] active:scale-[0.97]"
        >
          <UserCheck className="w-[17px] h-[17px] text-white" />
          <span className="font-['Poppins'] font-semibold text-[15px] text-white">
            Complete Your Profile
          </span>
        </button>

        <button
          onClick={() => navigate("/Calendar")}
          className="flex flex-row justify-center items-center cursor-pointer py-[14px] px-[28px] gap-[10px] h-[52px] bg-white border-[1.5px] border-[#525FE1] rounded-[10px] transition-all hover:bg-[#525FE1]/5 active:scale-[0.97]"
        >
          <Calendar className="w-[17px] h-[17px] text-[#525FE1]" />
          <span className="font-['Poppins'] font-semibold text-[15px] text-[#525FE1]">
            Manage Your Classes
          </span>
        </button>
      </div>
    </div>
  );
};

export default EmptyStudent;
