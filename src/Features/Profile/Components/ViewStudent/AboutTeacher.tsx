import { useEffect, useRef, useState } from "react";
import { useStudentProfileContext } from "../../Contexts/StudentProfileContext";
import { BASE_URL } from "../../Utils/Apis";
import { roleToAuth } from "../../../../Utils/Constant";
import EditAboutMeModal from "../ViewTeacher/EditAboutMeModal";
import editIcon from "../../../../../src/assets/icons/editIcon.svg";

const AboutTeacher = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const { teacherProfile } = useStudentProfileContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isTeacher = roleToAuth?.includes("Teacher") ? true : false;
  const textRef = useRef<HTMLParagraphElement>(null);
  const bio = teacherProfile?.bio ?? null;
  const introVideoPath = teacherProfile?.introVideoPath ?? null;

  console.log("Student prof", teacherProfile);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      if (el.scrollHeight > el.clientHeight) {
        setShowButton(true);
      }
    }
  }, [teacherProfile]);

  return (
    <>
      <section className="AboutTeacher-section mb-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[24px] text-[#2A2D34] font-Poppins font-bold">
            About me
          </h3>

          {isTeacher && (
            <div
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="flex justify-center items-center cursor-pointer w-9 h-9 border-2 border-[#525FE1] rounded-full"
            >
              <img src={editIcon} alt="edit" />
            </div>
          )}
        </div>

        {teacherProfile?.introVideoPath &&
          teacherProfile.introVideoPath !== BASE_URL && (
            <iframe
              width="400"
              height="219"
              src={`${teacherProfile.introVideoPath}${teacherProfile.introVideoPath.includes('?') ? '&' : '?'}t=${new Date().getTime()}`}
              title="video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-[400px] h-[219px] rounded-[4px] mb-6"
            ></iframe>
          )}

        <p
          ref={textRef}
          className={`text-[16px] font-medium font-Poppins text-[#2A2D34] ${!isExpanded ? "line-clamp-2" : ""}`}
        >
          {teacherProfile?.bio ?? "No bio available."}
        </p>
        {showButton && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#2A2D34] text-[16px] font-medium mt-1 underline"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}

        <EditAboutMeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialBio={bio ?? ""}
          initialVideoPath={introVideoPath ?? ""}
        />
      </section>
    </>
  );
};

export default AboutTeacher;
