import StartTeacher from "../../../../../src/assets/icons/StartTeacher.svg";
import ButtonStatus from "./ButtonStatus";
import { useStudentProfileContext } from "../../Contexts/StudentProfileContext";

const TeacherStats = () => {
  const { teacherProfile } = useStudentProfileContext();
  console.log("teacherProfile", teacherProfile);
  const rating = teacherProfile?.rate ?? 0;
  const reviews = teacherProfile?.numberOfReviews ?? 0;
  const yearsExp = teacherProfile?.yearsExperience ?? 0;
  const completedClasses = teacherProfile?.completedClasses ?? 0;

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

export default TeacherStats;