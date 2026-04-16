import React from "react";

interface ContactProps {
  name: string;
  message: string;
  time: string;
  avatarUrl: string;
  isActive?: boolean;
  isOnline?: boolean;
  hasUnread?: boolean;
}

const ContactItem: React.FC<ContactProps> = ({
  name,
  message,
  time,
  avatarUrl,
  isActive,
  isOnline,
  hasUnread,
}) => {
  return (
    <div
      className={`flex flex-row items-center p-[14.4px] gap-[15.2px] w-[329.6px] h-[72px] rounded-[14.4px] transition-all ${
        isActive
          ? "bg-white shadow-[0px_0.9px_1.8px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="relative flex flex-col items-start p-0 isolate w-[45.6px] h-[43.2px]">
        <div
          className={`w-[45.6px] h-[43.2px] rounded-full overflow-hidden bg-gray-200 ${
            isActive ? "border-[1.8px] border-[#525FE1]" : ""
          }`}
        >
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        {isOnline && (
          <div className="absolute w-[11.4px] h-[10.8px] right-0 bottom-0 bg-[#22C55E] border-[1.8px] border-white rounded-full z-10" />
        )}
      </div>

      <div className="flex flex-col items-start p-0 gap-[3.6px] flex-grow w-[213.7px] h-[43.2px]">
        <div className="flex flex-row justify-between items-center p-0 w-full h-[21.6px] self-stretch">
          <h3
            className={`font-['Poppins'] text-[15.2px] leading-[21.6px] flex items-center ${
              isActive
                ? "font-bold text-[#2A2D34]"
                : "font-semibold text-[#2A2D34]"
            }`}
          >
            {name}
          </h3>
          <span
            className={`font-['Poppins'] text-[9.5px] leading-[13.5px] flex items-center ${
              isActive
                ? "font-semibold text-[#525FE1]"
                : "font-light text-[#434656]"
            }`}
          >
            {time}
          </span>
        </div>
        <div className="flex flex-col items-start p-0 w-full h-[18px] self-stretch">
          <p
            className={`font-['Poppins'] text-[13.3px] leading-[18px] flex items-center truncate w-full ${
              isActive
                ? "font-medium text-[#525FE1]"
                : "font-normal text-[#434656]"
            }`}
          >
            {message}
          </p>
        </div>
      </div>

      {hasUnread && (
        <div className="w-[9.5px] h-[9px] bg-[#525FE1] rounded-full flex-none" />
      )}
    </div>
  );
};

const ContactList: React.FC = () => {
  return (
    <div className="flex flex-col items-start py-[14.4px] pl-[14.4px] gap-[7.2px] w-[360px] h-[744.3px] overflow-y-auto scroll-smooth">
      <ContactItem
        isActive
        isOnline
        hasUnread
        name="Mr. Mohamed Ali"
        message="Perfect, I'll review it before clas..."
        time="8:22 am"
        avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Mohamed"
      />
      <ContactItem
        name="Mr. Karim Ahmed"
        message="Can we reschedule tomorrow's se..."
        time="2h"
        avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Karim"
      />

      <ContactItem
        name="Mr. Karim Ahmed"
        message="Can we reschedule tomorrow's se..."
        time="2h"
        avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Karim"
      />
      <ContactItem
        name="Mr. Karim Ahmed"
        message="Can we reschedule tomorrow's se..."
        time="2h"
        avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Karim"
      />
      <ContactItem
        name="Mr. Karim Ahmed"
        message="Can we reschedule tomorrow's se..."
        time="2h"
        avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Karim"
      />
      <ContactItem
        name="Mr. Karim Ahmed"
        message="Can we reschedule tomorrow's se..."
        time="2h"
        avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Karim"
      />
      <ContactItem
        name="Mr. Karim Ahmed"
        message="Can we reschedule tomorrow's se..."
        time="2h"
        avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Karim"
      />
      <ContactItem
        name="Mr. Karim Ahmed"
        message="Can we reschedule tomorrow's se..."
        time="2h"
        avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Karim"
      />
    </div>
  );
};

export default ContactList;
