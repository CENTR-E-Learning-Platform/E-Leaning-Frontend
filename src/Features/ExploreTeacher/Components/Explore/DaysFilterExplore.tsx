import { usefilterteach } from "../../Hooks/usefilterteach";

const DaysFilterExplore = () => {
  const { selectedDay , setSelectedDay } = usefilterteach(); 

  return <>
    <section>
        <div className="Days w-[238px]">
            <h2 className="font-semibold mb-[25px] text-[16px]">Days</h2>

            <div className="All_Option mb-[20px]">
                <div className="flex items-center gap-2 mb-2">
                    <div
                    onClick={() => setSelectedDay("Sun")}
                    className={`cursor-pointer border flex justify-center items-center text-[#2A2D34] hover:bg-[#525FE1] hover:text-white h-[40px] border-[#D1D5DB] w-[64px] transition-colors duration-300 p-[14px] rounded-[8px] ${selectedDay === "Sun" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[16px]">Sun</p>
                    </div>
                    <div
                    onClick={() => setSelectedDay("Mon")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[40px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[68px] transition-colors duration-300 p-[14px] rounded-[8px] ${selectedDay === "Mon" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[16px]">Mon</p>
                    </div>
                    <div
                    onClick={() => setSelectedDay("Tue")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[40px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[62px] transition-colors duration-300 p-[14px] rounded-[8px] ${selectedDay === "Tue" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[16px]">Tue</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                    <div
                    onClick={() => setSelectedDay("Wed")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[40px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[70px] transition-colors duration-300 p-[14px] rounded-[8px] ${selectedDay === "Wed" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[16px]">Wed</p>
                    </div>
                    <div
                    onClick={() => setSelectedDay("Thu")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[40px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[63px] transition-colors duration-300 p-[14px] rounded-[8px] ${selectedDay === "Thu" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[16px]">Thu</p>
                    </div>
                    <div
                    onClick={() => setSelectedDay("Fri")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[40px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[50px] transition-colors duration-300 p-[14px] rounded-[8px] ${selectedDay === "Fri" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[16px]">Fri</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div
                    onClick={() => setSelectedDay("Sat")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[40px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[59px] transition-colors duration-300 p-[14px] rounded-[8px] ${selectedDay === "Sat" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[16px]">Sat</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
}

export default DaysFilterExplore