import { useState } from "react";
import alert from "../../../assets/icons/alert2.svg";
import profile from "../../../assets/icons/profile.svg";
import { useCalendar } from "../Contexts/CalendarContext";
import { useNavigate } from "react-router-dom";
import { isSameDay } from "date-fns";

const getStatusConfig = (status: number) => {
  switch (status) {
    case 1:
      return { bg: "bg-[#00A9FE]/20", border: "border-[#00A9FE]", isDisabled: false };
    case 2:
      return { bg: "bg-[#F59E0B]/20", border: "border-[#F59E0B]", isDisabled: false };
    case 3:
      return { bg: "bg-[#10B981]/20", border: "border-[#10B981]", isDisabled: false };
    case 4:
      return { bg: "bg-[#6B7280]/20", border: "border-[#6B7280]", isDisabled: true };
    case 5:
      return { bg: "bg-[#D24747]/20", border: "border-[#D24747]", isDisabled: true };
    case 6:
      return { bg: "bg-[#991B1B]/20", border: "border-[#991B1B]", isDisabled: true };
    case 0:
    default:
      return { bg: "bg-[#7B24BA]/20", border: "border-[#7B24BA]", isDisabled: false };
  }
};

const getStatusText = (status: number) => {
  switch (status) {
    case 1: return "Waiting";
    case 2: return "Waiting For Teacher";
    case 3: return "Active";
    case 4: return "Ended";
    case 5: return "Teacher Missed";
    case 6: return "Cancelled";
    case 0:
    default: return "Scheduled";
  }
};

const UpcomingEvents = ({ selectedDate }: { selectedDate: Date }) => {
  const { TeacherClass } = useCalendar();
  const navigator = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const displayEvents = (TeacherClass || [])
    .filter((e: any) => isSameDay(new Date(e.startTime), selectedDate))
    .sort(
      (a: any, b: any) =>
        new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    )
    .slice(0, 3);

  return (
    <>
      {displayEvents.length === 0 ? (
        <p className="text-[#6D7588] text-[14px]">No events for this day.</p>
      ) : (
        displayEvents.map((e: any, index: number) => {
          const start = new Date(e.startTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });

          const end = new Date(e.endTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });

          const { bg, border, isDisabled } = getStatusConfig(e.status);

          return (
            <div
              key={index}
              className={`${bg} ${border} ${
                isDisabled ? "opacity-50 grayscale pointer-events-none" : ""
              } w-[265px] h-[153px] rounded-[10px] border-[1px] mb-[10px] transition-all duration-300`}
            >
              <div>
                <div>
                  <h1 className="text-[16px] w-full truncate px-[12px] pt-[12px] mb-[10px] text-[#2A2D34] font-medium transition-all duration-300">
                    {hoveredIndex === index ? getStatusText(e.status) : e.title}
                  </h1>
                  <div className="flex ps-[12px] ">
                    <div className="flex justify-center items-center">
                      <img
                        src={alert}
                        className="w-[12px] me-[3px] h-[14px]"
                        alt="alert"
                      />
                    </div>
                    <span className="text-[12px] text-center text-[#6D7588]">
                      {start} - {end}
                    </span>
                  </div>
                  <div className="flex ps-[12px] mt-[8px] ">
                    <div className="flex justify-center items-center">
                      <img
                        src={profile}
                        className="w-[12px] me-[4px] h-[15px]"
                        alt="profile"
                      />
                    </div>
                    <span className="text-[12px] text-center text-[#6D7588]">
                     {e.teacherName}
                    </span>
                  </div>
                  <button
                    disabled={isDisabled}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={async () => {
                      if (!isDisabled) {
                        await localStorage.setItem("sessionName", e.roomName);
                        await localStorage.setItem("teacherName", e.teacherName);
                        await localStorage.setItem("sessionId", e.id);
                        await localStorage.setItem("teacherProfileImagePath", e.profilePicturePath);
                        window.open("/createroom/joinnow", "_blank");
                      }
                    }}
                    className={`ms-[12px] w-[113px] h-[41px] rounded-[8px] flex justify-center items-center text-[16px] text-[#F9FBFC] font-semibold mt-[12px] transition duration-300 
                      ${
                        isDisabled
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#525FE1] hover:bg-[#404DDD] cursor-pointer"
                      }`}
                  >
                    Join class
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default UpcomingEvents;