
import StartTeacher from "../../../../../src/assets/icons/StartTeacher.svg";
import ButtonStatus from "./ButtonStatus";

const TeacherStats = () => {
  return <>
    
    <section className="TeacherStats-section mb-12">

      <h2 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
        Teacher stats
      </h2>
      
      <div className="TeacherStats-content flex justify-between items-start gap-2 w-[423px]">
        
        <ButtonStatus imgClass="" icon={StartTeacher} rating="4.9" reviews="(120 reviews)"/>
        <ButtonStatus imgClass="hidden" icon={""} rating="3+" reviews="Years Experience"/>
        <ButtonStatus imgClass="hidden" icon={""} rating="174" reviews="Completed classes"/>

      </div>

    </section>
    
  
  </>
}

export default TeacherStats










/**
 * 
 * <div className="bg-[#C8CCF44D] px-4 py-2 rounded-[4px] h-[60px]">
          <div className="w-[50px] flex gap-1 justify-between items-center">

            <img src={StartTeacher} alt="StartTeacher" />

            <p className="text-[18px] font-Poppins font-semibold text-[#4152FB]">
              4.8
            </p>

          </div>

          <p className="text-[#4152FB] font-semibold text-[12px]">
            502 reviews
          </p>

        </div>

        
 * 
 * 
 */