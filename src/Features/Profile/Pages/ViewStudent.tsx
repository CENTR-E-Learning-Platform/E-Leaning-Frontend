import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import ProfileHeader from "../Components/ViewStudent/ProfileHeader";
import TeacherStats from "../Components/ViewStudent/TeacherStats";
import AboutTeacher from "../Components/ViewStudent/AboutTeacher";
import TeactherVerifications from "../Components/ViewStudent/TeactherVerifications";
import StudentsSay from "../Components/ViewStudent/StudentsSay";
import TeacherResume from "../Components/ViewStudent/TeacherResume";
import AvailableClasses from "../Components/ViewStudent/AvailableClasses";
import {
  StudentProfileContext,
  type TeacherProfileData,
} from "../Contexts/StudentProfileContext";
import { useStudentProfile } from "../Hooks/useViewStudentProfile";

const ViewStudent = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const { mutate, isPending } = useStudentProfile();
  const [teacherProfile, setTeacherProfile] = useState<TeacherProfileData | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cached = localStorage.getItem("viewStudentProfileData");
    if (cached) {
      try {
        setTeacherProfile(JSON.parse(cached));
      } catch (err) {
        console.log(err);
      }
    }

    const teacherId = localStorage.getItem("viewStudentTeacherId");
    if (teacherId) {
      mutate(teacherId, {
        onSuccess: (response) => {
          const profileData = response?.data?.data ?? null;
          if (profileData) {
            setTeacherProfile(profileData);
            localStorage.setItem(
              "viewStudentProfileData",
              JSON.stringify(profileData)
            );
          }
        },
      });
    }
  }, []);

  return (
    <StudentProfileContext.Provider
      value={{ teacherProfile, isLoading: isPending }}
    >
      <React.Fragment>
        <section className="MainProfileTeacther min-h-screen pb-10">
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

              <div className="flex px-60 mt-30 justify-between items-start gap-16">
                <div className="right-content flex-1 flex flex-col gap-8 w-full">
                  <Skeleton height={100} borderRadius={16} />
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

              <div className="flex px-60 mt-30 justify-between items-start gap-16">
                <div className="right-content w-full flex-1">
                  <TeacherStats />
                  <AboutTeacher />
                  <TeactherVerifications />
                  <StudentsSay />
                  <TeacherResume />
                </div>

                <div className="left-content sticky top-4">
                  <AvailableClasses />
                </div>
              </div>
            </>
          )}
        </section>
      </React.Fragment>
    </StudentProfileContext.Provider>
  );
};

export default ViewStudent;