import React from "react";

interface TeacherClass {
  additionalAttendeesCount?: number;
  attendeeProfilePictures?: string[];
  level?: string;
  roomName?: string;
  startTime?: string;
  title?: string;
}

interface ClassItemProps {
  cls: TeacherClass;
  isLast: boolean;
  upcomingClasses?: TeacherClass[];
}

const UpcomingClassItem: React.FC<ClassItemProps> = ({ cls , upcomingClasses}) => {
  const startDate = cls.startTime ? new Date(cls.startTime) : null;
  const isValidDate =
    startDate !== null && startDate.toString() !== "Invalid Date";
  const formattedTime =
    startDate && isValidDate
      ? startDate.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      : "--:--";
  const [time, period] = formattedTime.split(" ");

  const diffMinutes =
    startDate && isValidDate
      ? Math.round((startDate.getTime() - new Date().getTime()) / 60000)
      : null;
  const statusText =
    diffMinutes === null
      ? "No schedule"
      : diffMinutes < 0
        ? "Started"
        : diffMinutes < 60
          ? `${diffMinutes} min left`
          : diffMinutes < 1440
            ? `${Math.floor(diffMinutes / 60)} hr left`
            : `${Math.ceil(diffMinutes / 1440)} day${Math.ceil(diffMinutes / 1440) > 1 ? "s" : ""} left`;

  const statusColor =
    diffMinutes !== null && diffMinutes < 30 ? "#CC3363" : "#2DB584";
  const buttonOpacity = diffMinutes !== null && diffMinutes >= 0 ? 1 : 0.5;
  const classes = upcomingClasses ?? [];
  const attendees = cls.attendeeProfilePictures ?? [];
  const shownAvatars = attendees.slice(0, 3);
  const additionalCount = cls.additionalAttendeesCount ?? 0;

  return (
    <div className="flex flex-row justify-between w-full items-center h-[100px] font-['Poppins']">
      <div className="flex flex-row items-center gap-[20px] w-[349px] h-[100px]">
        <div className="flex flex-col justify-center items-center p-[21px_15px] w-[100px] h-[100px] bg-white border-2 border-[#E8EAED] rounded-[12px]">
          <span className="text-[#2A2D34] font-bold text-[28px] leading-[24px]">
            {time}
          </span>
          <span className="text-[#2A2D34] font-normal text-[14px] leading-[9px] mt-2 uppercase">
            {period ?? ""}
          </span>
        </div>

        <div className="flex flex-col items-start gap-[16px] w-[229px] h-[90px]">
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="text-[#2A2D34] font-semibold text-[18px] leading-[13px] truncate max-w-[229px]">
              {cls.title ?? "Untitled class"}
            </h3>
            <p className="text-[#6D7588] font-medium text-[14px] leading-[13px]">
              {cls.level ?? "No level"}
            </p>
          </div>

          {classes.length === 0 ? (
            ""
          ) : (
            <div className="flex flex-row items-center p-[4px_16px_4px_4px] gap-[8px] bg-[#E8EAED] rounded-[60px] h-[36px] overflow-hidden">
              <div className="flex flex-row items-center">
                {shownAvatars.length > 0 ? (
                  shownAvatars.map((avatar, index) => (
                    <div
                      key={index}
                      className={`w-[28px] h-[28px] rounded-full border border-[#D1D5DB] bg-gray-300 overflow-hidden ${index > 0 ? "-ml-[10px]" : ""}`}
                    >
                      <img
                        src={avatar}
                        alt={`attendee-${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))
                ) : (
                  <div className="w-[28px] h-[28px] rounded-full border border-[#D1D5DB] bg-gray-300" />
                )}
              </div>
              <span className="text-[#2A2D34] font-medium text-[16px] leading-[13px]">
                +{additionalCount}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-row items-center gap-[24px]">
        <div className="flex flex-row items-center gap-[8px]">
          <div
            className="w-[8px] h-[8px] rounded-full"
            style={{ backgroundColor: statusColor }}
          />
          <span
            className="font-semibold text-[14px] leading-[12px]"
            style={{ color: statusColor }}
          >
            {statusText}
          </span>
        </div>

        <button
          className="flex justify-center items-center p-[14px_16px] w-[113px] h-[39px] bg-[#525FE1] rounded-[8px] text-white font-semibold text-[16px] leading-[13px] transition-all hover:brightness-110"
          style={{ opacity: buttonOpacity }}
        >
          Join class
        </button>
      </div>
    </div>
  );
};

export default UpcomingClassItem;
