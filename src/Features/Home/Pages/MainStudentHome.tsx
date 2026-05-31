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
import { useUpcomingClassesForStudent } from "../Hooks/useGetUpcomingClassesForStudent";
import { useStudentDashboardInfo } from "../Hooks/useGetStudentDashboardInfo";
import { useNavigate } from "react-router-dom";
import UpcomingEmpty from "../Components/EmptyState/UpcomingEmpty";
import { useRecommendedTeacher } from "../Hooks/useGetRecommendedTeacher";

export const MainStudentHome: React.FC = () => {
    const navigate = useNavigate();
  // Call API to get the dashboard info and pass it to the components as needed
  const { data: dataDashboard } = useStudentDashboardInfo();
  console.log("StudentDashboardInfo hook called", dataDashboard?.data?.data);
  const { data: dataUpcoming } = useUpcomingClassesForStudent();
  const {data: dataRecommended} = useRecommendedTeacher();
  console.log("UpcomingClasses Student hook called", dataUpcoming);
  console.log("RecommendedTeachers hook called", dataRecommended);

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
      value: dataDashboard?.data?.data?.completedClasses,
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
      value: `${dataDashboard?.data?.data?.attendancePercentage}%`,
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
      value: dataDashboard?.data?.data?.completedHomeworks || "0",
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
      value: dataDashboard?.data?.data?.activeSubjects,
      labelWidth: "w-[108px]",
      iconWrapperClass:
        "flex w-14 items-center justify-center gap-2.5 p-[15px] relative bg-[#525fe133] rounded-lg",
    },
  ];

  const classes: UpcomingClassData[] =
    dataUpcoming?.data?.data?.map((item: any) => ({
      time: item.sessionTime,
      period: item.period,
      title: item.sessionTitle,
      subject: item.subjectName,
      subjectBg: "bg-[#daf3ff]",
      subjectText: "text-[#0182c2]",
      teacherImg:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&h=150&auto=format&fit=crop",
      teacherName: item.teacherName || "Mr. Naser elbatal",
      statusDot: "bg-[#cc3363]",
      statusText: "text-[#cc3363]",
      statusLabel: item.status,
      joinBg: "bg-[#525fe1]",
    })) || [];

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
            {dataUpcoming?.data?.data?.length === 0 ? <UpcomingEmpty /> : <div className="flex flex-col min-w-[643px] items-start gap-7 px-6 py-[30px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#e8eaed]">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-bold text-[#2a2d34] text-2xl tracking-[0] leading-[17px] whitespace-nowrap">
                  Upcoming classes
                </div>
                <button className="bg-transparent border-none cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-0 relative flex-[0_0_auto] rounded-lg">
                  <div onClick={() => {
                        navigate("/Calendar");
                      }} className="relative w-fit mt-[-2.00px] font-medium text-[#525fe1] text-lg tracking-[0] leading-[13px] whitespace-nowrap">
                    View Schedule
                  </div>
                </button>
              </div>
              <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                {classes.map((cls: any, index: number) => (
                  <UpcomingClassItem
                    key={cls.id || index}
                    cls={cls}
                    isLast={index === classes.length - 1}
                  />
                ))}
              </div>
            </div>
            }
            

            <div className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit font-bold text-[#2a2d34] text-2xl tracking-[0] leading-[17px] whitespace-nowrap">
                  Recommended Teachers
                </div>
                <button className="bg-transparent border-none cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-3.5 relative flex-[0_0_auto] rounded-lg">
                  <div onClick={() => {
                        navigate("/explore");
                      }} className="relative w-fit mt-[-1.00px] font-medium text-[#525fe1] text-lg tracking-[0] leading-[13px] whitespace-nowrap">
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
            <RecentHomeworks />

            <RecentMessages />
          </div>
        </div>
      </div>
    </div>
  );
};
