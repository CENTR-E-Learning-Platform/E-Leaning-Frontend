import { useState } from "react";
import profile from "../../../assets/images/imptyPhoto.jpg";
import alert from "../../../assets/icons/alert2.svg";
import { format } from "date-fns";
import { BASE_URL } from "../Utils/api";
import UpdateSessionForm from "./Form/UpdateSessionForm";
import { roleToAuth } from "../../../Utils/Constant";

const getStatusDetails = (status: number) => {
  switch (status) {
    case 1: return { text: "Waiting", color: "text-[#00A9FE]" };
    case 2: return { text: "Waiting For Teacher", color: "text-[#F59E0B]" };
    case 3: return { text: "Active", color: "text-[#10B981]" };
    case 4: return { text: "Ended", color: "text-[#6B7280]" };
    case 5: return { text: "Teacher Missed", color: "text-[#D24747]" };
    case 6: return { text: "Cancelled", color: "text-[#991B1B]" };
    case 0:
    default: return { text: "Scheduled", color: "text-[#7B24BA]" };
  }
};

const EventDetailsCard = ({ event, statusConfig }: any) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const start = new Date(event.start);
  const end = new Date(event.end);

  const formattedDate = format(start, "MMMM d");
  const startTimeStr = format(start, "h:mm a");
  const endTimeStr = format(end, "h:mm a");

  const { dot, isDisabled } = statusConfig;
  const statusDetails = getStatusDetails(event.status);

  const sessionData = {
    id: event.id ?? "",
    title: event.title ?? "",
    startTime: event.start ? new Date(event.start).toISOString() : "",
    durationMinutes: event.durationMinutes ?? 0,
    grade: event.grade ?? 0,
    price: event.price ?? 0,
    reminder: event.reminder ?? "01:00:00",
    description: event.description ?? "",
  };

  return (
    <>
      <div
        className="absolute z-[999] top-0 left-full ms-2 w-[390px] bg-[#FFFFFF] rounded-[8px] border border-[#E5E7EB] p-[20px] shadow-lg flex flex-col justify-between cursor-default"
        style={{ gap: "32px" }}
      >
        <div className="flex flex-col gap-[12px]">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-[8px]">
              <div className={`w-[10px] h-[10px] rounded-full ${dot}`}></div>
              <h2 className="text-[18px] font-semibold text-[#2A2D34] leading-tight max-w-[260px]">
                {event.title}
              </h2>
            </div>
            <img
              src={event.profilePicturePath === BASE_URL ? profile : event.profilePicturePath}
              alt="Teacher"
              className="w-[34px] h-[34px] rounded-full object-cover border border-gray-200"
            />
          </div>

          <div className="flex items-center gap-[6px] text-[#6D7588]">
            <img src={alert} className="w-[16px] h-[16px]" alt="" />
            <span className="text-[14px] font-medium">
              {formattedDate}, {startTimeStr} <span className="mx-1">→</span> {endTimeStr}
            </span>
          </div>

          <p className="text-[14px] text-[#6D7588] leading-[20px]">
            {event.description || "No description provided."}
          </p>
        </div>

        <div className="flex flex-col gap-[20px]">
          <div className="w-full h-[1px] bg-[#E5E7EB]"></div>

          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-[8px]">
              <button
                onClick={async () => {
                  if (!isDisabled) {
                    await localStorage.setItem("sessionName", event.roomName);
                    await localStorage.setItem("teacherName", event.teacherName);
                    await localStorage.setItem("sessionId", event.id);
                    await localStorage.setItem("teacherProfileImagePath", event.profilePicturePath);
                    window.open("/createroom/joinnow", "_blank");
                  }
                }}
                disabled={isDisabled}
                className={`px-[20px] py-[8px] rounded-[6px] text-[14px] font-semibold transition-all duration-300 ${isDisabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#525FE1] text-white hover:bg-[#404DDD] cursor-pointer"
                  }`}
              >
                Join
              </button>

              {roleToAuth?.includes("Teacher") && (
                <button
                  onClick={() => setShowUpdateForm(true)}
                  className="px-[20px] py-[8px] rounded-[6px] text-[14px] font-semibold border border-[#525FE1] text-[#525FE1] hover:bg-[#EEF0FD] transition-all duration-300 cursor-pointer"
                >
                  Edit
                </button>
              )}
            </div>

            <span className={`text-[14px] font-semibold ${statusDetails.color}`}>
              {statusDetails.text}
            </span>
          </div>
        </div>
      </div>

      {showUpdateForm && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#1F2937]/20"
          onClick={() => setShowUpdateForm(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[12px] max-h-[90vh] overflow-y-auto"
          >
            <UpdateSessionForm
              session={sessionData}
              onClose={() => setShowUpdateForm(false)}
              numberOfWeeks={event.numberOfWeeks ?? 1
              }
              sessionSeriesId={event.sessionSeriesId ?? ""}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EventDetailsCard;