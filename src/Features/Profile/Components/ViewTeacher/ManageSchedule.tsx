
import ImageSchedule from "../../../../assets/images/ManageSchedule.png"

const ManageSchedule = () => {
  return <>
    <section className="ManageSchedule-section">
        <div className="w-[387px] bg-white rounded-[8px] border-2 border-[#E8EAED] p-[30px]">
                <div className="w-[327px] mb-[30px] flex justify-center items-center">
                    <img className="w-[150px] h-[149px]" src={ImageSchedule} alt="IntroYourself" />
                </div>
                <div className="w-[327px]">
                    <p className="text-[#6D7588] mb-8 flex justify-center items-center font-semibold text-[18px]">
                        You didn’t create any classes
                    </p>
                    <button className="font-semibold bg-[#525FE1] w-full h-[43px] flex justify-center items-center text-[16px] p-4 rounded-[8px] text-[#F9FBFC]">
                        Manage Schedule
                    </button>
                </div>
            </div>
    </section>
  </>
}

export default ManageSchedule