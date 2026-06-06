import { BASE_URL } from "../../../Streaming/Utils/Apis";

interface TeacherProfileModalProps {
  teacher: any;
  onClose: () => void;
  onMessage: () => void;
}

const TeacherProfileModal = ({
  teacher,
  onClose,
  onMessage,
}: TeacherProfileModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">
      <div className="w-full max-w-[620px] rounded-[20px] bg-white p-[26px] shadow-[0px_20px_60px_rgba(0,0,0,0.15)]">
        <div className="flex justify-between items-start gap-4 mb-6">
          <div>
            <h2 className="text-[22px] font-bold text-[#111827]">
              {teacher.teacherName || "Teacher profile"}
            </h2>
            <p className="mt-2 text-[14px] text-[#6B7280]">
              View profile details and start a message with this teacher.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[14px] font-semibold text-[#6B7280] hover:text-[#111827]"
          >
            Close
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-[96px] h-[96px] rounded-[16px] overflow-hidden bg-gray-100">
              {teacher.teacherPic ? (
                <img
                  src={`${BASE_URL}${teacher.teacherPic}`}
                  alt={teacher.teacherName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#525FE1] text-white text-[32px] font-bold uppercase">
                  {teacher.teacherName?.substring(0, 2) || "T"}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <p className="text-[16px] font-semibold text-[#111827]">
                {teacher.subject}
              </p>
              <p className="text-[14px] text-[#374151]">
                {teacher.bio || "No bio available."}
              </p>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#E0E7FF] px-3 py-1 text-[12px] font-semibold text-[#4338CA]">
                  {teacher.rating ?? 0} ★
                </span>
                <span className="text-[12px] text-[#6B7280]">
                  {teacher.numberOfReviews ?? 0} reviews
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onMessage}
              className="rounded-[12px] bg-[#4F46E5] px-5 py-3 text-white font-semibold hover:bg-[#4338CA] transition"
            >
              Message Teacher
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-[12px] border border-gray-300 px-5 py-3 text-[#374151] font-semibold hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfileModal;
