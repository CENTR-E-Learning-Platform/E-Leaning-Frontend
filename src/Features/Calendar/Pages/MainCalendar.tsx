import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";

import Toolbar from "../Components/Toolbar";
import Event from "../Components/Event";
import QuizEvent from "../Components/QuizEvent";
import DayPickerHeader from "../Components/DayPickerHeader";
import Upcoming from "../Components/Upcoming";
import ClassButton from "../Components/ClassButton";
import ClassForm from "../Components/Form/ClassForm";
import { useGetAllClasses } from "../Hooks/useGetAllClasses";
import { useCalendar } from "../Contexts/CalendarContext";
import { roleToAuth } from "../../../Utils/Constant";
import { useGetAllQuizes } from "../Hooks/useGetAllQuizes";

import "../Style/calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-day-picker/dist/style.css";
import "../Style/DayPicker.css";
import "react-loading-skeleton/dist/skeleton.css";

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

const CustomEventWrapper = (props:any) => {
  if (props.event.type === "quiz") {
    return <QuizEvent {...props} />;
  }
  return <Event {...props} />;
};

const MainCalendar = () => {
  const [month, setMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const fetchedMonth = useRef<string | null>(null);

  const fetchIfNewMonth = (date: Date) => {
    const key = `${date.getFullYear()}-${date.getMonth()}`;
    if (fetchedMonth.current === key) return;
    fetchedMonth.current = key;
    fetchClasses(date);
  };

  const { Class, active } = useCalendar();
  const { fetchClasses, isLoading: classesLoading } = useGetAllClasses();
  const { data, isLoading: quizzesLoading } = useGetAllQuizes();

  const isLoading = classesLoading || quizzesLoading;

  const formattedClasses = Class?.map((cls:any) => ({
    ...cls,
    type: "class",
    title: cls.title || cls.className,
    start: new Date(cls.startTime),
    end: new Date(cls.endTime),
  })) || [];

  const formattedQuizzes = data?.data?.map((quiz:any) => {
    const start = new Date(quiz.dueDate);
    const end = new Date(start);
    end.setHours(end.getHours() + 1);

    return {
      ...quiz,
      type: "quiz",
      title: quiz.quizName,
      start: start,
      end: end,
    };
  }) || [];

  const allEvents = [...formattedClasses, ...formattedQuizzes];

  const formattedEvents = allEvents.filter((event) => {
    if (active === "quiz") return event.type === "quiz";
    if (active === "homework") return event.type === "homework";
    return true;
  });

  useEffect(() => {
    fetchIfNewMonth(month);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, data]);

  return (
    <div className="bg-[#F9FBFC] flex justify-center items-center">
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F2937]/20">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[12px] max-h-[90vh] overflow-y-auto"
          >
            <ClassForm onClose={() => setOpen(false)} />
          </div>
        </div>
      )}

      <div className=" mt-[50px] ">
        {isLoading ? (
          <div className="flex">
            <div style={{ width: 895 }} className="flex flex-col gap-4">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2">
                  <Skeleton width={80} height={35} borderRadius={8} />
                  <Skeleton width={80} height={35} borderRadius={8} />
                </div>
                <Skeleton width={150} height={35} />
                <div className="flex gap-2">
                  <Skeleton width={60} height={35} borderRadius={8} />
                  <Skeleton width={60} height={35} borderRadius={8} />
                  <Skeleton width={60} height={35} borderRadius={8} />
                </div>
              </div>
              <div className="w-full">
                <Skeleton height={550} borderRadius={8} />
              </div>
            </div>

            <div className="w-[297px] rounded-[8px] border-[1px] border-[#E8EAED] bg-[#FFFFFF] ms-[20px] flex flex-col p-4">
              {roleToAuth?.includes("Teacher") && (
                <div className="w-full mb-4">
                  <Skeleton height={40} borderRadius={8} />
                </div>
              )}
              <div className="w-full mb-4">
                <Skeleton height={280} borderRadius={8} />
              </div>
              <div className="w-full flex-grow">
                <Skeleton height={150} borderRadius={8} />
              </div>
            </div>
          </div>
        ) : (
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
                event: CustomEventWrapper,
              }}
              eventPropGetter={eventPropGetter}
              date={selectedDate || new Date()}
              onNavigate={(newDate) => {
                setSelectedDate(newDate);
                setMonth(newDate);
                fetchIfNewMonth(newDate);
              }}
              selectable={true}
              onSelectSlot={(slotInfo) => {
                if (slotInfo.start) {
                  setSelectedDate(slotInfo.start);
                  setMonth(slotInfo.start);
                  fetchClasses(slotInfo.start);
                }
              }}
            />
            <div className="w-[297px] rounded-[8px] border-[1px] border-[#E8EAED] bg-[#FFFFFF] ms-[20px] flex flex-col items-center">
              {roleToAuth?.includes("Teacher") && (
                <div onClick={() => setOpen(true)}>
                  <ClassButton />
                </div>
              )}
              <div className="flex justify-center items-center">
                <DayPicker
                  mode="single"
                  month={month}
                  onMonthChange={(m) => {
                    setMonth(m);
                    fetchClasses(m);
                  }}
                  selected={selectedDate}
                  onSelect={(day) => {
                    if (day) {
                      setSelectedDate(day);
                      setMonth(day);
                      fetchClasses(day);
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
        )}
      </div>
    </div>
  );
};

export default MainCalendar;