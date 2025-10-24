import React from 'react'
import Teach_page from "../../../../assets/images/TeacherPage.png";
import { useRegContext } from '../../Contexts/RegContext';
import { NavLink } from 'react-router-dom';
import { handelRegister } from '../../Hooks/useRegister';


const TeacherOption: React.FC = () => {
  
  const { educationLevelOrSubject, seteducationLevelOrSubject , FormRegister} = useRegContext();

  return (
    <React.Fragment>
      <main className="w-screen h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">

          <section className="flex items-start justify-center">
            <div>
                <header className='flex justify-center items-center'>
                    <h1 className='mt-[34.453125px] font-semibold text-[32px] text-[#2A2D34]'>logo</h1>
                </header>

                <article className="flex flex-col items-center justify-center">
                    <h2 className='text-[28px] mt-[160px] font-bold leading-[20.390625px] text-[#2A2D34]'>
                    What do you teach
                    </h2>
                    
                    <section className="h-auto mt-[30px] w-[379.6875px] mb-[20px] flex flex-col items-center justify-between gap-2">
                    
                    <div className="flex gap-2">
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Arabic')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Arabic" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Arabic</button>
                        <button type="button" onClick={()=>seteducationLevelOrSubject('English')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "English" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>English</button>
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Deutsch')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Deutsch" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Deutsch</button>
                    </div>

                    <div className="flex gap-2">
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Français')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Français" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Français</button>
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Español')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Español" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Español</button>
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Italiano')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Italiano" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Italiano</button>
                    </div>

                    <div className="flex gap-2">
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Mathematics')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Mathematics" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Mathematics</button>
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Science')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Science" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Science</button>
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Social Science')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Social Science" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Social Science</button>
                    </div>

                    <div className="flex gap-2">
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Physics')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Physics" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Physics</button>
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Chemistry')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Chemistry" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Chemistry</button>
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Biology')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Biology" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Biology</button>
                    </div>

                    <div className="flex gap-2">
                        <button type="button" onClick={()=>seteducationLevelOrSubject('History')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "History" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>History</button>
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Geography')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Geography" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Geography</button>
                        <button type="button" onClick={()=>seteducationLevelOrSubject('Statistics')} className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] rounded-lg h-[36.5625px] ${educationLevelOrSubject === "Statistics" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                  hover:border-[#525FE1] `}>Statistics</button>
                    </div>
                    </section>

                    <div className="flex items-center gap-6 justify-center mt-6">
                    <NavLink to={'/OptionRegister'} className='w-[178.59375px] flex items-center justify-center cursor-pointer h-[36.5625px] text-[#525FE1] border border-[#525FE1] rounded-[8px]'>
                        Back
                    </NavLink>
                    <button type="button" onClick={()=>handelRegister(FormRegister)} disabled={!educationLevelOrSubject} className={`w-[178.59375px] h-[36.5625px] rounded-[8px] border border-[#525FE1]
                  ${educationLevelOrSubject
                    ? "bg-[#525FE1] text-white cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}>
                        continue
                    </button>
                    </div>
                </article>
            </div>
          </section>

          <aside style={{
            background: "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)"}} 
            className="flex h-full items-center justify-center">
            <img className="h-[450px] w-[450px]" src={Teach_page} alt="Illustration of teacher page" />
          </aside>
        </div>
      </main>
    </React.Fragment>
  )
}

export default TeacherOption
