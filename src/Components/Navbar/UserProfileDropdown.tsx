import React from 'react';
import { NavLink } from 'react-router-dom';
import profileIcon from '../../assets/icons/sideProfile.svg';
import walletIcon from '../../assets/icons/wallet.svg';
import settingsIcon from '../../assets/icons/setting.svg';
import logoutIcon from '../../assets/icons/logout.svg';
import userAvatar from '../../assets/icons/profile.svg';
import { roleToAuth } from '../../Utils/Constant';
interface UserProfileDropdownProps {
  userName?: string;
  userEmail?: string;
  avatarUrl?: string;
  onLogout?: () => void;
}

const UserProfileDropdown: React.FC<UserProfileDropdownProps> = ({
  userName = 'Ahmed Mohamed',
  userEmail = 'ahmed@email.com',
  avatarUrl = userAvatar,
  onLogout,
}) => {

  const handleLogout = (e: any) => {
    localStorage.removeItem('token');

    if (onLogout) {
      onLogout();
      e.preventDefault();
      window.location.href = "http://localhost:5173/landing";

    }
  };

  return (
    <div className="box-border flex flex-col items-start p-[8px] w-[256px] bg-white border border-[#E8EAED] shadow-[0px_20px_40px_rgba(0,19,85,0.12)] rounded-[12px] font-['Poppins']">
      <div className="box-border flex flex-row justify-between items-center p-[12px] w-[240px] h-[60px] border border-[#E8EAED] drop-shadow-[0px_2px_12px_rgba(0,0,0,0.04)] rounded-[8px]">
        <div className="flex flex-col items-start w-[130px] ">
          <h2 className="flex items-center m-0 font-semibold text-[14px] leading-[20px] text-[#2A2D34] truncate">
            {userName}
          </h2>
          <span className="flex items-center font-normal text-[12px] leading-[16px] text-[#434656] truncate">
            {userEmail}
          </span>
        </div>
        <img src={avatarUrl} alt="User Avatar" className="w-[36px] h-[36px] rounded-full object-cover" />
      </div>

      <div className="flex flex-col items-center py-[8px] w-[240px]">
        {roleToAuth?.includes("Teacher") && (
          <NavLink
            to="/profile"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/profile";
            }}
            className="flex flex-row items-center py-[10px] pr-[16px] pl-[12px] gap-[12px] w-full bg-transparent border-none cursor-pointer hover:bg-[#F9FAFB] transition-colors rounded-[6px] no-underline"
          >
            <img src={profileIcon} alt="Profile Icon" className="w-[13.33px] h-[13.33px]" />
            <span className="flex items-center font-medium text-[14px] leading-[20px] text-[#434656]">My Profile</span>
          </NavLink>
        )}

        {!roleToAuth?.includes("Teacher") && (
          <NavLink
            to="/payment"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/payment";
            }}
            className="flex flex-row items-center py-[10px] pr-[16px] pl-[12px] gap-[12px] w-full bg-transparent border-none cursor-pointer hover:bg-[#F9FAFB] transition-colors rounded-[6px] no-underline"
          >
            <img src={walletIcon} alt="Wallet Icon" className="w-[16px] h-[15px] object-contain" />
            <span className="flex items-center font-medium text-[14px] leading-[20px] text-[#434656]">Payment</span>
          </NavLink>
        )}

        <NavLink
          to={(roleToAuth?.includes("Teacher") ? "/setting/financial" : "/setting/profile")}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = (roleToAuth?.includes("Teacher") ? "/setting/financial" : "/setting/profile");
          }}
          className="flex flex-row items-center pt-[10px] pb-[14px] pr-[16px] pl-[12px] gap-[12px] w-full bg-transparent border-none cursor-pointer hover:bg-[#F9FAFB] transition-colors rounded-[6px] no-underline"
        >
          <img src={settingsIcon} alt="Settings Icon" className="w-[16.75px] h-[16.67px]" />
          <span className="flex items-center font-medium text-[14px] leading-[20px] text-[#434656]">Settings</span>
        </NavLink>

        <div className="box-border w-[224px] h-[1px] border-t border-[#E6E8ED]"></div>

        <button
          onClick={handleLogout}

          className="flex flex-row items-center pt-[14px] pb-[10px] pr-[16px] pl-[12px] gap-[12px] w-full bg-transparent border-none cursor-pointer hover:bg-[#FEF2F2] transition-colors rounded-[6px] mt-[4px]"
        >
          <img src={logoutIcon} alt="Logout Icon" className="w-[15px] h-[15px]" />
          <span className="flex items-center font-medium text-[14px] leading-[20px] text-[#BA1A1A]">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfileDropdown;