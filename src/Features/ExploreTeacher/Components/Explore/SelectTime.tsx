import { CalendarCheck2Icon, ChevronDown, Clock } from "lucide-react"

const SelectTime = () => {
  return <>
    <div className="w-[285px] h-[85px] mb-6">
        <p className="font-medium text-[14px]">Select time</p>
        <div className="w-[285px] p-[11px] h-[67px] border border-[#D1D5DB] rounded-[8px] flex justify-between items-center">
            <div className="flex items-center h-[58px] gap-[55px]">
            <div className="Date&Time w-[187px]">
                <div className="text-[#2A2D34] flex items-center gap-[7px]">
                <CalendarCheck2Icon size={18} />
                <span className="text-[16px] font-medium">
                    Wed 22 oct
                </span>
                </div>
                <div className="text-[#2A2D34] flex items-center gap-[7px]">
                <Clock size={18} />
                <span className="text-[16px] font-medium">
                    2:00 pm - 4:00 pm
                </span>
                </div>
            </div>

            <div className="ArrowDown">
                <ChevronDown size={18} />
            </div>
            </div>
        </div>
    </div>
  </>
}

export default SelectTime