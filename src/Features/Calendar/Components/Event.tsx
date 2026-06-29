import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import alert from "../../../assets/icons/alert.svg";
import EventDetailsCard from "./EventDetailsCard";

const getStatusConfig = (status: number) => {
  switch (status) {
    case 1:
      return { bg: "bg-[#00A9FE]/20", border: "border-s-[#00A9FE]", dot: "bg-[#00A9FE]", isDisabled: false };
    case 2:
      return { bg: "bg-[#F59E0B]/20", border: "border-s-[#F59E0B]", dot: "bg-[#F59E0B]", isDisabled: false };
    case 3:
      return { bg: "bg-[#10B981]/20", border: "border-s-[#10B981]", dot: "bg-[#10B981]", isDisabled: false };
    case 4:
      return { bg: "bg-[#6B7280]/20", border: "border-s-[#6B7280]", dot: "bg-[#6B7280]", isDisabled: true };
    case 5:
      return { bg: "bg-[#D24747]/20", border: "border-s-[#D24747]", dot: "bg-[#D24747]", isDisabled: true };
    case 6:
      return { bg: "bg-[#991B1B]/20", border: "border-s-[#991B1B]", dot: "bg-[#991B1B]", isDisabled: true };
    case 0:
    default:
      return { bg: "bg-[#7B24BA]/20", border: "border-s-[#7B24BA]", dot: "bg-[#7B24BA]", isDisabled: false };
  }
};

const Event = ({ event }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const eventRef = useRef<HTMLDivElement>(null);

  const start = new Date(event.start);
  const end = new Date(event.end);
  const diffInHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);

  const statusConfig = getStatusConfig(event.status);
  const { bg, border, isDisabled } = statusConfig;

  const handleMouseEnter = () => {
    if (eventRef.current) {
      const rect = eventRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top + window.scrollY + 60,
        left: rect.right + window.scrollX - 135,
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
          className={`${bg} ${border} ${isDisabled ? "opacity-50 grayscale pointer-events-none" : ""
            } w-full h-full rounded-[4px] border-s-[4px] transition-all duration-300 cursor-pointer`}
        >
          <div>
            <h1 className="text-[14px] w-fit ps-[12px] pt-[12px] pb-[10px] text-[#2A2D34] font-semibold truncate">
              {event.title}
            </h1>
            <div className="flex ps-[12px]">
              <img src={alert} className="w-[12px] me-[3px] h-[14px]" alt="alert" />
              <span className="text-[12px] text-[#2A2D34]">
                {diffInHours > 0 ? diffInHours.toFixed(1) : 0}h
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
            <EventDetailsCard event={event} statusConfig={statusConfig} />
          </div>,
          document.body
        )}
    </>
  );
};

export default Event;