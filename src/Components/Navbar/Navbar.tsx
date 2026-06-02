import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useTeacherProfile } from '../../Features/Profile/Hooks/useTeacherProfile';
import bg_imptyPhoto from "../../assets/images/imptyPhoto.jpg";
import { BASE_URL } from '../../Features/Calendar/Utils/api';
import { useEffect, useState, useRef, Suspense } from 'react';
import logo from '../../assets/icons/logo.svg';
import notify from '../../../src/assets/icons/NotificationIcon.svg';
import UserProfileDropdown from './UserProfileDropdown';
import { CLoader } from '../UI/CLoader';
import { useStudentProfile } from '../../Features/Setting/Hooks/useStudentProfile';
import { roleToAuth } from '../../Utils/Constant';
import NotificationDropdown from '../../Features/Notification/Components/NotificationDropdown';
import { useNotifications } from '../../Features/Notification/Contexts/NotificationContext';

const Navbar = () => {
    const teacherData = useTeacherProfile();
    const studentData = useStudentProfile();
    const [isAuth, setIsAuth] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const notifRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    const { unreadCount } = useNotifications();

    const isTeacher = roleToAuth?.includes("Teacher");
    const data = isTeacher ? teacherData.data : studentData.data;

    const userName = isTeacher ? data?.data?.data?.fullName : data?.data?.firstName;
    const userEmail = isTeacher ? data?.data?.data?.email : data?.data?.email;
    const profilePic = isTeacher ? data?.data?.data?.profilePicturePath : data?.data?.fullProfilePiturePath;
    const avatarImage = profilePic && profilePic !== BASE_URL ? profilePic : bg_imptyPhoto;

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuth(!!token);

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
            if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
                setIsNotifOpen(false);
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
            <NavLink to="/landing" className="Logo">
                <h2 className="font-extrabold text-[#2A2D34] text-[28px] leading-[17px] tracking-normal">
                    <img src={logo} className='w-full h-full' alt="" />
                </h2>
            </NavLink>

            <div className="">
                <ul className="flex gap-[16px]">
                    <NavLink to="/home" className={navLinkClasses}>
                        <img src="../../../src/assets/icons/HomeIcon.svg" className='p-[2px]' alt="HomeIcon" />
                        <p className='text-[16px]'>Home</p>
                    </NavLink>
                    {!isTeacher && (
                        <NavLink to="/explore" className={navLinkClasses}>
                            <img src="../../../src/assets/icons/Explore.svg" className='p-[2px]' alt="ExploreTeacher" />
                            <p className='text-[16px]'>Explore Teacher</p>
                        </NavLink>
                    )}
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

            <div className="flex gap-[8px] items-center">
                <div className="relative" ref={notifRef}>
                    <button
                        onClick={() => setIsNotifOpen(prev => !prev)}
                        className="relative p-[2px] border border-[#D1D5DB] rounded-full flex justify-center items-center w-[37px] h-[37px] bg-white hover:bg-[#F3F4F6] transition-colors cursor-pointer"
                    >
                        <img src={notify} alt="NotificationIcon" />
                        {unreadCount > 0 && (
                            <span className="absolute -top-[5px] -right-[5px] min-w-[18px] h-[18px] bg-[#525FE1] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-[4px] leading-none">
                                {unreadCount > 99 ? "99+" : unreadCount}
                            </span>
                        )}
                    </button>

                    {isNotifOpen && (
                        <div className="absolute right-0 top-[calc(100%+10px)] z-50">
                            <NotificationDropdown onClose={() => setIsNotifOpen(false)} />
                        </div>
                    )}
                </div>

                <div className="relative" ref={dropdownRef}>
                    <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="p[13px] rounded-3xl flex justify-center items-center w-[37px] h-[37px] cursor-pointer"
                    >
                        <img className='w-[37px] h-[37px] rounded-e-full rounded-l-full object-cover' src={avatarImage} alt="Profile" />
                    </div>

                    {isDropdownOpen && (
                        <div className="absolute right-0 top-[calc(100%+10px)] z-50">
                            <UserProfileDropdown
                                userName={userName || "Ahmed Mohamed"}
                                userEmail={userEmail || "ahmed@email.com"}
                                avatarUrl={avatarImage}
                                onLogout={handleLogout}
                            />
                        </div>
                    )}
                </div>
            </div>
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