import Button from "./Button";
import mic from "../../../../assets/icons/mic.svg";
import video from "../../../../assets/icons/video.svg";
import emoj  from "../../../../assets/icons/emoj.svg";
import hand  from "../../../../assets/icons/hand.svg";
import share  from "../../../../assets/icons/share.svg";
import menu  from "../../../../assets/icons/menu.svg";
import leave  from "../../../../assets/icons/leave.svg";
const FooterBar = ()=>{
    return(
        <>
                <div className="flex justify-center mb-[10px] mt-auto gap-4">
        <div className="flex gap-2">
          <Button icons={mic} size="w-[14] h-[20px]" />
          <Button icons={video} size="w-[18px] h-[12px]" />
          <Button icons={emoj} size="w-[19px] h-[19px]" />
          <Button icons={hand} size="w-[15px] h-[18px]" />
          <Button icons={share} size="w-[21px] h-[18px]" />
          <Button icons={menu} size="w-[4px] h-[17px]" />
        </div>
        <button className="w-[103px] h-[48px] bg-[#D24747] rounded-[8px] flex justify-center items-center cursor-pointer">
          <img src={leave} className="w-[14px] h-[14px]" alt="" />
          <h1 className="text-[16px] text-[#F9FBFC] ms-[10px]">Leave</h1>
        </button>
      </div>
        </>
    )
}
export default FooterBar;