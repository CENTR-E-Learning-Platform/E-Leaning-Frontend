import AboutTeacher from "../Components/ViewStudent/AboutTeacher"
import AboutMe from "../Components/ViewTeacher/AboutMe"
import ManageSchedule from "../Components/ViewTeacher/ManageSchedule"
import MyStudentSay from "../Components/ViewTeacher/MyStudentSay"
import ProfileHeader from "../Components/ViewTeacher/ProfileHeader"
import ResumeMe from "../Components/ViewTeacher/ResumeMe"
import Verifications from "../Components/ViewTeacher/Verifications"
import { useTeacherProfile } from "../Hooks/useTeacherProfile"
import { BASE_URL } from "../Utils/Apis"
import { StudentProfileContext } from "../Contexts/StudentProfileContext"

const ViewTeacher = () => {
  const { data, isLoading } = useTeacherProfile();

  return <>

    <StudentProfileContext.Provider value={{ teacherProfile: data?.data?.data ?? null, isLoading: isLoading ?? false }}>
      <section className="ProfileStudent-section bg-[#F9FBFC]">

      <ProfileHeader/>

       <div className="flex px-60 mt-12 justify-between items-start gap-16">
          <div className="right-content">
            
            {
              data?.data?.data?.introVideoPath !== BASE_URL || data?.data?.data?.bio !== null
                ? <AboutTeacher />
                : <AboutMe />
            }

            <Verifications/>

            {
              data?.data?.data?.reviews?.length === 0 &&
              <MyStudentSay/>
            }

            <ResumeMe/>

          </div>

          <div className="left-content sticky top-4">
            
            <ManageSchedule/>
            
          </div>
        </div>
    </section>
    </StudentProfileContext.Provider>
  
  </>
}

export default ViewTeacher