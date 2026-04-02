import { CalendarCheck2Icon, ChevronDown, Clock } from "lucide-react"


const SelectTime = () => {
  return <>
    <div className="w-[300px] h-[95px] mb-7">
        <p className="font-medium text-[16px]">Select time</p>
        <div className="w-[300px] p-3 h-[74px] border border-[#D1D5DB] rounded-[8px] flex justify-between items-center">
            <div className="flex items-center h-[64px] gap-[58px]">
            <div className="Date&Time w-[197px]">
                <div className="text-[#2A2D34] flex items-center gap-[8px]">
                <CalendarCheck2Icon size={20} />
                <span className="text-[18px] font-medium">
                    Wed 22 oct
                </span>
                </div>
                <div className="text-[#2A2D34] flex items-center gap-[8px]">
                <Clock size={20} />
                <span className="text-[18px] font-medium">
                    2:00 pm - 4:00 pm
                </span>
                </div>
            </div>

            <div className="ArrowDown">
                <ChevronDown />
            </div>
            </div>
        </div>
    </div>
  </>
}

export default SelectTime