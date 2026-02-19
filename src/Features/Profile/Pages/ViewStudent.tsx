import React from "react";
import ProfileHeader from "../Components/ViewStudent/ProfileHeader";
import TeacherStats from "../Components/ViewStudent/TeacherStats";
import AboutTeacher from "../Components/ViewStudent/AboutTeacher";
import TeactherVerifications from "../Components/ViewStudent/TeactherVerifications";
import StudentsSay from "../Components/ViewStudent/StudentsSay";
import TeacherResume from "../Components/ViewStudent/TeacherResume";
import AvailableClasses from "../Components/ViewStudent/AvailableClasses";

const ViewStudent = () => {
  return (
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
  );
};

export default ViewStudent;
