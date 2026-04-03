import React from "react";

import { HeroBanner } from "../Components/HeroBanner";
import { RecommendedTeacherCard, type TeacherData } from "../Components/RecommendedTeacherCard";
import { StatCard } from "../Components/StatCard";
import { UpcomingClassItem, type UpcomingClassData } from "../Components/UpcomingClassItem";

import vector from "../../../assets/icons/fa6-solid_book.svg";
import image from "../../../assets/icons/Vector (28).svg";
import vector2 from "../../../assets/icons/Vector (29).svg";
import vector3 from "../../../assets/icons/mdi_human-greeting-variant.svg";
import vector4 from "../../../assets/icons/Vector (30).svg";
import tech from "../../../assets/images/zwng.jpg";


export const MainContentSection: React.FC = () => {
  // ==========================================
  // Mock Data
  // ==========================================
  const statsData = [
    {
      icon: <img className="relative w-[26px] h-[26px] aspect-[1]" alt="Vector" src={vector4} />,
      label: "Completed Classes",
      value: "25",
      labelWidth: "w-[138px]",
    },
    {
      icon: <div className="relative w-[26px] h-[26px] aspect-[1]"><img className="absolute w-[93.75%] h-[83.33%] top-[16.67%] left-[6.25%]" alt="Vector" src={vector3} /></div>,
      label: "Attendance",
      value: "90%",
      labelWidth: "w-[85px]",
    },
    {
      icon: <img className="relative w-[26px] h-[26px] aspect-[1]" alt="Vector" src={image} />,
      label: "Completed Homeworks",
      value: "25",
      labelWidth: "w-[166px]",
    },
    {
      icon:<img className="relative w-[26px] h-[26px] aspect-[1]" alt="Vector" src={vector} />,
      label: "Active Subjects",
      value: "2",
      labelWidth: "w-[108px]",
      iconWrapperClass: "flex w-14 items-center justify-center gap-2.5 p-[15px] relative bg-[#525fe133] rounded-lg",
    },
  ];

  const upcomingClassesData: UpcomingClassData[] = [
    { time: "8:30", period: "am", title: "The mole - class 3", subject: "Chemistry", subjectBg: "bg-[#daf3ff]", subjectText: "text-[#0182c2]", teacherImg: "/ellipse-4.svg", teacherName: "Mr. Naser elbatal", statusDot: "bg-[#cc3363]", statusText: "text-[#cc3363]", statusLabel: "2 min left", joinBg: "bg-[#525fe1]", titleContainerClass: "" },
    { time: "2:00", period: "pm", title: "Differential equations - Class 5", subject: "Pure mathematics", subjectBg: "bg-[#ffdddd]", subjectText: "text-[#601d1d]", teacherImg: "/ellipse-4-2.svg", teacherName: "Mr. Mohamed salama", statusDot: "bg-[#2db583]", statusText: "text-[#2db583]", statusLabel: "6 hr left", joinBg: "bg-[#525fe180]", titleContainerClass: "flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]" },
  ];

  const recommendedTeachersData: TeacherData[] = [
    { img: "/rectangle.png", name: "Mr. Ahmed Khalil", subject: "Physics", rating: "4.8", reviews: "(102)", price: "Egp 100", starIcon: "/vector-4.svg", lineIcon: "/line-50-2.svg" },
    { img: "/image.png", name: "Mr. Ahmed Khalil", subject: "Physics", rating: "4.8", reviews: "(102)", price: "Egp 100", starIcon: "/vector-5.svg", lineIcon: "/line-50-3.svg" },
    { img: "/rectangle-2.png", name: "Mr. Ahmed Khalil", subject: "Physics", rating: "4.8", reviews: "(102)", price: "Egp 100", starIcon: "/vector-6.svg", lineIcon: "/line-50-4.svg" },
  ];

  const messagesData = [
    { avatarClass: "relative w-[60px] h-[60px] bg-[url(/ellipse-4-3.svg)] bg-cover bg-[50%_50%]", avatarImg: null, name: "Mr. Mohamed salama", message: "Hello let me know if you want any help", unread: 1, online: true },
    { avatarClass: null, avatarImg: "/ellipse-5.svg", name: "Mr. Naser elbatal", message: "Hello let me know if you want any help", unread: 1, online: false },
  ];

  return (
    <div className="flex justify-center items-center mt-[50px]">
       <div className="flex flex-col w-[1200px] items-start gap-9 pb-10">
      
      {/* 1. Hero Banner */}
      <HeroBanner 
        date="Nov 22, 2025"
        title="Mohanad, your class starts soon!"
        subtitle="Advanced mathematics with mr.mohamed salama is scheduled for 10:30AM"
      />

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-4 grid-rows-[repeat(1,fit-content(100%))] h-fit gap-[18px_12px] w-full">
        {statsData.map((stat, index) => (
          <StatCard 
            key={index} 
            icon={stat.icon} 
            label={stat.label} 
            value={stat.value} 
            labelWidth={stat.labelWidth}
            iconWrapperClass={stat.iconWrapperClass}
          />
        ))}
      </div>

      {/* 3. Main Content Layout */}
      <div className="flex items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
        
        {/* --- Left Column --- */}
        <div className="flex flex-col w-[687px] items-end gap-9 relative">
          
          {/* Upcoming Classes Section */}
          <div className="flex flex-col min-w-[643px] items-start gap-7 px-6 py-[30px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#e8eaed]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-[#2a2d34] text-2xl tracking-[0] leading-[17px] whitespace-nowrap">
                Upcoming classes
              </div>
              <button className="bg-transparent border-none cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-0 relative flex-[0_0_auto] rounded-lg">
                <div className="relative w-fit mt-[-2.00px] font-medium text-[#525fe1] text-lg tracking-[0] leading-[13px] whitespace-nowrap">
                  View Schedule
                </div>
              </button>
            </div>
            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              {upcomingClassesData.map((cls, index) => (
                <UpcomingClassItem 
                  key={index} 
                  cls={cls} 
                  isLast={index === upcomingClassesData.length - 1} 
                />
              ))}
            </div>
          </div>

          {/* Recommended Teachers Section */}
          <div className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit font-bold text-[#2a2d34] text-2xl tracking-[0] leading-[17px] whitespace-nowrap">
                Recommended Teachers
              </div>
              <button className="bg-transparent border-none cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-3.5 relative flex-[0_0_auto] rounded-lg">
                <div className="relative w-fit mt-[-1.00px] font-medium text-[#525fe1] text-lg tracking-[0] leading-[13px] whitespace-nowrap">
                  Explore More
                </div>
              </button>
            </div>
            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
              {recommendedTeachersData.map((teacher, index) => (
                <RecommendedTeacherCard key={index} teacher={teacher} />
              ))}
            </div>
          </div>

        </div>

        {/* --- Right Column --- */}
        <div className="flex flex-col w-[483px] items-start gap-9 relative">
          
          {/* Recent Homeworks (Inline to avoid errors) */}
          <div className="flex flex-col min-w-[400px] items-start gap-7 px-6 py-[30px] w-full bg-white rounded-lg border border-solid border-[#e8eaed]">
            <div className="flex items-center justify-between w-full">
              <h2 className="font-bold text-[#2a2d34] text-2xl m-0">Recent Homeworks</h2>
              <button className="bg-transparent border-none cursor-pointer font-medium text-[#525fe1] text-lg">See all</button>
            </div>
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex flex-col items-end justify-end gap-3 w-full">
                <div className="flex items-center gap-4 w-full">
                  <div className="relative w-[60px] h-[60px] bg-[#daf3ff] rounded-xl flex items-center justify-center">
                    <div className="w-[27px] h-[42px] bg-blue-300" /> {/* Placeholder for Beaker */}
                  </div>
                  <div className="flex flex-col w-[229px] items-start gap-3">
                    <p className="font-semibold text-[#2a2d34] text-lg leading-[13px] m-0">The mole - Assignment 3</p>
                    <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-2 bg-[#daf3ff] rounded-[18px]">
                      <span className="font-semibold text-[#0182c2] text-base leading-[13px]">Chemistry</span>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2 w-[226px]">
                  <div className="w-2.5 h-2.5 bg-[#cc3363] rounded-full" />
                  <span className="font-normal text-[#cc3363] text-base leading-3">Submit before: mon 15 oct</span>
                </div>
              </div>
              <div className="w-full h-px bg-[#e8eaed]" />
              <div className="flex items-center justify-between w-full">
                <button className="bg-transparent cursor-pointer border-2 border-solid border-[#525fe1] items-center justify-center px-4 py-3.5 rounded-lg font-medium text-[#525fe1] text-lg">
                  View Details
                </button>
                <button className="cursor-pointer border-none bg-[#525fe1] items-center justify-center px-4 py-3.5 rounded-lg font-semibold text-[#f9fbfc] text-lg">
                  Upload
                </button>
              </div>
            </div>
          </div>

          {/* Recent Messages (Inline to avoid errors) */}
          <div className="flex flex-col min-w-[400px] items-center justify-center gap-7 px-6 py-[30px] w-full bg-white rounded-lg border border-solid border-[#e8eaed]">
            <div className="flex items-center justify-between w-full">
              <h2 className="font-bold text-[#2a2d34] text-2xl m-0">Recent messages</h2>
              <button className="bg-transparent border-none cursor-pointer font-medium text-[#525fe1] text-lg">See all</button>
            </div>
            <div className="flex flex-col items-center gap-4 w-full">
             <div className="box-border flex flex-row justify-center items-center p-[4px] gap-[32px] w-[256px] h-[45px] border border-solid border-[#D1D5DB] rounded-[64px] flex-none order-0 grow-0">
                <button className="flex flex-row justify-center items-center px-[16px] py-[12px] gap-[10px] w-[118px] h-[37px] bg-[#DCDFF9] rounded-[22px] border-none cursor-pointer flex-none order-0 grow-0">
                  <span className="w-[86px] h-[13px] font-['Poppins'] font-bold text-[18px] leading-[13px] text-[#2F3DDA] m-0 p-0 flex items-center justify-center whitespace-nowrap">
                    Teachers
                  </span>
                </button>
                <button className="box-border flex flex-row justify-center items-center px-[16px] py-[12px] gap-[10px] w-[98px] h-[37px] bg-transparent border-2 border-solid border-[#525FE1] rounded-[22px] cursor-pointer flex-none order-1 grow-0">
                  <span className="w-[66px] h-[13px] font-['Poppins'] font-medium text-[18px] leading-[13px] text-[#525FE1] m-0 p-0 flex items-center justify-center whitespace-nowrap">
                    Groups
                  </span>
                </button>
              </div>
              {messagesData.map((msg, index) => (
                <div key={index} className="flex flex-col items-start gap-5 w-full">
                  <div className="flex items-center gap-2 w-full">
                    {msg.avatarImg ? (
                      <img className="w-[60px] h-[60px] object-cover rounded-full" alt={msg.name} src={tech} />
                    ) : (
                      <div className={`w-[60px] h-[60px] ${msg.avatarClass || 'bg-gray-200'} rounded-full relative`}>
                        {msg.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-solid border-white" />}
                      </div>
                    )}
                    <div className="flex flex-col flex-1 items-start gap-1">
                      <span className="font-semibold text-[#2a2d34] text-lg leading-[13px]">{msg.name}</span>
                      <p className="font-medium text-[#6d7588] text-base leading-[13px] m-0 truncate w-[200px]">{msg.message}</p>
                    </div>
                    <div className="flex flex-col items-end justify-center w-6 h-6 bg-[#525fe1] rounded-full text-white font-medium text-xs items-center">
                      {msg.unread}
                    </div>
                  </div>
                  {index < messagesData.length - 1 && <div className="w-full h-px bg-[#e8eaed]" />}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
    </div>
  );
};