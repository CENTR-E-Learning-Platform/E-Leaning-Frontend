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
import { useGetAllClasses } from "../Hooks/useGetAllClasses";
import { useCalendar } from "../Contexts/CalendarContext";

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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  
  useGetAllClasses();
  const { TeacherClass } = useCalendar();

  const formattedEvents = TeacherClass?.map((cls: any) => ({
    ...cls,
    start: new Date(cls.startTime),
    end: new Date(cls.endTime),
  })) || [];

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
            events={formattedEvents}
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
            date={selectedDate || new Date()}
            onNavigate={(newDate) => {
              setSelectedDate(newDate);
              setMonth(newDate);
            }}
            selectable={true}
            onSelectSlot={(slotInfo) => {
              if (slotInfo.start) {
                setSelectedDate(slotInfo.start);
                setMonth(slotInfo.start);
              }
            }}
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
                selected={selectedDate}
                onSelect={(day) => {
                  if (day) {
                    setSelectedDate(day);
                    setMonth(day);
                  }
                }}
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
              <Upcoming selectedDate={selectedDate || new Date()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCalendar;