import React from "react";

interface DefaultAvatarProps {
  name?: string;
  className?: string;
}

const DefaultAvatar: React.FC<DefaultAvatarProps> = ({ name, className = "" }) => {
  const safeName = name || "Unknown";
  const initials = safeName.substring(0, 2).toUpperCase();

  return (
    <div
      className={`flex items-center justify-center rounded-full text-white font-semibold bg-[#525FE1] ${className}`}
    >
      {initials}
    </div>
  );
};

export default DefaultAvatar;
