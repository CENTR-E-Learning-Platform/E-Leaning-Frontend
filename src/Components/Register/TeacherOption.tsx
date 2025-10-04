import React from 'react'
import Teach_page from "../../assets/images/TeacherPage.png"

const TeacherOption = () => {
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
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Arabic</button>
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">English</button>
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Deutsch</button>
                        </div>

                        <div className="flex gap-2">
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Français</button>
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Español</button>
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Italiano</button>
                        </div>

                        <div className="flex gap-2">
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Mathematics</button>
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Science</button>
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Social Science</button>
                        </div>

                        <div className="flex gap-2">
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Physics</button>
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Chemistry</button>
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Biology</button>
                        </div>

                        <div className="flex gap-2">
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">History</button>
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Geography</button>
                            <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Statistics</button>
                        </div>
                        </section>

                        <div className="flex items-center gap-6 justify-center mt-6">
                        <button type="button" className='w-[178.59375px] cursor-pointer h-[36.5625px] text-[#525FE1] border border-[#525FE1] rounded-[8px]'>
                            Back
                        </button>
                        <button type="button" className='w-[178.59375px] cursor-pointer h-[36.5625px] bg-[#525FE1] text-[#fff] border border-[#525FE1] rounded-[8px]'>
                            Continue
                        </button>
                        </div>
                    </article>
                </div>
          </section>

          <aside style={{
            background: "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",}} 
            className="flex h-full items-center justify-center">
            <img className="h-[450px] w-[450px]" src={Teach_page} alt="Illustration of teacher page" />
          </aside>
        </div>
      </main>
    </React.Fragment>
  )
}

export default TeacherOption
