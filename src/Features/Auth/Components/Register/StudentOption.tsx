import React from 'react'
import ST_page from "../../../../assets/images/studentPage.png"
import { NavLink, useNavigate } from 'react-router-dom';
import { useRegContext } from '../../Contexts/RegContext';
import axios from 'axios';

const StudentOption = () => {
   const NavigateLogin = useNavigate()

  const { educationLevelOrSubject, seteducationLevelOrSubject, FormRegister } = useRegContext();
  async function handelRegister(){
    axios.post('https://runnier-uncongealable-samuel.ngrok-free.dev/Account/Register', FormRegister)
    .then((res) => {
      NavigateLogin('/login')
      console.log('✅ Success:', res.data);
    })
    .catch((error) => {
      console.log('❌ Error:', error.message);
      if (error.response) {
        console.log('Server said:', error.response.data.title);
      }
    });
  }
  
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
                  Choose your grade
                </h2>

                <section className="h-[90px] mt-[30px] w-[379.6875px] mb-[20px] flex flex-col items-center justify-between gap-2">
                  
                  <div className="flex gap-2">
                    <button onClick={()=>{seteducationLevelOrSubject('اولى ثانوى')}} type="button" className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024]  rounded-lg h-[36.5625px] ${educationLevelOrSubject === "اولى ثانوى" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                      hover:border-[#525FE1] `}>Prep 1</button>
                    <button onClick={()=>{seteducationLevelOrSubject("تانيه ثانوى")}} type="button" className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024]  rounded-lg h-[36.5625px] ${educationLevelOrSubject === "تانيه ثانوى" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                      hover:border-[#525FE1] `}>Prep 2</button>
                    <button onClick={()=>{seteducationLevelOrSubject("تالته ثانوى")}} type="button" className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024]  rounded-lg h-[36.5625px] ${educationLevelOrSubject === "تالته ثانوى" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                      hover:border-[#525FE1] `}>Prep 3</button>
                  </div>
                  
                  <div className="flex gap-2">
                    <button onClick={()=>{seteducationLevelOrSubject("اولى اعدادى")}} type="button" className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024]  rounded-lg h-[36.5625px] ${educationLevelOrSubject === "اولى اعدادى" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                      hover:border-[#525FE1] `}>Sec 1</button>
                    <button onClick={()=>{seteducationLevelOrSubject("تانيه اعدادى")}} type="button" className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024]  rounded-lg h-[36.5625px] ${educationLevelOrSubject === "تانيه اعدادى" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                      hover:border-[#525FE1] `}>Sec 2</button>
                    <button onClick={()=>{seteducationLevelOrSubject("تالته اعدادى")}} type="button" className={`w-[120.9375px] border-2 cursor-pointer shadow-[0px_6px_12px_0px_#00000024]  rounded-lg h-[36.5625px] ${educationLevelOrSubject === "تالته اعدادى" ? "bg-[#525FE114] border-[#525FE1]" : "border-[#DDDFE4]"} 
                      hover:border-[#525FE1] `}>Sec 3</button>
                  </div>
                </section>

                <div className="flex items-center gap-6 justify-center mt-6">
                  <NavLink to={"/OptionRegister"} className='w-[178.59375px] flex justify-center items-center cursor-pointer h-[36.5625px] text-[#525FE1] border border-[#525FE1] rounded-[8px]'>
                    Back
                  </NavLink>
                  <button onClick={handelRegister} type="button" className='w-[178.59375px] cursor-pointer h-[36.5625px] bg-[#525FE1] text-[#fff] border border-[#525FE1] rounded-[8px]'>
                    Continue
                  </button> 
                </div>
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
