import React from "react";
import ProfileHeader from "./ProfileHeader";
import TeacherStats from "./TeacherStats";
import AboutTeacher from "./AboutTeacher";
import TeactherVerifications from "./TeactherVerifications";
import StudentsSay from "./StudentsSay";
import TeacherResume from "./TeacherResume";
import AvailableClasses from "./AvailableClasses";


const MainProfileTeacther = () => {
  return (
    <React.Fragment>
      <section className="MainProfileTeacther">

       <ProfileHeader/>

        <div className="flex px-60 mt-30 justify-between items-start gap-16">

          <div className="right-content">

            <TeacherStats/>

            <AboutTeacher/>

            <TeactherVerifications/>

            <StudentsSay/>

            <TeacherResume/>

          </div>
          
          <div className="left-content sticky top-4">
            <AvailableClasses/>
          </div>
        </div>
        

      </section>
    </React.Fragment>
  );
};

export default MainProfileTeacther;
