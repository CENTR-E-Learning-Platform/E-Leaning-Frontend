import { StatCard } from "../Components/StudentHome/StatCard";
import { HeroBanner } from "../Components/TeacherHome/HeroBanner";
import vector from "../../../assets/icons/fa6-solid_book.svg";
import image from "../../../assets/icons/Vector (28).svg";
import vector3 from "../../../assets/icons/mdi_human-greeting-variant.svg";
import {
  UpcomingClassItem,
  type UpcomingClassData,
} from "../Components/TeacherHome/UpcomingClassItem";
import RecentMessages from "../Components/TeacherHome/RecentMessages";
import RecentHomeworks from "../Components/TeacherHome/RecentHomeworks";
import RecentReviews from "../Components/TeacherHome/RecentReviews";
import { useTeacherDashboardInfo } from "../Hooks/useGetTeacherDashboardInfo";
import { useNavigate } from "react-router-dom";

const MainTeacherHome = () => {

  const navigate = useNavigate();

  // Call API to get the dashboard info and pass it to the components as needed
    const {data} = useTeacherDashboardInfo();
    console.log(data?.data?.data);

  const upcomingClassesData: UpcomingClassData[] = [
    {
      time: "8:30",
      period: "am",
      title: "The mole - class 3",
      subject: "Chemistry",
      subjectBg: "bg-[#daf3ff]",
      subjectText: "text-[#0182c2]",
      teacherImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
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
      teacherImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&h=150&auto=format&fit=crop",
      teacherName: "Mr. Mohamed salama",
      statusDot: "bg-[#2db583]",
      statusText: "text-[#2db583]",
      statusLabel: "6 hr left",
      joinBg: "bg-[#525fe180]",
      titleContainerClass:
        "flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",
    },
  ];
  const statsData = [
    {
      icon: (
        <img
          className="relative w-[26px] h-[26px] aspect-[1]"
          alt="Vector"
          src={image}
        />
      ),
      label: "Total Classes",
      value: (data?.data?.data?.classesCount ??"").toString(),
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
      label: "Total Students",
      value: (data?.data?.data?.studentsCount ?? "").toString(),
      labelWidth: "w-[166px]",
    },
    {
      icon: (
        <img
          className="relative w-[26px] h-[26px] aspect-[1]"
          alt="Vector"
          src={image}
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
          src={vector}
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
              title="you have 3 classes today"
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
                <div className="flex flex-col min-w-[643px] items-start gap-7 px-6 py-[30px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#e8eaed]">
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
                    {upcomingClassesData.map((cls, index) => (
                      <UpcomingClassItem
                        key={index}
                        cls={cls}
                        isLast={index === upcomingClassesData.length - 1}
                      />
                    ))}
                  </div>
                </div>
                <RecentReviews />
              </div>
              <div className="flex flex-col w-[453px] items-start gap-9 relative">
                <RecentHomeworks />
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
