import ListComp from "./ListComp"
import mic from '../../../../../assets/icons/mic.svg';
import vois from '../../../../../assets/icons/vois.svg';
import ArrowR from '../../../../../assets/icons/ArrowR.svg'
const MicList = () => {
  return (
    <>
       <div className="h-[97px]">
         <ListComp width = "w-[196px]" height ="h-[48px]" icon ={mic} parg ="Select a mic" arrow ={ArrowR} visable ="" />
         <ListComp width = "w-[196px]" height ="h-[48px]" icon ={vois} parg ="Select a speaker" arrow ={ArrowR} visable ="" />
       </div>
    </>
  )
}

export default MicList