import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { StatCard } from "../Components/StudentHome/StatCard";
import { HeroBanner } from "../Components/TeacherHome/HeroBanner";
import solid_book from "../../../assets/icons/fa6-solid_book.svg";
import rightIcon from "../../../assets/icons/Vector (28).svg";
import vector3 from "../../../assets/icons/mdi_human-greeting-variant.svg";
import mdi_people from "../../../assets/icons/mdi_people.svg";
import Dollar from "../../../assets/icons/Dollar.svg";
import StarIcon from "../../../assets/icons/StarIcon.svg";
import { roleToAuth } from "../../../Utils/Constant";
import RecentReviews from "../Components/TeacherHome/RecentReviews";
import { useTeacherDashboardInfo } from "../Hooks/useGetTeacherDashboardInfo";
import ActiveQuizzes from "../Components/TeacherHome/ActiveQuizzes";
import UpcomingClassesCard from "../Components/TeacherHome/UpcomingClassesCard";
import { useUpcomingClassesForTeacher } from "../Hooks/useGetUpcomingCalssesForTeacher";
import { useGetQuizzesTeacher } from "../Hooks/useGetQuizzesTeacher";
import RecentHomeworksEmpty from "../Components/EmptyState/RecentHomeworksEmpty";
import RecentMessagesEmpty from "../Components/EmptyState/RecentMessagesEmpty";

const MainTeacherHome = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const isTeacher = roleToAuth?.includes("Teacher") ? true : false;

  const { data: dataTeacherDashboardInfo } = useTeacherDashboardInfo();
  const { data: upcomingClassesDataTeacher } = useUpcomingClassesForTeacher();
  const { data: quizzesDataTeacher } = useGetQuizzesTeacher();
  const upcomingClasses =
    upcomingClassesDataTeacher?.data?.data ??
    upcomingClassesDataTeacher?.data ??
    [];

  const statsData = [
    {
      icon: (
        <img
          className="relative w-[26px] h-[26px] aspect-[1]"
          alt="Vector"
          src={rightIcon}
        />
      ),
      label: "Total Classes",
      value: (
        dataTeacherDashboardInfo?.data?.data?.classesCount ?? ""
      ).toString(),
      labelWidth: "w-[138px]",
    },
    {
      icon: (
        <div className="relative w-[26px] h-[26px] aspect-[1]">
          <img
            className="absolute w-[93.75%] h-[83.33%] top-[16.67%] left-[6.25%]"
            alt="Vector"
            src={isTeacher ? mdi_people : vector3}
          />
        </div>
      ),
      label: "Total Students",
      value: (
        dataTeacherDashboardInfo?.data?.data?.studentsCount ?? ""
      ).toString(),
      labelWidth: "w-[166px]",
    },
    {
      icon: (
        <img
          className="relative w-[26px] h-[26px] aspect-[1]"
          alt="Vector"
          src={isTeacher ? Dollar : rightIcon}
        />
      ),
      label: "Total Income",
      value: (
        dataTeacherDashboardInfo?.data?.data?.totalIncome ?? ""
      ).toString(),
      labelWidth: "w-[166px]",
    },
    {
      icon: (
        <img
          className="relative w-[26px] h-[26px] aspect-[1]"
          alt="Vector"
          src={isTeacher ? StarIcon : solid_book}
        />
      ),
      label: "Rating",
      value: (
        dataTeacherDashboardInfo?.data?.data?.teacherRating ?? ""
      ).toString(),
      labelWidth: "w-[108px]",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="MainTeacherHome">
        <div className="flex justify-center items-center mt-[50px]">
          <div className="flex flex-col w-[1200px] items-start gap-9 pb-10">
            {showSkeleton ? (
              <>
                <div className="w-full">
                  <Skeleton height={160} borderRadius={16} />
                </div>

                <div className="grid grid-cols-4 grid-rows-[repeat(1,fit-content(100%))] h-fit gap-[18px_12px] w-full">
                  <Skeleton height={110} borderRadius={16} />
                  <Skeleton height={110} borderRadius={16} />
                  <Skeleton height={110} borderRadius={16} />
                  <Skeleton height={110} borderRadius={16} />
                </div>

                <div className="flex items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col w-[687px] items-end gap-9 relative">
                    <div className="w-full">
                      <Skeleton height={320} borderRadius={16} />
                    </div>
                    <div className="w-full">
                      <Skeleton height={250} borderRadius={16} />
                    </div>
                  </div>
                  <div className="flex flex-col w-[453px] items-start gap-9 relative">
                    <div className="w-full">
                      <Skeleton height={180} borderRadius={16} />
                    </div>
                    <div className="w-full">
                      <Skeleton height={280} borderRadius={16} />
                    </div>
                    <div className="w-full">
                      <Skeleton height={180} borderRadius={16} />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <HeroBanner
                  date="Nov 22, 2025"
                  subtitle={`Welcome back, ${dataTeacherDashboardInfo?.data?.data?.teacherName}`}
                  title={`you have ${dataTeacherDashboardInfo?.data?.data?.classesCount} classes today`}
                />

                <div className="grid grid-cols-4 grid-rows-[repeat(1,fit-content(100%))] h-fit gap-[18px_12px] w-full">
                  {statsData.map((stat, index) => (
                    <StatCard
                      key={index}
                      icon={stat.icon}
                      label={stat.label}
                      value={stat.value}
                      labelWidth={stat.labelWidth}
                    />
                  ))}
                </div>

                <div className="flex items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col w-[687px] items-end gap-9 relative">
                    <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                      <UpcomingClassesCard upcomingClasses={upcomingClasses} />
                    </div>
                    <RecentReviews
                      reviews={
                        dataTeacherDashboardInfo?.data?.data?.recentReviews ?? []
                      }
                    />
                  </div>
                  <div className="flex flex-col w-[453px] items-start gap-9 relative">
                    <RecentHomeworksEmpty />
                    <ActiveQuizzes quizzes={quizzesDataTeacher?.data?.data ?? []} />
                    <RecentMessagesEmpty />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainTeacherHome;