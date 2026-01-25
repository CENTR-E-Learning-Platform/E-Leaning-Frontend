import { useState } from "react";
import { type ToolbarProps, type View } from 'react-big-calendar';
import  prev from '../../../assets/icons/Icon Button.svg';
import  nxt from '../../../assets/icons/Icon Button (1).svg';

const Toolbar = (toolbar: ToolbarProps) => {
  const [active, setActive] = useState("all");
  const [activeLeft , setActiveLeft] = useState("month");

  const goPrev = ()=> toolbar.onNavigate("PREV");
  const goNext = ()=> toolbar.onNavigate("NEXT");
  const goToView = (view : View) => toolbar.onView(view);
  const baseBtn =
  "ps-[14px] pe-[14px] pt-[5px] pb-[5px] rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out";


  const activeBtn = "bg-[#525FE1] text-[#F9FBFC]";
  const normalBtn = "text-[#6D7588]";

  return (
    <div className="w-[895px] h-[44px] ps-[16px] pe-[16px] flex justify-between items-center mt-[16px] mb-[22px] ">
      <div className="w-[315px] h-[44px]  text-[14px] font-[500] border-[1px] rounded-[8px] border-[#E8EAED] flex items-center justify-center gap-2">

        <button
          onClick={() => setActive("all")}
          className={`${baseBtn} ${active === "all" ? activeBtn : normalBtn}`}
        >
          All events
        </button>

        <button
          onClick={() => setActive("quiz")}
          className={`${baseBtn} ${active === "quiz" ? activeBtn : normalBtn}`}
        >
          Quizes
        </button>

        <button
          onClick={() => setActive("homework")}
          className={`${baseBtn} ${active === "homework" ? activeBtn : normalBtn}`}
        >
          Homeworks
        </button>

      </div>
      <div className="w-[198px] h-[28px] flex justify-center items-center">
        <div
        onClick={()=> goPrev()}
        >
            <img src={prev} className="" alt="" />
        </div>
        <div className="w-[140px] h-[28px] border-[1px] border-[#E8EAED] text-[#2A2D34] text-[14px] flex justify-center items-center">
            {toolbar.label}
            </div>
        <div
        onClick={()=> goNext()}
        >
            <img src={nxt} alt="" />
        </div>
      </div>
      <div className="w-[229px] h-[44px] text-[14px] font-[500] border-[1px] rounded-[8px] border-[#E8EAED] flex items-center justify-center gap-2">

        <button
          onClick={() =>{
             setActiveLeft("day");
             goToView("day");
          }}
          className={`${baseBtn} ${activeLeft === "day" ? activeBtn : normalBtn}`}
        >
          Day
        </button>

        <button
          onClick={() => {
            setActiveLeft("week");
            goToView("week");
          }}
          className={`${baseBtn} ${activeLeft === "week" ? activeBtn : normalBtn}`}
        >
          Week
        </button>

        <button
          onClick={() =>{
             setActiveLeft("month");
             goToView("month");
          }}
          className={`${baseBtn} ${activeLeft === "month" ? activeBtn : normalBtn}`}
        >
          Month
        </button>

      </div>
    </div>
  );
};

export default Toolbar;
