import StartTeacher from "../../../../../src/assets/icons/StartTeacher.svg";
import ButtonStatus from "../ViewStudent/ButtonStatus";
import { useTeacherProfile } from "../../Hooks/useTeacherProfile";

const TeacherStatsInto = () => {
  const { data } = useTeacherProfile();
  const teacherData = data?.data?.data;

  const rating = teacherData?.rate ?? 0;
  const reviews = teacherData?.numberOfReviews ?? 0;
  const yearsExp = teacherData?.yearsExperience ?? 0;
  const completedClasses = teacherData?.completedClasses ?? 0;

  return (
    <>
      <section className="TeacherStats-section mb-12">
        <h2 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
          Teacher stats
        </h2>

        <div className="TeacherStats-content flex justify-between items-start gap-2 w-[423px]">
          <ButtonStatus
            imgClass=""
            icon={StartTeacher}
            rating={String(rating)}
            NumberOfReviews={`(${reviews} Review)`}
          />
          <ButtonStatus
            imgClass="hidden"
            icon={""}
            rating={`${yearsExp}+`}
            NumberOfReviews="Years Experience"
          />
          <ButtonStatus
            imgClass="hidden"
            icon={""}
            rating={String(completedClasses)}
            NumberOfReviews="Completed classes"
          />
        </div>
      </section>
    </>
  );
};

export default TeacherStatsInto;
