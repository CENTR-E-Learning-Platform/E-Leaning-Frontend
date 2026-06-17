import identity from "../../../../../src/assets/icons/identity.svg";
import ButtomVerification from "../ViewStudent/ButtomVerification";
import Professional from "../../../../../src/assets/icons/Professional.svg";
import Educational from "../../../../../src/assets/icons/Educational.svg";
import { useTeacherProfile } from "../../Hooks/useTeacherProfile";

const VerificationsInto = () => {
  const { data } = useTeacherProfile();
  const teacherData = data?.data?.data;
  const isVerified = teacherData?.isVerified ?? false;

  return (
    <>
      <section className="TeactherVerifications-section mb-12">
        <h2 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
          Verifications
        </h2>

        <ButtomVerification
          icon={identity}
          alt="identity"
          title="Identity verified"
          description={
            isVerified
              ? "Egyptian national ID verified by government database"
              : "Identity not yet verified"
          }
          color={isVerified ? "text-[#525FE1]" : "text-[#9CA3AF]"}
          width="w-[154px]"
        />

        <ButtomVerification
          icon={Professional}
          alt="ProfessionalTeacher"
          title="Professional Teacher"
          description="Certified school teacher with formal teaching experience"
          width="w-[195px]"
          color="text-[#CC3363]"
        />

        <ButtomVerification
          icon={Educational}
          alt="EducationalQualification"
          title="Educational qualification"
          description="Bachelor's degree in relevant field"
          width="w-[231px]"
          color="text-[#34D399]"
        />
      </section>
    </>
  );
};

export default VerificationsInto;
