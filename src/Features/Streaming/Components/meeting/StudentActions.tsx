import teacher from "../../../../assets/images/mester.jpg";
import share from "../../../../assets/icons/share.svg";
import menu from "../../../../assets/icons/menu.svg";
import mic from "../../../../assets/icons/mic.svg";
import video from "../../../../assets/icons/video.svg";

const StudentActions = ({ width }: any) => {
  return (
    <div className={width <1133 ?`flex gap-[84px]  h-[48px] items-center`:`flex   items-center`}>
    {width > 1133 &&(
         <div className="flex items-center  p-[4px] ">
         <img src={teacher} className="w-[88px] h-[88px] rounded-full mb-[16px] " alt="" />
      </div>
    )}
    
    {width < 1133 &&(
         <div className="flex items-center  p-[4px] ">
       
        {width < 1133 &&  <img src={teacher} className="w-[40px] h-[40px] rounded-full me-[13px]" alt="" />}
        {width < 1250 &&  <h1 className="text-[16px] text-[#F9FBFC]">Mohammed</h1>}
      </div>
    )}
    

     <div className="flex items-center gap-[16px]">
        {width < 1100 && <img src={menu} alt="" className="w-[4px] h-[17px] cursor-pointer" />}
        {width < 1030 && <img src={share} alt="" className="w-[21px] h-[18px] cursor-pointer" />}
        {width < 1060 && <img src={video} alt="" className="w-[18px] h-[12px] cursor-pointer" />}
        {width < 1090 && <img src={mic} alt="" className="w-[14px] h-[20px] cursor-pointer" />}
      </div>
    </div>
  );
};

export default StudentActions;
