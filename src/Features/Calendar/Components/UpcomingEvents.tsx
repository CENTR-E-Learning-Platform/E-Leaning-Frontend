import alert from "../../../assets/icons/alert2.svg";
import profile from "../../../assets/icons/profile.svg";
import { useCalendar } from "../Contexts/CalendarContext";
const UpcomingEvents = () => {
  const {TeacherClass} = useCalendar();
  return (
    <>
      {TeacherClass.map((e:any) => {
        return (
          <div
            className={`bg-[#7B24BA]/20  w-[265px] h-[153px] rounded-[10px] border-[1px] border-[#7B24BA]`}
          >
            <div>
              <div>
                <h1 className="text-[16px] w-fit ps-[12px] pt-[12px] mb-[10px] text-[#2A2D34] font-medium">
                  {e.title}
                </h1>
                <div className="flex ps-[12px] ">
                  <div className="flex justify-center items-center">
                    {" "}
                    <img
                      src={alert}
                      className="w-[12px] me-[3px]  h-[14px]"
                      alt="alert"
                    />
                  </div>
                  <span className="text-[12px]  text-center text-[#6D7588]">
                    3:50 pm - 3:50 pm
                  </span>
                </div>
                <div className="flex ps-[12px] mt-[8px] ">
                  <div className="flex justify-center items-center">
                    {" "}
                    <img
                      src={profile}
                      className="w-[12px] me-[4px]  h-[15px]"
                      alt="alert"
                    />
                  </div>
                  <span className="text-[12px]  text-center text-[#6D7588]">
                    Mr. Mohamed salama
                  </span>
                </div>
                <button className="bg-[#525FE1] ms-[12px] w-[113px] h-[41px] rounded-[8px] flex justify-center items-center text-[16px] text-[#F9FBFC] font-semibold mt-[12px] cursor-pointer">
                  Join class
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default UpcomingEvents;
