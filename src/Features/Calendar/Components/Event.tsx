import alert from "../../../assets/icons/alert.svg";

const Event = ({ event }: any) => {
  const start = new Date(event.start);
  const end = new Date(event.end);
  const diffInHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);

  return (
    <div className="bg-[#7B24BA]/20 w-full h-full rounded-[4px] border-s-[4px] border-s-[#7B24BA]">
      <div>
        <div>
          <h1 className="text-[14px] w-fit ps-[12px] pt-[12px] pb-[10px] text-[#2A2D34] font-semibold">
            {event.title}
          </h1>
          <div className="flex ps-[12px]">
            <img
              src={alert}
              className="w-[12px] me-[3px] h-[14px]"
              alt="alert"
            />
            <span className="text-[12px] text-[#2A2D34]">
              {diffInHours > 0 ? diffInHours.toFixed(1) : 0}h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;