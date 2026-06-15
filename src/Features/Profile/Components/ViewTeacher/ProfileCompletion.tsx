import { roleToAuth } from "../../../../Utils/Constant";
import { useTeacherProfile } from "../../Hooks/useTeacherProfile";

const ProfileCompletion = () => {
  const { data } = useTeacherProfile();

  const isTeacher = roleToAuth?.includes("Teacher") ? true : false;
  if (!isTeacher) {
    return;
  }

  return (
    <>
      <section className="ProfileCompletion-section">
        <p className="font-medium text-[16px] mb-2">
          Profile Completion: {data?.data?.data?.completionPercentage || 0}%
        </p>

        <div className="flex items-center">
          <div className="w-[541px] mr-2.5 rounded-full bg-[#E8EAED] h-3 overflow-hidden">
            <div
              className="bg-[#525FE1] rounded-full h-3"
              style={{
                width: `${data?.data?.data?.completionPercentage || 0}%`,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileCompletion;
