import AboutTeacher from "../Components/ViewStudent/AboutTeacher"
import AboutMe from "../Components/ViewTeacher/AboutMe"
import ManageSchedule from "../Components/ViewTeacher/ManageSchedule"
import MyStudentSay from "../Components/ViewTeacher/MyStudentSay"
import ProfileHeader from "../Components/ViewTeacher/ProfileHeader"
import ResumeMe from "../Components/ViewTeacher/ResumeMe"
import Verifications from "../Components/ViewTeacher/Verifications"
import { useTeacherProfile } from "../Hooks/useTeacherProfile"
import { BASE_URL } from "../Utils/Apis"

const ViewTeacher = () => {
  const { data } = useTeacherProfile();
  
  return <>

    <section className="ProfileStudent-section bg-[#F9FBFC]">

      <ProfileHeader/>

       <div className="flex px-60 mt-12 justify-between items-start gap-16">
          <div className="right-content">
            
            {
              data?.data?.data?.introVideoPath !== BASE_URL
                ? <AboutTeacher />
                : <AboutMe />
            }

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