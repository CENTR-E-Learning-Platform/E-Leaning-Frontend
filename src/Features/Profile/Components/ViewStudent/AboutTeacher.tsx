import { useEffect, useRef, useState } from "react";
import { useStudentProfileContext } from "../../Contexts/StudentProfileContext";
import { BASE_URL } from "../../Utils/Apis";

const AboutTeacher = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const { teacherProfile } = useStudentProfileContext();
  const textRef = useRef<HTMLParagraphElement>(null);
  console.log(teacherProfile)

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
        <h2 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
          About me
        </h2>

        {teacherProfile?.introVideoPath &&
          teacherProfile.introVideoPath !== BASE_URL && (
            <iframe
              width="400"
              height="219"
              src={`${BASE_URL}${teacherProfile.introVideoPath}`}
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
      </section>
    </>
  );
};

export default AboutTeacher;
