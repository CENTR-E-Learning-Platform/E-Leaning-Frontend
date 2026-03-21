import UpcomingEvents from "./UpcomingEvents";
import { format } from "date-fns";

const Upcoming = ({ selectedDate }: { selectedDate: Date }) => {
  return (
    <div className="w-[265px] mt-[40px] ">
      <h1 className="text-[18px] text-[#2A2D34] font-semibold">
        Upcoming events
      </h1>
      <h1 className="text-[#6D7588] text-[16px] font-medium mt-[24px] mb-[16px]">
        {format(selectedDate, "MMMM d")}
      </h1>
      <UpcomingEvents selectedDate={selectedDate} />
    </div>
  );
};

export default Upcoming;