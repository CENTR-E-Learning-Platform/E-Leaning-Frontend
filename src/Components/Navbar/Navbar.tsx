import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return <>
    <nav className="py-[20px] h-[96px] w-full px-[40px] bg-white flex justify-between items-center">
        <div className="Logo">
            <h2 className="font-extrabold text-[#2A2D34] text-[28px] leading-[17px] tracking-normal">
                centr
            </h2>
        </div>
        <div className="">
            <ul className="flex gap-[16px]">
                <NavLink to={"/home"} className="font-medium flex gap-[8px] justify-between items-center text-[16px] leading-[24px] text-[#2A2D34] cursor-pointer">
                    <img src="../../../src/assets/icons/HomeIcon.svg" className='p-[2px]' alt="HomeIcon" />
                    <p className='font-[18px]'>Home</p>
                </NavLink>
                <NavLink to={"exploreTeacher"} className="w-[178px] h-[56px] flex justify-between items-center text-[16px] leading-[24px] text-[#2A2D34] cursor-pointer">
                    <img src="../../../src/assets/icons/Explore.svg" alt="ExploreTeacher" />
                    <p className='font-medium'>Explore Teacher</p>
                </NavLink>
                <NavLink to={"mySubjects"} className="font-medium w-[140px] h-[56px] flex justify-between items-center text-[16px] leading-[24px] text-[#2A2D34] cursor-pointer">
                    <img src="../../../src/assets/icons/Mysubjects.svg" alt="Mysubjects" />
                    <p className='font-medium'>My subjects</p>
                </NavLink>
                <NavLink to={"schedule"} className="font-medium w-[117px] h-[56px] flex justify-between items-center text-[16px] leading-[24px] text-[#2A2D34] cursor-pointer">
                    <img src="../../../src/assets/icons/Schedule.svg" alt="Schedule" />
                    <p className='font-medium'>Schedule</p>
                </NavLink>
                <NavLink to={"messages"} className="font-medium w-[124px] h-[56px] flex justify-between items-center text-[16px] leading-[24px] text-[#2A2D34] cursor-pointer">
                    <img src="../../../src/assets/icons/Messages.svg" alt="Messages" />
                    <p className='font-medium'>Messages</p>
                </NavLink>
            </ul>

        </div>


        <div className="">
           
           <NavLink to={"notification"} className="flex gap-[16px] ">
                <div className="p[13px] border-2 rounded-3xl border-[#D1D5DB] flex justify-center items-center w-[50px] h-[50px]">
                    <img src="../../../src/assets/icons/NotificationIcon.svg" alt="NotificationIcon" />
                </div>

                <div className="p[13px] rounded-3xl flex justify-center items-center w-[50px] h-[50px]">
                    <img className='w-[50px] h-[50px] rounded-e-full rounded-l-full' src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg" alt="Profile" />
                </div>
            </NavLink>
        </div>
    </nav>
  </>
}

export default Navbar