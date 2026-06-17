import React, { useEffect, useState } from "react";
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
  const { mutate, isPending } = useStudentProfile();
  const [teacherProfile, setTeacherProfile] =
    useState<TeacherProfileData | null>(null);

  useEffect(() => {
    const cached = localStorage.getItem("viewStudentProfileData");
    if (cached) {
      try {
        setTeacherProfile(JSON.parse(cached));
      } catch (err) {
        console.log(err)
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
        <section className="MainProfileTeacther">
          <ProfileHeader />

          <div className="flex px-60 mt-30 justify-between items-start gap-16">
            <div className="right-content">
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
        </section>
      </React.Fragment>
    </StudentProfileContext.Provider>
  );
};

export default ViewStudent;
