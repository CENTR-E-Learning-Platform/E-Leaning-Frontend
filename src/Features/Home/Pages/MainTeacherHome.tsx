import { StatCard } from "../Components/StudentHome/StatCard";
import { HeroBanner } from "../Components/TeacherHome/HeroBanner";
import solid_book from "../../../assets/icons/fa6-solid_book.svg";
import rightIcon from "../../../assets/icons/Vector (28).svg";
import vector3 from "../../../assets/icons/mdi_human-greeting-variant.svg";
import mdi_people from "../../../assets/icons/mdi_people.svg";
import Dollar from "../../../assets/icons/Dollar.svg";
import StarIcon from "../../../assets/icons/StarIcon.svg";
import { roleToAuth } from "../../../Utils/Constant";
import RecentMessages from "../Components/TeacherHome/RecentMessages";
import RecentHomeworks from "../Components/TeacherHome/RecentHomeworks";
import RecentReviews from "../Components/TeacherHome/RecentReviews";
import { useTeacherDashboardInfo } from "../Hooks/useGetTeacherDashboardInfo";
import ActiveQuizzes from "../Components/TeacherHome/ActiveQuizzes";
import UpcomingClassesCard from "../Components/TeacherHome/UpcomingClassesCard";

const MainTeacherHome = () => {
  const isTeacher = roleToAuth?.includes("Teacher") ? true : false;

  // Call API to get the dashboard info and pass it to the components as needed
  const { data } = useTeacherDashboardInfo();
  console.log(data?.data?.data);


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
      value: (data?.data?.data?.classesCount ?? "").toString(),
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
      value: (data?.data?.data?.studentsCount ?? "").toString(),
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
      value: (data?.data?.data?.totalIncome ?? "").toString(),
      labelWidth: "w-[166px]",
    },
    {
      icon: (
        <img
          className="relative w-[26px] h-[26px] aspect-[1]"
          alt="Vector"
          // src={solid_book}
          
          src={isTeacher ? StarIcon : solid_book}
        />
      ),
      label: "Rating",
      value: (data?.data?.data?.teacherRating ?? "").toString(),
      labelWidth: "w-[108px]",
    },
  ];
  return (
    <>
      <section className="MainTeacherHome">
        <div className="flex justify-center items-center mt-[50px]">
          <div className="flex flex-col w-[1200px] items-start gap-9 pb-10">
            <HeroBanner
              date="Nov 22, 2025"
              subtitle={`Welcome back, ${data?.data?.data?.teacherName}`}
              title={`you have ${data?.data?.data?.classesCount} classes today`}
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
                    <UpcomingClassesCard />
                  </div>
                <RecentReviews />
              </div>
              <div className="flex flex-col w-[453px] items-start gap-9 relative">
                <RecentHomeworks />
                <ActiveQuizzes/>
                <RecentMessages />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainTeacherHome;
