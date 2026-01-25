import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return <>
    <nav className="py-[20px] h-[96px] w-full border border-b-2 border-[#D1D5DB] px-[40px] bg-white flex justify-between items-center">
        <div className="Logo">
            <h2 className="font-extrabold text-[#2A2D34] text-[28px] leading-[17px] tracking-normal">
                centr
            </h2>
        </div>

        <div className="">
            <ul className="flex gap-[16px]">
                <NavLink to={"/home"} className="font-medium p-4 flex gap-[8px] justify-between items-center text-[16px] leading-[24px] text-[#2A2D34] cursor-pointer">
                    <img src="../../../src/assets/icons/HomeIcon.svg" className='p-[2px]' alt="HomeIcon" />
                    <p className='font-[18px]'>Home</p>
                </NavLink>
                <NavLink to={"exploreTeacher"} className="font-medium p-4 gap-[8px] flex justify-between items-center text-[16px] leading-[24px] text-[#2A2D34] cursor-pointer">
                    <img src="../../../src/assets/icons/Explore.svg" className='p-[2px]' alt="ExploreTeacher" />
                    <p className='font-[18px]'>Explore Teacher</p>
                </NavLink>
                <NavLink to={"mySubjects"} className="font-medium p-4 gap-[8px] flex justify-between items-center text-[16px] leading-[24px] text-[#2A2D34] cursor-pointer">
                    <img src="../../../src/assets/icons/Mysubjects.svg" className='p-[2px]' alt="Mysubjects" />
                    <p className='font-[18px]'>My subjects</p>
                </NavLink>
                <NavLink to={"schedule"} className="font-medium p-4 gap-[8px] flex justify-between items-center text-[16px] leading-[24px] text-[#2A2D34] cursor-pointer">
                    <img src="../../../src/assets/icons/Schedule.svg" className='p-[2px]' alt="Schedule" />
                    <p className='font-[18px]'>Schedule</p>
                </NavLink>
                <NavLink to={"messages"} className="font-medium p-4 gap-[8px] flex justify-between items-center text-[16px] leading-[24px] text-[#2A2D34] cursor-pointer">
                    <img src="../../../src/assets/icons/Messages.svg" className='p-[2px]' alt="Messages" />
                    <p className='font-[18px]'>Messages</p>
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