import alert from "../../../assets/icons/alert2.svg";
import profile from "../../../assets/icons/profile.svg";
import { useCalendar } from "../Contexts/CalendarContext";
import { useNavigate } from "react-router-dom";
import { isSameDay } from "date-fns";

const UpcomingEvents = ({ selectedDate }: { selectedDate: Date }) => {
  const { TeacherClass } = useCalendar();
  const navigator = useNavigate();

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

          return (
            <div
              key={index}
              className="bg-[#7B24BA]/20 w-[265px] h-[153px] rounded-[10px] border-[1px] border-[#7B24BA] mb-[10px]"
            >
              <div>
                <div>
                  <h1 className="text-[16px] w-fit ps-[12px] pt-[12px] mb-[10px] text-[#2A2D34] font-medium">
                    {e.title}
                  </h1>
                  <div className="flex ps-[12px] ">
                    <div className="flex justify-center items-center">
                      <img
                        src={alert}
                        className="w-[12px] me-[3px]  h-[14px]"
                        alt="alert"
                      />
                    </div>
                    <span className="text-[12px]  text-center text-[#6D7588]">
                      {start} - {end}
                    </span>
                  </div>
                  <div className="flex ps-[12px] mt-[8px] ">
                    <div className="flex justify-center items-center">
                      <img
                        src={profile}
                        className="w-[12px] me-[4px]  h-[15px]"
                        alt="profile"
                      />
                    </div>
                    <span className="text-[12px]  text-center text-[#6D7588]">
                      Mr. Mohamed salama
                    </span>
                  </div>
                  <button
                    onClick={async () => {
                      await localStorage.setItem("sessionName", e.roomName);
                      navigator("/createroom/joinnow");
                    }}
                    className="bg-[#525FE1] ms-[12px] w-[113px] h-[41px] rounded-[8px] flex justify-center items-center text-[16px] text-[#F9FBFC] font-semibold mt-[12px] cursor-pointer hover:bg-[#404DDD] transition duration-300"
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