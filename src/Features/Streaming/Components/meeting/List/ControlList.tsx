import ListComp from "./ListComp"
import microphondis from "../../../../../assets/icons/mic2.svg";
import record from "../../../../../assets/icons/record.svg";
const ControlList = () => {
  return (
   <div className="h-[97px]">
         <ListComp width = "w-[164px]" height ="h-[48px]" icon ={record} parg ="Start recording" visable = "hidden" />
        <ListComp width = "w-[164px]" height ="h-[48px]" icon ={microphondis} parg ="Mute all" visable ="hidden" />
       </div>
  )
}

export default ControlList