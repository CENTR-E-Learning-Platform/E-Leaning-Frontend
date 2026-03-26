import { usefilterteach } from "../../Hooks/usefilterteach";


const DaysFilterExplore = () => {
    
  const { selectedDay , setSelectedDay } = usefilterteach(); 

  return <>
    <section>
        <div className="Days w-[250px]">
            <h2 className="font-semibold mb-[28px] text-[18px]">Days</h2>

            <div className="All_Option mb-[22px]">

                <div className="flex  items-center gap-2 mb-2">
                    <div
                    onClick={() => setSelectedDay("Sun")}
                    className={`cursor-pointer border flex justify-center items-center text-[#2A2D34] hover:bg-[#525FE1] hover:text-white h-[45px] border-[#D1D5DB] w-[67px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Sun" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[18px]">Sun</p>
                    </div>
                    <div
                    onClick={() => setSelectedDay("Mon")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[45px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[72px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Mon" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[18px]">Mon</p>
                    </div>
                    <div
                    onClick={() => setSelectedDay("Tue")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[45px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[65px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Tue" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[18px]">Tue</p>
                    </div>
                </div>

                <div className="flex  items-center gap-2 mb-2">
                    <div
                    onClick={() => setSelectedDay("Wed")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[45px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[74px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Wed" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[18px]">Wed</p>
                    </div>
                    <div
                    onClick={() => setSelectedDay("Thu")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[45px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[66px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Thu" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[18px]">Thu</p>
                    </div>
                    <div
                    onClick={() => setSelectedDay("Fri")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[45px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[53px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Fri" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[18px]">Fri</p>
                    </div>
                </div>

                <div className="flex  items-center gap-2">
                    <div
                    onClick={() => setSelectedDay("Sat")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[45px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[62px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Sat" ? "bg-[#525FE1] text-white" : ""}`}
                    >
                    <p className="font-medium text-[18px]">Sat</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  </>
}

export default DaysFilterExplore
