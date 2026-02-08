import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import "../Style/calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-day-picker/dist/style.css";
import Toolbar from "../Components/Toolbar";
import Event from "../Components/Event";
import { useEffect, useState } from "react";
import "../Style/DayPicker.css";
import DayPickerHeader from "../Components/DayPickerHeader";
import Upcoming from "../Components/Upcoming";
import ClassButton from "../Components/ClassButton";
import ClassForm from "../Components/Form/ClassForm";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const dummyEvents = [
  {
    title: "Physics class",
    start: new Date(),
    end: new Date(new Date().setHours(new Date().getHours() + 2)),
  },
];
const eventPropGetter = () => {
  return {
    style: {
      backgroundColor: "transparent",
      boxShadow: "none",
      border: "none",
      padding: "0px",
      outline: "none",
    },
  };
};
const MainCalendar = () => {
  const [month, setMonth] = useState(new Date());
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <div className="bg-[#F9FBFC] flex justify-center items-center">
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F2937]/20"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[12px] max-h-[90vh] overflow-y-auto"
          >
            <ClassForm />
          </div>
        </div>
      )}
      <div className=" mt-[40px] ">
        <h1 className="text-[32px] font-bold mb-[30px]">Schedule</h1>
        <div className="flex ">
          <Calendar
            localizer={localizer}
            events={dummyEvents}
            startAccessor="start"
            step={60}
            timeslots={1}
            endAccessor="end"
            style={{ width: 895 }}
            components={{
              toolbar: Toolbar,
              event: Event,
            }}
            eventPropGetter={eventPropGetter}
          />
          <div className="w-[297px] rounded-[8px] border-[1px] border-[#E8EAED] bg-[#FFFFFF] ms-[20px] flex flex-col items-center">
            <div onClick={() => setOpen(true)}>
              <ClassButton />
            </div>
            <div className="flex justify-center items-center">
              <DayPicker
                mode="single"
                month={month}
                onMonthChange={setMonth}
                showOutsideDays
                hideNavigation
                modifiersClassNames={{
                  selected:
                    "bg-[#525FE1] text-[#F9FBFC]  rounded-full w-[28px] h-[28px]",
                  today: " font-bold",
                  outside: "text-[#6D7588]",
                }}
                components={{
                  CaptionLabel: (props) => (
                    <DayPickerHeader
                      {...props}
                      month={month}
                      setMonth={setMonth}
                    />
                  ),
                }}
              />
            </div>
            <div className="flex items-center justify-center">
              <Upcoming />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCalendar;
