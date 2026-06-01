import React from "react";
import UpcomingClassItem from "./UpcomingClassItem";
import { useNavigate } from "react-router-dom";
import UpcomingEmpty from "../EmptyState/UpcomingEmpty";
import type { TeacherClass } from "../../Types/Types";

interface UpcomingClassesCardProps {
  upcomingClasses?: TeacherClass[];
}

const UpcomingClassesCard: React.FC<UpcomingClassesCardProps> = ({
  upcomingClasses,
}) => {
  const navigate = useNavigate();
  const classes = upcomingClasses ?? [];

  if (classes.length === 0) {
    return <UpcomingEmpty />;
  }

  return (
    <div className="box-border flex flex-col items-start gap-[28px] w-[687px] max-w-[687px] min-w-[643px] h-auto bg-white border border-[#E8EAED] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] rounded-[8px] font-['Poppins']">
      <div className="flex flex-col items-start p-[24px] gap-[24px] w-full h-auto">
        <div className="flex flex-row justify-between items-center w-full h-[17px]">
          <h2 className="text-[#2A2D34] font-bold text-[20px] leading-[17px]">
            Upcoming classes
          </h2>
          <button
            onClick={() => {
              navigate("/Calendar");
            }}
            className="text-[#525FE1] font-medium text-[16px] leading-[13px] cursor-pointer"
          >
            View Schedule
          </button>
        </div>

        <div className="flex flex-col items-start gap-[20px] w-full">
          {classes.map((cls, index) => (
            <React.Fragment key={`${cls.roomName ?? cls.title}-${index}`}>
              <UpcomingClassItem
                cls={cls}
                isLast={index === classes.length - 1}
              />
              {index !== classes.length - 1 && (
                <div className="w-full h-0 border border-[#E8EAED]"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingClassesCard;
