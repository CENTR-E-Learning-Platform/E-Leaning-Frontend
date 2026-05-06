import alert from "../../../assets/icons/alert2.svg";
import { format } from "date-fns";
import { useAttemptQuiz } from "../../Quiz/Hooks/useAttemptQuiz";

const QuizDetailsCard = ({ event }: any) => {
  const {fetchQuestions} = useAttemptQuiz();
  const start = event.start ? new Date(event.start) : new Date();
  const dueDate = new Date(event.dueDate);
  const now = new Date();

  const isExpired = now > dueDate;
  const isTime = now >= start && now <= dueDate;

  const formattedDate = format(dueDate, "MMMM d");
  const endTimeStr = format(dueDate, "h:mm a");

  let statusText = "Upcoming";
  let statusColor = "text-[#F59E0B]";
  let dotColor = "bg-[#F59E0B]";

  if (isExpired) {
    statusText = "Expired";
    statusColor = "text-[#6B7280]";
    dotColor = "bg-[#6B7280]";
  } else if (isTime) {
    statusText = "Available";
    statusColor = "text-[#10B981]";
    dotColor = "bg-[#10B981]";
  }

  return (
    <div
      className="bg-[#FFFFFF] rounded-[8px] border border-[#E5E7EB] p-[20px] shadow-lg flex flex-col justify-between cursor-default"
      style={{ gap: "32px", width: "390px" }}
    >
      <div className="flex flex-col gap-[12px]">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-[8px]">
            <div className={`w-[10px] h-[10px] rounded-full ${dotColor}`}></div>
            <h2 className="text-[18px] font-semibold text-[#2A2D34] leading-tight max-w-[300px] truncate">
              {event.title || event.quizName}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-[6px] text-[#6D7588]">
          <img src={alert} className="w-[16px] h-[16px]" alt="alert" />
          <span className="text-[14px] font-medium">
            Due: {formattedDate}, {endTimeStr}
          </span>
        </div>

        <p className="text-[14px] text-[#6D7588] leading-[20px]">
          Teacher: {event.teacherName || "N/A"}
        </p>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="w-full h-[1px] bg-[#E5E7EB]"></div>

        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[12px]">
            <button
              onClick={() => {
                if (!isExpired) {
                    fetchQuestions();
                    localStorage.setItem("sessionId", event.sessionId);
                    window.open(`/quiz/${event.quizId}`, "_blank");
                }
              }}
              disabled={isExpired}
              className={`px-[20px] py-[8px] rounded-[6px] text-[14px] font-semibold transition-all duration-300 ${
                isExpired
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#525FE1] text-white hover:bg-[#404DDD] cursor-pointer"
              }`}
            >
              Start Quiz
            </button>
          </div>

          <span className={`text-[14px] font-semibold ${statusColor}`}>
            {statusText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuizDetailsCard;