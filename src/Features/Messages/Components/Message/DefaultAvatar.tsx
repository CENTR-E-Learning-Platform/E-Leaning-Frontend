import React from "react";

interface DefaultAvatarProps {
  name?: string;
  className?: string;
}

const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
];

const DefaultAvatar: React.FC<DefaultAvatarProps> = ({ name, className = "" }) => {
  const safeName = name || "Unknown";
  const initials = safeName.substring(0, 2).toUpperCase();
  
  let hash = 0;
  for (let i = 0; i < safeName.length; i++) {
    hash = safeName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colorIndex = Math.abs(hash) % colors.length;
  const bgColor = colors[colorIndex];

  return (
    <div
      className={`flex items-center justify-center rounded-full text-white font-semibold ${bgColor} ${className}`}
    >
      {initials}
    </div>
  );
};

export default DefaultAvatar;
