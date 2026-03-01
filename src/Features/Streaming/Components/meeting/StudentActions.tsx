import sound from "../../../../assets/icons/Group.svg";
import menu from "../../../../assets/icons/smallmenu.svg";
import raishand from "../../../../assets/icons/raishand.svg";
import { useControlContext } from "../../Context/ControlContext";
import ParticipantList from "./List/ParticipantList";
import { BASE_URL } from "../../Utils/Apis";
const StudentActions = ({ name, profileImage, width }: any) => {
  const {optionSmallMenu , setOptionSmallMenu} = useControlContext();
  return (
    <div
      className={
        width < 1133
          ? `flex gap-[74px]  h-[48px] items-center  `
          : `flex   items-center`
      }
    >
      {width > 1133 && (
        <div className="flex items-center p-[4px]">
          <img
            src={profileImage}
            className="w-[88px] h-[88px] rounded-full mb-[16px] "
            alt=""
          />
        </div>
      )}

      {width < 1133 && (
        <div className="flex items-center   ">
          {width < 1133 && (
            <img
              src={`${BASE_URL}/${profileImage}`}
              className="w-[40px] h-[40px] rounded-full me-[13px] bg-cover"
              alt=""
            />
          )}
          {width < 1250 && (
            <h1 className="text-[16px] text-[#F9FBFC] w-[130px]">{name.length > 11 ? name.slice(0, 11) : name}</h1>
          )}
        </div>
      )}
        

      {width < 1115 &&(
        
        <div className="flex items-center gap-[10px]">
        <div className="bg-[#454950] w-[26px] h-[26px] rounded-full flex items-center justify-center">
          <img src={raishand} alt="" className="w-[16px] h-[16px] cursor-pointer"/>
        </div>
        <div className="bg-[#454950] w-[26px] h-[26px] rounded-full flex items-center justify-center">
          <img src={sound} alt="" className="w-[14px] cursor-pointer"/>
        </div>
        <img 
        onClick={()=> setOptionSmallMenu((prev) => !prev)}
        src={menu} alt="" className="w-[4px] h-[17px] cursor-pointer" />
         <div 
          className="absolute top-[90px] left-[1120px] z-10 ">
            {optionSmallMenu ? <ParticipantList/> : ""}
          </div>
      </div>
      
      )}
    </div>
  );
};

export default StudentActions;
