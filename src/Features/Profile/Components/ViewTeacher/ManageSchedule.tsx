import { useNavigate } from "react-router-dom";
import ImageSchedule from "../../../../assets/images/ManageSchedule.png";
import { roleToAuth } from "../../../../Utils/Constant";
import AvailableClasses from "../ViewStudent/AvailableClasses";
import { useTeacherProfile } from "../../Hooks/useTeacherProfile";

const ManageSchedule = () => {
  const isTeacher = roleToAuth?.includes("Teacher") ? true : false;
  const navigate = useNavigate();
  const { data } = useTeacherProfile();
  if (!isTeacher) {
    return <AvailableClasses />;
  }

  return (
    <>
      <section className="ManageSchedule-section">
        {data?.data?.data?.upComingSessions?.length > 0 ? (
          <AvailableClasses />
        ) : null}
        {data?.data?.data?.upComingSessions?.length === 0 && isTeacher && (<div className="w-[387px] bg-white rounded-[8px] mt-5 mb-2 border-2 border-[#E8EAED] p-[30px]">
          <div className="w-[327px] mb-[30px] flex justify-center items-center">
            <img
              className="w-[150px] h-[149px]"
              src={ImageSchedule}
              alt="IntroYourself"
            />
          </div>
          <div className="w-[327px]">
            <p className="text-[#6D7588] mb-8 flex justify-center items-center font-semibold text-[18px]">
              You didn’t create any classes
            </p>
            <button
              onClick={() => navigate("/Calendar")}
              className="font-semibold cursor-pointer bg-[#525FE1] w-full h-[43px] flex justify-center items-center text-[16px] p-4 rounded-[8px] text-[#F9FBFC]"
            >
              Manage Schedule
            </button>
          </div>
        </div>)}
      </section>
    </>
  );
};

export default ManageSchedule;
