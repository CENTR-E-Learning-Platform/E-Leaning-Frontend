import { useEffect, useRef, useState } from "react";
import { useTeacherProfile } from "../../Hooks/useTeacherProfile";
import { BASE_URL } from "../../Utils/Apis";
import { roleToAuth } from "../../../../Utils/Constant";
import EditAboutMeModal from "../ViewTeacher/EditAboutMeModal";
import editIcon from "../../../../../src/assets/icons/editIcon.svg";

const AboutIntoTeacher = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const { data } = useTeacherProfile();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const isTeacher = roleToAuth?.includes("Teacher") ? true : false;
  const teacherData = data?.data?.data;
  const bio = teacherData?.bio ?? null;
  const introVideoPath = teacherData?.introVideoPath ?? null;
  const hasVideo = introVideoPath && introVideoPath !== BASE_URL;

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      if (el.scrollHeight > el.clientHeight) {
        setShowButton(true);
      }
    }
  }, [teacherData]);

  return (
    <>
      <section className="AboutTeacher-section mb-12">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
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
        {hasVideo && (
          <iframe
            width="400"
            height="219"
            src={introVideoPath}
            title="video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-[400px] h-[219px] rounded-[4px] mb-6"
          ></iframe>
        )}

        <p
          ref={textRef}
          className={`text-[16px] font-medium font-Poppins text-[#2A2D34] ${!isExpanded ? "line-clamp-2" : ""}`}
        >
          {bio ?? "No bio available."}
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

export default AboutIntoTeacher;
