import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import AboutTeacher from "../Components/ViewStudent/AboutTeacher";
import AboutMe from "../Components/ViewTeacher/AboutMe";
import ManageSchedule from "../Components/ViewTeacher/ManageSchedule";
import MyStudentSay from "../Components/ViewTeacher/MyStudentSay";
import ProfileHeader from "../Components/ViewTeacher/ProfileHeader";
import ResumeMe from "../Components/ViewTeacher/ResumeMe";
import Verifications from "../Components/ViewTeacher/Verifications";
import { useTeacherProfile } from "../Hooks/useTeacherProfile";
import { BASE_URL } from "../Utils/Apis";
import { StudentProfileContext } from "../Contexts/StudentProfileContext";

const ViewTeacher = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const { data, isLoading } = useTeacherProfile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StudentProfileContext.Provider
        value={{
          teacherProfile: data?.data?.data ?? null,
          isLoading: isLoading ?? false,
        }}
      >
        <section className="ProfileStudent-section bg-[#F9FBFC] min-h-screen pb-10">
          {showSkeleton ? (
            <>
              <div className="w-full relative">
                <Skeleton height={220} className="!block" />
                <div className="px-60 -mt-12 flex items-end gap-6 relative z-10">
                  <div className="bg-white rounded-full p-1">
                    <Skeleton circle width={130} height={130} />
                  </div>
                  <div className="mb-4">
                    <Skeleton width={250} height={32} />
                    <Skeleton width={180} height={20} className="mt-2" />
                  </div>
                </div>
              </div>

              <div className="flex px-60 mt-12 justify-between items-start gap-16">
                <div className="right-content flex-1 flex flex-col gap-8 w-full">
                  <Skeleton height={220} borderRadius={16} />
                  <Skeleton height={180} borderRadius={16} />
                  <Skeleton height={250} borderRadius={16} />
                  <Skeleton height={200} borderRadius={16} />
                </div>

                <div className="left-content sticky top-4 w-[380px]">
                  <Skeleton height={550} borderRadius={16} />
                </div>
              </div>
            </>
          ) : (
            <>
              <ProfileHeader />

              <div className="flex px-60 mt-12 justify-between items-start gap-16">
                <div className="right-content w-full flex-1">
                  {data?.data?.data?.introVideoPath !== BASE_URL ||
                  data?.data?.data?.bio !== null ? (
                    <AboutTeacher />
                  ) : (
                    <AboutMe />
                  )}

                  <Verifications />

                  {data?.data?.data?.reviews?.length === 0 && <MyStudentSay />}

                  <ResumeMe />
                </div>

                <div className="left-content sticky top-4">
                  <ManageSchedule />
                </div>
              </div>
            </>
          )}
        </section>
      </StudentProfileContext.Provider>
    </>
  );
};

export default ViewTeacher;