import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import alert from "../../../assets/icons/alert.svg";
import QuizDetailsCard from "./QuizDetailsCard";
import { roleToAuth } from "../../../Utils/Constant";

const QuizEvent = ({ event }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const eventRef = useRef<HTMLDivElement>(null);
  const isTeacher = roleToAuth?.includes("Teacher");

  const dueDate = new Date(event.dueDate);
  const now = new Date();
  
  const diffInHours = (dueDate.getTime() - now.getTime()) / (1000 * 60 * 60);
  const isExpired = now > dueDate;
  const isStudentExpired = isExpired && !isTeacher;

  const handleMouseEnter = () => {
    if (eventRef.current) {
      const rect = eventRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top + window.scrollY  + 60,
        left: rect.right + window.scrollX - 130,
      });
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        ref={eventRef}
        className="relative w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`w-full h-full rounded-[4px] border-s-[4px] transition-all duration-300 flex flex-col justify-center ${
            isStudentExpired
              ? "border-[#9CA3AF] bg-[#F3F4F6] cursor-not-allowed"
              : "border-[#10B981] bg-[#10B981]/20  cursor-pointer"
          }`}
        >
          <div>
            <h1
              className={`text-[14px] w-fit ps-[12px] pt-[8px] pb-[4px] font-semibold truncate ${
                isStudentExpired ? "text-[#9CA3AF]" : "text-[#2A2D34]"
              }`}
            >
              {event.title || event.quizName}
            </h1>
            <div className="flex ps-[12px] pb-[8px] items-center">
              <img
                src={alert}
                className={`w-[12px] me-[3px] h-[14px] ${
                  isStudentExpired ? "opacity-40 grayscale" : ""
                }`}
                alt="alert"
              />
              <span
                className={`text-[12px] ${
                  isStudentExpired ? "text-[#9CA3AF]" : "text-[#2A2D34]"
                }`}
              >
                {isExpired ? "Expired" : `${diffInHours > 0 ? diffInHours.toFixed(1) : 0}h`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {isHovered &&
        createPortal(
          <div
            className="absolute z-[99999] cursor-default"
            style={{ top: coords.top, left: coords.left }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <QuizDetailsCard event={event} />
          </div>,
          document.body
        )}
    </>
  );
};

export default QuizEvent;