import { useState } from "react";
import { useTeacherProfile } from "../../Hooks/useTeacherProfile";

const AboutTeacher = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {data} = useTeacherProfile();

  return (
    <>
      <section className="AboutTeacher-section mb-12 w-[500px]">

        <h2 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
          About me
        </h2>

        <iframe
          width="400"
          height="219"
          src={data?.data.fullIntroVideoPath}
          title="video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-[400px] h-[219px] rounded-[4px] mb-6"
        ></iframe>

        <p className={`text-[16px] font-Poppins text-[#2A2D34] ${!isExpanded ? "line-clamp-2" : ""}`}>
          Are you looking for a patient and knowledgeable math tutor with sharp
          analytical thinking who builds a personalized roadmap based on your
          academic goals? You're going to master the world of numbers in my
          classes because we'll transform abstract theorems into clear, logical
          steps. Overall, I have been teaching Pure Mathematics for more than 20
          years. Throughout these years, I have gained deep insight into the
          "logic gaps" students often face. This enables me to pick up clues on
          exactly where a concept feels blurry, allowing us to bridge the gap
          between just solving equations and truly understanding the "why"
          behind the math.
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#2A2D34] text-[16px] font-medium mt-1 underline "
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>

      </section>
    </>
  );
};

export default AboutTeacher;
