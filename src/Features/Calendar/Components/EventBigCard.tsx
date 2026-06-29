import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import profile from "../../../assets/images/imptyPhoto.jpg";
import alert from "../../../assets/icons/alert2.svg";
import { format } from "date-fns";
import { BASE_URL } from "../Utils/api";
import UpdateSessionForm from "./Form/UpdateSessionForm";
import { roleToAuth } from "../../../Utils/Constant";
import deleteSession from "../Services/deleteSession";
import {useGetAllClasses} from "../Hooks/useGetAllClasses";
const getStatusDetails = (status: number) => {
  switch (status) {
    case 1: return { text: "Waiting", color: "text-[#00A9FE]", bg: "bg-[#00A9FE]/10" };
    case 2: return { text: "Waiting For Teacher", color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10" };
    case 3: return { text: "Active", color: "text-[#10B981]", bg: "bg-[#10B981]/10" };
    case 4: return { text: "Ended", color: "text-[#6B7280]", bg: "bg-[#6B7280]/10" };
    case 5: return { text: "Teacher Missed", color: "text-[#D24747]", bg: "bg-[#D24747]/10" };
    case 6: return { text: "Cancelled", color: "text-[#991B1B]", bg: "bg-[#991B1B]/10" };
    case 0:
    default: return { text: "Scheduled", color: "text-[#7B24BA]", bg: "bg-[#7B24BA]/10" };
  }
};

const EventBigCard = ({ event, statusConfig, onClose }: any) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteResult, setDeleteResult] = useState<{ success: boolean; message: string } | null>(null);
  const queryClient = useQueryClient();
  const { fetchClasses } = useGetAllClasses();

  const { mutate: handleDelete, isPending: isDeleting } = useMutation({
    mutationFn: () => deleteSession(event.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes"] });
      queryClient.invalidateQueries({ queryKey: ["quiz"] });
      setShowDeleteConfirm(false);
      setDeleteResult({ success: true, message: "Session deleted successfully." });    
    },
    onError: (error: any) => {
      const msg =
        error?.response?.data?.message ??
        error?.response?.data ??
        "Something went wrong. Please try again.";
      setShowDeleteConfirm(false);
      setDeleteResult({ success: false, message: typeof msg === "string" ? msg : "Something went wrong." });
    },
  });

  const start = new Date(event.start);
  const end = new Date(event.end);

  const formattedDate = format(start, "EEEE, MMMM d, yyyy");
  const startTimeStr = format(start, "h:mm a");
  const endTimeStr = format(end, "h:mm a");
  const durationHours = ((end.getTime() - start.getTime()) / (1000 * 60 * 60)).toFixed(1);

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
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 cursor-pointer"
        onClick={onClose}
      >
        <div
          className="relative w-[600px] max-h-[90vh] overflow-y-auto bg-white rounded-[16px] border border-[#E5E7EB] shadow-2xl cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`h-[6px] w-full rounded-t-[16px] ${dot}`}
          />

          <div className="p-[32px] flex flex-col gap-[28px]">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center gap-[10px]">
                  <div className={`w-[12px] h-[12px] rounded-full ${dot}`} />
                  <h2 className="text-[24px] font-bold text-[#2A2D34] leading-tight">
                    {event.title}
                  </h2>
                </div>
                <span className={`text-[13px] font-semibold px-[10px] py-[3px] rounded-full w-fit ${statusDetails.color} ${statusDetails.bg}`}>
                  {statusDetails.text}
                </span>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="text-right">
                  <p className="text-[13px] text-[#6D7588]">Teacher</p>
                  <p className="text-[14px] font-semibold text-[#2A2D34]">{event.teacherName || "—"}</p>
                </div>
                <img
                  src={event.profilePicturePath === BASE_URL ? profile : event.profilePicturePath}
                  alt="Teacher"
                  className="w-[52px] h-[52px] rounded-full object-cover border-2 border-[#E5E7EB]"
                />
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#E5E7EB]" />

            <div className="grid grid-cols-2 gap-[16px]">
              <div className="flex flex-col gap-[4px]">
                <span className="text-[12px] text-[#9CA3AF] font-medium uppercase tracking-wide">Date</span>
                <div className="flex items-center gap-[6px] text-[#2A2D34]">
                  <img src={alert} className="w-[16px] h-[16px]" alt="" />
                  <span className="text-[15px] font-semibold">{formattedDate}</span>
                </div>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[12px] text-[#9CA3AF] font-medium uppercase tracking-wide">Time</span>
                <span className="text-[15px] font-semibold text-[#2A2D34]">
                  {startTimeStr} → {endTimeStr}
                  <span className="text-[13px] text-[#6D7588] font-normal ms-2">({durationHours}h)</span>
                </span>
              </div>
              {event.grade != null && (
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[12px] text-[#9CA3AF] font-medium uppercase tracking-wide">Grade</span>
                  <span className="text-[15px] font-semibold text-[#2A2D34]">{event.grade}</span>
                </div>
              )}
              {event.price != null && (
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[12px] text-[#9CA3AF] font-medium uppercase tracking-wide">Price</span>
                  <span className="text-[15px] font-semibold text-[#2A2D34]">${event.price}</span>
                </div>
              )}
            </div>

            {event.description && (
              <div className="flex flex-col gap-[8px]">
                <span className="text-[12px] text-[#9CA3AF] font-medium uppercase tracking-wide">Description</span>
                <p className="text-[15px] text-[#5A6376] leading-[26px] bg-[#F9FAFB] rounded-[8px] p-[14px]">
                  {event.description}
                </p>
              </div>
            )}

            <div className="w-full h-[1px] bg-[#E5E7EB]" />

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[10px]">
                <button
                  onClick={async () => {
                    if (!isDisabled) {
                      localStorage.setItem("sessionName", event.roomName);
                      localStorage.setItem("teacherName", event.teacherName);
                      localStorage.setItem("sessionId", event.id);
                      localStorage.setItem("teacherProfileImagePath", event.profilePicturePath);
                      window.open("/createroom/joinnow", "_blank");
                    }
                  }}
                  disabled={isDisabled}
                  className={`px-[24px] py-[10px] rounded-[8px] text-[14px] font-semibold transition-all duration-300 ${
                    isDisabled
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-[#525FE1] text-white hover:bg-[#404DDD] cursor-pointer"
                  }`}
                >
                  Join
                </button>
                {roleToAuth?.includes("Teacher") && (
                  <>
                    <button
                      onClick={() => setShowUpdateForm(true)}
                      className="px-[24px] py-[10px] rounded-[8px] text-[14px] font-semibold border border-[#525FE1] text-[#525FE1] hover:bg-[#EEF0FD] transition-all duration-300 cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(true)}
                      className="px-[24px] py-[10px] rounded-[8px] text-[14px] font-semibold bg-[#EF4444] text-white hover:bg-[#DC2626] transition-all duration-300 cursor-pointer"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
              <button
                onClick={onClose}
                className="px-[20px] py-[10px] rounded-[8px] text-[14px] font-medium text-[#6B7280] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-all duration-300 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50">
          <div
            className="bg-white rounded-[14px] p-[28px] w-[380px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-[12px] mb-[12px]">
              <div className="w-[40px] h-[40px] rounded-full bg-red-100 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                  <path d="M10 11v6M14 11v6" />
                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#2A2D34]">Delete Session</h3>
            </div>
            <p className="text-[14px] text-[#6D7588] leading-[22px] mb-[24px]">
              Are you sure you want to delete <span className="font-semibold text-[#2A2D34]">"{event.title}"</span>? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-[10px]">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                disabled={isDeleting}
                className="px-[20px] py-[9px] rounded-[8px] text-[14px] font-medium text-[#6B7280] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete()}
                disabled={isDeleting}
                className="px-[20px] py-[9px] rounded-[8px] text-[14px] font-semibold text-white bg-[#EF4444] hover:bg-[#DC2626] transition-colors flex items-center justify-center min-w-[90px] cursor-pointer"
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteResult && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50">
          <div
            className="bg-white rounded-[14px] p-[28px] w-[380px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-[16px] text-center">
              {deleteResult.success ? (
                <div className="w-[56px] h-[56px] rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              ) : (
                <div className="w-[56px] h-[56px] rounded-full bg-red-100 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              )}
              <div>
                <h3 className={`text-[18px] font-bold mb-[6px] ${deleteResult.success ? "text-[#10B981]" : "text-[#EF4444]"}`}>
                  {deleteResult.success ? "Deleted Successfully" : "Delete Failed"}
                </h3>
                <p className="text-[14px] text-[#6D7588] leading-[22px]">
                  {deleteResult.message}
                </p>
              </div>
              <button
                onClick={() => {
                  setDeleteResult(null);
                  fetchClasses();
                  if (deleteResult.success) onClose();
                }}
                className={`mt-[4px] px-[28px] py-[10px] rounded-[8px] text-[14px] font-semibold text-white transition-colors cursor-pointer ${
                  deleteResult.success
                    ? "bg-[#10B981] hover:bg-[#059669]"
                    : "bg-[#EF4444] hover:bg-[#DC2626]"
                }`}
              >
                {deleteResult.success ? "Done" : "OK"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showUpdateForm && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[12px] max-h-[90vh] overflow-y-auto"
          >
            <UpdateSessionForm
              session={sessionData}
              onClose={() => setShowUpdateForm(false)}
              numberOfWeeks={event.numberOfWeeks ?? 1}
              sessionSeriesId={event.sessionSeriesId ?? ""}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EventBigCard;
