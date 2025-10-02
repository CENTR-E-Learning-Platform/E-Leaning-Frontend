import React from 'react'
import ST_page from "../../assets/images/studentPage.png"

const StudentOption = () => {
  return (
    <React.Fragment>
      <main className="w-screen h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          
          <section className="flex items-start justify-center">
            <div>
              <header>
                <h1 className='mt-[34.453125px] font-semibold text-[32px] text-[#2A2D34]'>logo</h1>
              </header>

              <article className="flex flex-col items-center justify-center">
                <h2 className='text-[28px] mt-[160px] font-bold leading-[20.390625px] text-[#2A2D34]'>
                  Choose your grade
                </h2>

                <section className="h-[90px] mt-[30px] w-[379.6875px] mb-[20px] flex flex-col items-center justify-between gap-2">
                  
                  <div className="flex gap-2">
                    <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Prep 1</button>
                    <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Prep 2</button>
                    <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Prep 3</button>
                  </div>

                  
                  <div className="flex gap-2">
                    <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Sec 1</button>
                    <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Sec 2</button>
                    <button type="button" className="w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024] border-[#DDDFE4] rounded-lg h-[36.5625px]">Sec 3</button>
                  </div>
                </section>

                <nav className="flex items-center gap-6 justify-center mt-6">
                  <button type="button" className='w-[178.59375px] cursor-pointer h-[36.5625px] text-[#525FE1] border border-[#525FE1] rounded-[8px]'>
                    Back
                  </button>
                  <button type="button" className='w-[178.59375px] cursor-pointer h-[36.5625px] bg-[#525FE1] text-[#fff] border border-[#525FE1] rounded-[8px]'>
                    Continue
                  </button>
                </nav>
              </article>
            </div>
          </section>

          
          <aside style={{
            background: "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",}} 
            className="flex h-full items-center justify-center">
            <img className="h-[450px] w-[450px]" src={ST_page} alt="Illustration of student page" />
          </aside>
        </div>
      </main>
    </React.Fragment>
  )
}

export default StudentOption
