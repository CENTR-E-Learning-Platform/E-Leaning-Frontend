import { Bell, CreditCard, ShieldCheck, User } from "lucide-react";

import { NavLink, Outlet } from "react-router-dom";


const MainSetting = () => {
    type NavItem = {
        label: string;
        icon: React.ReactNode;
        to: string;
    };

    
 
    const navItems: NavItem[] = [
        { label: "Profile",      icon: <User size={18} strokeWidth={1.6} />,       to: "/setting/profile" },
        { label: "Financial",    icon: <CreditCard size={18} strokeWidth={1.6} />, to: "/setting/financial" },
        { label: "Security",     icon: <ShieldCheck size={18} strokeWidth={1.6} />,to: "/setting/security" },
        { label: "Notification", icon: <Bell size={18} strokeWidth={1.6} />,       to: "/setting/notification" },
    ];

  return <>
    <section className="main-setting">
        <div className="ml-[273px] mt-[50px] flex gap-[63px]">
            <div className="left-static-setting text-[#2A2D34]">

                <h2 className="font-bold text-[32px] leading-[13px]">
                    Settings
                </h2>

                <div className="Side-Bar mt-[50px]">
                    <aside className="relative flex flex-col w-[163px]">

                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full" />
                    
                        {navItems.map(({ label, icon, to }) => (
                            <NavLink
                            key={label}
                            to={to}
                             className={({ isActive }) =>
                                `relative flex border-l-4 items-center gap-3 pl-5 pr-5 py-4 text-[16px] font-medium transition-all duration-200
                                ${isActive ? "border-[#525FE1]" : "border-transparent hover:border-[#525FE1]"}`
                            }
                            >
                            {icon}
                            {label}
                            </NavLink>
                        ))}
                    </aside>

                </div>
            </div>
            <div className="right-dynamic-setting mt-[50px]">
                <Outlet />
            </div>
        </div>
    </section>
  </>
}

export default MainSetting