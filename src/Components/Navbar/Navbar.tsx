import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useTeacherProfile } from '../../Features/Profile/Hooks/useTeacherProfile';
import bg_imptyPhoto from "../../assets/images/imptyPhoto.jpg";
import { BASE_URL } from '../../Features/Calendar/Utils/api';
import { useEffect, useState, useRef, Suspense } from 'react';
import logo from '../../assets/icons/logo.svg';
import notify from '../../../src/assets/icons/NotificationIcon.svg';
import UserProfileDropdown from './UserProfileDropdown';
import { CLoader } from '../UI/CLoader'; 

const Navbar = () => {
    const { data } = useTeacherProfile(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
        
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuth(false);
        setIsDropdownOpen(false);
    };

    const navLinkClasses = ({ isActive }: any) => {
        const baseClasses = "relative font-medium p-2 flex gap-[8px] justify-between items-center text-[16px] leading-[24px] cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#525FE1] after:transition-all after:duration-300 hover:after:w-full";
        
        return `${baseClasses} ${isActive ? 'text-[#525FE1] after:w-full' : 'text-[#2A2D34] after:w-0'}`;
    };

    return <>
        <nav className="py-[20px] h-[66px] w-full shadow-[0px_20px_40px_rgba(0,6,69,0.04)] border-[#D1D5DB] px-[40px] bg-white flex justify-between items-center">
            <div className="Logo">
                <h2 className="font-extrabold text-[#2A2D34] text-[28px] leading-[17px] tracking-normal">
                    <img src={logo} className='w-full h-full' alt="" />
                </h2>
            </div>

            <div className="">
                <ul className="flex gap-[16px]">
                    <NavLink to="/home" className={navLinkClasses}>
                        <img src="../../../src/assets/icons/HomeIcon.svg" className='p-[2px]' alt="HomeIcon" />
                        <p className='text-[16px]'>Home</p>
                    </NavLink>
                    <NavLink to="/explore" className={navLinkClasses}>
                        <img src="../../../src/assets/icons/Explore.svg" className='p-[2px]' alt="ExploreTeacher" />
                        <p className='text-[16px]'>Explore Teacher</p>
                    </NavLink>
                    <NavLink to="/Calendar" className={navLinkClasses}>
                        <img src="../../../src/assets/icons/Schedule.svg" className='p-[2px]' alt="Schedule" />
                        <p className='text-[16px]'>Schedule</p>
                    </NavLink>
                    <NavLink to="/messages" className={navLinkClasses}>
                        <img src="../../../src/assets/icons/Messages.svg" className='p-[2px]' alt="Messages" />
                        <p className='text-[16px]'>Messages</p>
                    </NavLink>
                </ul>
            </div>

            {isAuth ?
                <div className="flex gap-[8px]">
                    <NavLink to="/notification" className="">
                        <div className="p[13px] border-1 rounded-3xl border-[#D1D5DB] flex justify-center items-center w-[37px] h-[37px]">
                            <img src={notify} alt="NotificationIcon" />
                        </div>
                    </NavLink>
                    
                    <div className="relative" ref={dropdownRef}>
                        <div
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="p[13px] rounded-3xl flex justify-center items-center w-[37px] h-[37px] cursor-pointer">
                            <img className='w-[37px] h-[37px] rounded-e-full rounded-l-full' src={data?.data.fullPrfilePicturePath !== BASE_URL ? data?.data.fullPrfilePicturePath : bg_imptyPhoto} alt="Profile" />
                        </div>

                        {isDropdownOpen && (
                            <div className="absolute right-0 top-[calc(100%+10px)] z-50">
                                <UserProfileDropdown 
                                    userName={data?.data?.fullName || "Ahmed Mohamed"} 
                                    userEmail={data?.data?.email || "ahmed@email.com"}
                                    avatarUrl={data?.data?.fullPrfilePicturePath !== BASE_URL ? data?.data?.fullPrfilePicturePath : bg_imptyPhoto}
                                    onLogout={handleLogout} 
                                />
                            </div>
                        )}
                    </div>
                </div> :
                <div className="flex items-center gap-[24px]">
                    <NavLink
                        to="/login"
                        className="text-[16px] font-bold text-[#2A2D34] hover:text-[#525FE1] transition-colors duration-300"
                    >
                        Log in
                    </NavLink>
                    <NavLink
                        to="/auth"
                        className="px-[24px] py-[10px] bg-[#525FE1] text-white text-[16px] font-semibold rounded-full shadow-sm hover:bg-[#404DDD] hover:shadow-md hover:-translate-y-[2px] transition-all duration-300"
                    >
                        Sign up
                    </NavLink>
                </div>
            }
        </nav>

        <main className="w-full">
            <Suspense 
            key={location.pathname}
                fallback={
                    <div className="flex justify-center items-center w-full h-[calc(100vh-66px)]">
                        <CLoader size="md" label="" />
                    </div>
                }
            >
                <Outlet />
            </Suspense>
        </main>
    </>
}

export default Navbar;