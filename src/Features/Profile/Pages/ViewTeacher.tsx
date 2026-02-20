import AboutMe from "../Components/ViewTeacher/AboutMe"
import ManageSchedule from "../Components/ViewTeacher/ManageSchedule"
import MyStudentSay from "../Components/ViewTeacher/MyStudentSay"
import ProfileHeader from "../Components/ViewTeacher/ProfileHeader"
import ResumeMe from "../Components/ViewTeacher/ResumeMe"
import Verifications from "../Components/ViewTeacher/Verifications"

const ViewTeacher = () => {
  return <>

    <section className="ProfileStudent-section bg-[#edf1f7]">

      <ProfileHeader/>

       <div className="flex px-60 mt-12 justify-between items-start gap-16">
          <div className="right-content">
            
            <AboutMe/>

            <Verifications/>

            <MyStudentSay/>

            <ResumeMe/>

          </div>

          <div className="left-content sticky top-4">
            
            <ManageSchedule/>
            
          </div>
        </div>
    </section>
  
  
  </>
}

export default ViewTeacher