import React from "react";

import { HeroBanner } from "../Components/StudentHome/HeroBanner";
import {
  RecommendedTeacherCard,
  type TeacherData,
} from "../Components/StudentHome/RecommendedTeacherCard";
import { StatCard } from "../Components/StudentHome/StatCard";
import {
  UpcomingClassItem,
  type UpcomingClassData,
} from "../Components/StudentHome/UpcomingClassItem";

import vector from "../../../assets/icons/fa6-solid_book.svg";
import image from "../../../assets/icons/Vector (28).svg";
import vector3 from "../../../assets/icons/mdi_human-greeting-variant.svg";
import RecentMessages from "../Components/StudentHome/RecentMessages";
import RecentHomeworks from "../Components/StudentHome/RecentHomeworks";

export const MainStudentHome: React.FC = () => {

  const statsData = [
    {
      icon: (
        <img
          className="relative w-[26px] h-[26px] aspect-[1]"
          alt="Vector"
          src={image}
        />
      ),
      label: "Completed Classes",
      value: "25",
      labelWidth: "w-[138px]",
    },
    {
      icon: (
        <div className="relative w-[26px] h-[26px] aspect-[1]">
          <img
            className="absolute w-[93.75%] h-[83.33%] top-[16.67%] left-[6.25%]"
            alt="Vector"
            src={vector3}
          />
        </div>
      ),
      label: "Attendance",
      value: "90%",
      labelWidth: "w-[85px]",
    },
    {
      icon: (
        <img
          className="relative w-[26px] h-[26px] aspect-[1]"
          alt="Vector"
          src={image}
        />
      ),
      label: "Completed Homeworks",
      value: "25",
      labelWidth: "w-[166px]",
    },
    {
      icon: (
        <img
          className="relative w-[26px] h-[26px] aspect-[1]"
          alt="Vector"
          src={vector}
        />
      ),
      label: "Active Subjects",
      value: "2",
      labelWidth: "w-[108px]",
      iconWrapperClass:
        "flex w-14 items-center justify-center gap-2.5 p-[15px] relative bg-[#525fe133] rounded-lg",
    },
  ];

  const upcomingClassesData: UpcomingClassData[] = [
    {
      time: "8:30",
      period: "am",
      title: "The mole - class 3",
      subject: "Chemistry",
      subjectBg: "bg-[#daf3ff]",
      subjectText: "text-[#0182c2]",
      teacherImg: "/ellipse-4.svg",
      teacherName: "Mr. Naser elbatal",
      statusDot: "bg-[#cc3363]",
      statusText: "text-[#cc3363]",
      statusLabel: "2 min left",
      joinBg: "bg-[#525fe1]",
      titleContainerClass: "",
    },
    {
      time: "2:00",
      period: "pm",
      title: "Differential equations - Class 5",
      subject: "Pure mathematics",
      subjectBg: "bg-[#ffdddd]",
      subjectText: "text-[#601d1d]",
      teacherImg: "/ellipse-4-2.svg",
      teacherName: "Mr. Mohamed salama",
      statusDot: "bg-[#2db583]",
      statusText: "text-[#2db583]",
      statusLabel: "6 hr left",
      joinBg: "bg-[#525fe180]",
      titleContainerClass:
        "flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",
    },
  ];

  const recommendedTeachersData: TeacherData[] = [
    {
      img: "/rectangle.png",
      name: "Mr. Ahmed Khalil",
      subject: "Physics",
      rating: "4.8",
      reviews: "(102)",
      price: "Egp 100",
      starIcon: "/vector-4.svg",
      lineIcon: "/line-50-2.svg",
    },
    {
      img: "/image.png",
      name: "Mr. Ahmed Khalil",
      subject: "Physics",
      rating: "4.8",
      reviews: "(102)",
      price: "Egp 100",
      starIcon: "/vector-5.svg",
      lineIcon: "/line-50-3.svg",
    },
    {
      img: "/rectangle-2.png",
      name: "Mr. Ahmed Khalil",
      subject: "Physics",
      rating: "4.8",
      reviews: "(102)",
      price: "Egp 100",
      starIcon: "/vector-6.svg",
      lineIcon: "/line-50-4.svg",
    },
  ];

  return (
    <div className="flex justify-center items-center mt-[50px]">
      <div className="flex flex-col w-[1200px] items-start gap-9 pb-10">
        <HeroBanner
          date="Nov 22, 2025"
          title="Mohanad, your class starts soon!"
          subtitle="Advanced mathematics with mr.mohamed salama is scheduled for 10:30AM"
        />

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

        <div className="flex items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[687px] items-end gap-9 relative">
            
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

          <div className="flex flex-col w-[453px] items-start gap-9 relative">
            
            <RecentHomeworks/>
            
            <RecentMessages/>

          </div>
        </div>
      </div>
    </div>
  );
};
