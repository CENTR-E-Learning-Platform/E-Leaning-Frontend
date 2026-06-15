import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { useTeacherProfile } from "../../Hooks/useTeacherProfile";
import { formatSessionDate, formatSessionTime } from "../../Constant/Constant";
import { roleToAuth } from "../../../../Utils/Constant";
import { useNavigate } from "react-router-dom";

const AvailableClasses = () => {
  const { data } = useTeacherProfile();
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const navigate = useNavigate();
  const isTeacher = roleToAuth?.includes("Teacher") ? true : false;

  if (data?.data?.data?.upComingSessions?.length === 0) {
    return (
      <div className="border border-[#E8EAED] rounded-xl p-6 bg-white">
        <div className="flex flex-col items-center justify-center py-8">
          <Calendar className="w-12 h-12 text-[#525FE1] mb-4" />

          <h3 className="text-[#2A2D34] text-[20px] font-semibold mb-2">
            No Available Classes
          </h3>

          <p className="text-[#6D7588] text-[14px] font-medium text-center max-w-[250px]">
            There are currently no upcoming classes available. Please check back
            later.
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <section className="Available-section">
        <div className="w-[387px] mx-auto p-7 rounded-[9px] border border-[#E8EAED]">
          <div className="mb-5">
            <h2 className="text-[24px] font-semibold text-[#2A2D34] mb-2">
              Available classes
            </h2>
            {!isTeacher && (
              <p className="text-[#6D7588] text-[16px] font-medium">
                Choose a time that fits your schedule
              </p>
            )}
          </div>

          <hr className="border-[#D1D5DB] w-[327px] mb-6" />

          <div className="space-y-2.5 mb-4">
            {data?.data?.data?.upComingSessions?.map(
              (
                session: {
                  price: number;
                  startTime: string;
                  endTime: string;
                  numberOfSeats: number;
                },
                index: number,
              ) => (
                <div
                  key={index}
                  className="border border-[#E8EAED] rounded-xl p-4 mb-4 bg-white"
                >
                  <div className="mb-4 flex  items-start gap-2">
                    <img
                      src="../../../../../src/assets/icons/MoneyIcon.svg"
                      alt="MoneyIcon"
                    />

                    <div className="price-session">
                      <p className="font-bold text-[#525FE1] text-[24px]">
                        <span> Egp {session.price}</span>
                      </p>

                      <p className="font-medium text-[14px] text-[#2A2D34]">
                        per class
                      </p>
                    </div>
                  </div>

                  <hr className="my-4 border-[#E8EAED]" />

                  <div
                    onClick={() => setSelectedClass(index)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedClass === index
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-[#2A2D34]" />
                      <span className="text-[18px] font-medium text-[#2A2D34]">
                        {formatSessionDate(session.startTime)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#2A2D34]" />
                      <span className="text-[18px] font-medium text-[#2A2D34]">
                        {formatSessionTime(session.startTime, session.endTime)}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#E15254] font-bold text-[14px] mt-2 mb-4">
                    {session.numberOfSeats} seats left
                  </p>
                </div>
              ),
            )}
          </div>

          {isTeacher ? (
            <button
              onClick={() => navigate("/Calendar")}
              className="w-[327px] h-[45px] cursor-pointer flex justify-center items-center bg-[#525FE1] hover:bg-indigo-600 text-[#F9FBFC] font-semibold text-[18px] py-4 rounded-[8px] transition-colors"
            >
              Manage Schedule
            </button>
          ) : (
            <button className="w-[327px] h-[45px] cursor-pointer flex justify-center items-center bg-[#525FE1] hover:bg-indigo-600 text-[#F9FBFC] font-semibold text-[18px] py-4 rounded-[8px] transition-colors">
              Book class
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default AvailableClasses;
