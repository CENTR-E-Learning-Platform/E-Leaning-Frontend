import { useState } from "react";
import IntroYourself from "../../../../assets/images/IntroYourself.png"
import EditAboutMeModal from "./EditAboutMeModal";


const AboutMe = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return <>
    <section className="AboutMe-section mb-12">
        <div className="">
            <h3 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
                About me
            </h3>

            <div className="w-[541px] bg-white rounded-[8px] border-2 border-[#E8EAED] p-[30px]">
                <div className="w-[481px] mb-[30px] flex justify-center items-center">
                    <img className="w-[146px] h-[110px]" src={IntroYourself} alt="IntroYourself" />
                </div>
                <div className="w-[481px]">
                    <h3 className="font-semibold mb-3 flex justify-center items-center text-[24px] text-[#2A2D34]">
                        Introduce yourself to students
                    </h3>
                    <p className="text-[#6D7588] mb-8 flex justify-center items-center font-semibold text-[18px]">
                        Profiles with video get 3x more bookings
                    </p>
                    <button onClick={() => setIsModalOpen(true)} className="cursor-pointer font-semibold bg-[#525FE1] w-full h-[43px] flex justify-center items-center text-[16px] p-4 rounded-[8px] text-[#F9FBFC]">
                        Add Video & Profile Overview
                    </button>
                </div>
            </div>
        </div>
        <EditAboutMeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </section>
  </>
}

export default AboutMe