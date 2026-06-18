import React from 'react'
import ST_page from "../../../../assets/images/studentPage.png"
import { NavLink } from 'react-router-dom';
import { usehandelClickLogin } from '../../Hooks/useRegister';
import logo from '../../../../assets/icons/logo.svg';
import { useRegContext } from '../../Contexts/RegContext';
import { useGoogle } from '../../Hooks/useGoogle';
import { useFacebook } from '../../Hooks/useFacebook';
import google_icon from "../../../../assets/icons/material-icon-theme_google.png";
import facebook_icon from "../../../../assets/icons/logos_facebook.png";

const StudentOption = () => {
  const { BackOption, educationLevelOrSubject, seteducationLevelOrSubject } = usehandelClickLogin();
  const { socialProvider } = useRegContext();
  const loginWithGoogle = useGoogle();
  const loginWithFacebook = useFacebook();

  return (
    <React.Fragment>
      <main className="w-screen h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">

          <section className="flex items-center justify-center">
            <div>
              <header className='flex justify-center items-center'>
                <img src={logo} className="w-[150px] h-full" alt="" />
              </header>

              <article className="flex flex-col items-center justify-center mt-[20px]">
                <h2 className='text-[28px] mt-[10px] font-bold leading-[20.390625px] text-[#2A2D34]'>
                  Choose your grade
                </h2>

                <section className="h-[90px] mt-[30px] w-[379.6875px] mb-[20px] flex flex-col items-center justify-between gap-2">
                  <div className="flex gap-2">
                    <button onClick={() => { seteducationLevelOrSubject('Prep 1') }} type="button" className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "اولى ثانوى" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} hover:border-[#525FE1] `}>Prep 1</button>
                    <button onClick={() => { seteducationLevelOrSubject("Prep 2") }} type="button" className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "تانيه ثانوى" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} hover:border-[#525FE1] `}>Prep 2</button>
                    <button onClick={() => { seteducationLevelOrSubject("Prep 3") }} type="button" className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "تالته ثانوى" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} hover:border-[#525FE1] `}>Prep 3</button>
                  </div>

                  <div className="flex gap-2">
                    <button onClick={() => { seteducationLevelOrSubject("Sec 1") }} type="button" className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "اولى اعدادى" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} hover:border-[#525FE1] `}>Sec 1</button>
                    <button onClick={() => { seteducationLevelOrSubject("Sec 2") }} type="button" className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "تانيه اعدادى" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} hover:border-[#525FE1] `}>Sec 2</button>
                    <button onClick={() => { seteducationLevelOrSubject("Sec 3") }} type="button" className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "تالته اعدادى" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} hover:border-[#525FE1] `}>Sec 3</button>
                  </div>
                </section>

                <div className="flex items-center gap-6 justify-center mt-6">
                  <button onClick={BackOption} className='w-[178.59375px] flex justify-center items-center cursor-pointer h-[36.5625px] text-[#525FE1] border border-[#525FE1] rounded-[8px]'>
                    Back
                  </button>

                  {socialProvider ? (
                    <button
                      type="button"
                      disabled={!educationLevelOrSubject}
                      onClick={() => socialProvider === "Google" ? loginWithGoogle() : loginWithFacebook()}
                      className={`w-[178.59375px] h-[36.5625px] flex items-center justify-center gap-2 rounded-[8px] border border-[#525FE1]
                        ${educationLevelOrSubject ? "bg-[#525FE1] text-white cursor-pointer" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                    >
                      <img
                        className="w-[16px]"
                        src={socialProvider === "Google" ? google_icon : facebook_icon}
                        alt={socialProvider}
                      />
                    </button>
                  ) : (
                    <NavLink to="/register">
                      <button disabled={!educationLevelOrSubject} type="button" className={`w-[178.59375px] h-[36.5625px] rounded-[8px] border border-[#525FE1]
                        ${educationLevelOrSubject
                          ? "bg-[#525FE1] text-white cursor-pointer"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}>
                        Continue
                      </button>
                    </NavLink>
                  )}
                </div>
              </article>
            </div>
          </section>

          <aside style={{
            background: "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",
          }}
            className="flex h-full items-center justify-center">
            <img className="h-[450px] w-[450px]" src={ST_page} alt="Illustration of student page" />
          </aside>
        </div>
      </main>
    </React.Fragment>
  )
}

export default StudentOption
