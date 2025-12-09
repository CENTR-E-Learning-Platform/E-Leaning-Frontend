import React from "react";
import Reg_Log from "../../../../assets/images/Reg&Log.png";
import teacher_img from "../../../../assets/images/Teacher.png";
import student_img from "../../../../assets/images/Student.png";
import { usehandelBackRegister } from "../../Hooks/useRegister";

const OptionRegister: React.FC = () => {
  const { role, setrole, handleContinue } = usehandelBackRegister();

  return (
    <React.Fragment>
      <main className="w-screen h-screen max-[390px]:overflow-auto max-[390px]:min-h-screen max-[390px]:w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <section className="flex items-start justify-center">
            <div>
              <header className="flex justify-center items-center">
                <h1 className="mt-[34.453125px] font-semibold text-[32px] text-[#2A2D34]">
                  logo
                </h1>
              </header>

              <article className="flex flex-col items-center justify-center">
                <h2 className="text-[40px] mt-[117.421875px] font-bold leading-[29px] font-poppins text-[#2A2D34]">
                  Join as a
                </h2>

                <section className="h-[251.015625px] mt-[10px] w-[379.6875px] mb-[10px] flex items-center gap-6 justify-center max-[390px]:flex-col max-[390px]:h-auto max-[390px]:w-full">
                  <div
                    onClick={() => setrole("Student")}
                    className={`
                      rounded-2xl h-[218px] w-[178.59375px]
                      shadow-[0px_6px_12px_0px_#00000024]
                      border-2
                      cursor-pointer
                      transition-all duration-400
                      ${
                        role === "Student"
                          ? "bg-[#525FE114] border-[#525FE1]"
                          : "border-[#DDDFE4]"
                      } 
                      hover:border-[#525FE1]
                    `}
                  >
                    <img
                      className="h-[154.6875px] m-auto w-[154.6875px]"
                      src={student_img}
                      alt="Student illustration"
                    />
                    <h3 className="font-medium text-[18px] text-center leading-[12px] text-[#2A2D34]">
                      Student
                    </h3>
                    <p className="font-normal p-1.5 text-[13px] leading-[122%] text-center text-[#6D7588]">
                      Start your<br/> learning journey
                    </p>
                  </div>

                  <div
                    onClick={() => setrole("Teacher")}
                    className={`
                      rounded-2xl h-[218px] w-[178.59375px]
                      shadow-[0px_6px_12px_0px_#00000024]
                      border-2 
                      cursor-pointer
                      transition-all duration-400
                      ${
                        role === "Teacher"
                          ? "bg-[#525FE114] border-[#525FE1]"
                          : "border-[#DDDFE4]"
                      } 
                      hover:border-[#525FE1]
                    `}
                  >
                    <img
                      className="h-[154.6875px] m-auto w-[154.6875px]"
                      src={teacher_img}
                      alt="Teacher illustration"
                    />
                    <h3 className="font-medium text-[18px] text-center leading-[12px] text-[#2A2D34]">
                      Teacher
                    </h3>
                    <p className="font-normal p-1.5  text-[13px]  leading-[122%] text-center text-[#6D7588]">
                      Share your<br/> knowledge & earn
                    </p>
                  </div>
                </section>

                <div className="flex max-[390px]:flex-col-reverse sm:flex-row items-center gap-3 justify-center mt-6 mb-3">
                  <button
                    // onClick={BackReg}
                    className="w-[178.59375px] flex justify-center items-center cursor-pointer h-[36.5625px] text-[#525FE1] border border-[#525FE1] rounded-[8px]"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleContinue}
                    disabled={!role}
                    className={`w-[178.59375px] h-[36.5625px] flex justify-center items-center rounded-[8px] border transition-all duration-300
                      ${
                        role
                          ? "bg-[#525FE1] text-white border-[#525FE1] cursor-pointer"
                          : "bg-gray-300 text-gray-500 border-[#525FE1] cursor-not-allowed"
                      }
                    `}
                  >
                    Continue
                  </button>
                </div>
              </article>
            </div>
          </section>

          <aside
            style={{
              background:
                "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",
            }}
            className="hidden md:flex h-full items-center justify-center"
          >
            <img
              className="h-[450px] w-[450px]"
              src={Reg_Log}
              alt="Registration and login illustration"
            />
          </aside>
        </div>
      </main>
    </React.Fragment>
  );
};

export default OptionRegister;
