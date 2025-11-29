
import { CalendarCheck2Icon, Clock, Star } from "lucide-react";

const StaticPayment = () => {
  return (
    <>
      <div className="StaticPayment">
        <section className="border w-[435px] h-[191.36581420898438px] border-gray-300 rounded-[8px] p-[30px] mb-4">
          <p className="text-[18px] leading-[13px] tracking-[0] mb-7 font-medium text-[#2A2D34]">
            Your teacher
          </p>
          <div className="flex items-center gap-[19px]">
            <div className="ImageTeacher">
              <img
                src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
                alt="Teacher"
                className="w-[90px] h-[90px] rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-[20px] mb-4 leading-[13px] tracking-[0] font-bold">
                Mr. Mohamed Salama
              </h2>
              <div className="flex items-center gap-2 mb-4  text-xs mt-1">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const rating = 3.5;
                    if (star <= Math.floor(rating)) {
                      return (
                        <span key={star} className="text-[#FFD057]">
                          <Star fill="#FFD057" className="w-4 h-4" />
                        </span>
                      );
                    } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
                      return (
                        <span key={star} className="relative inline-block">
                          <Star className="w-4 h-4 text-[#FFD057]" />
                          <span
                            className="absolute top-0 left-0 overflow-hidden"
                            style={{ width: `${(rating % 1) * 100}%` }}
                          >
                            <Star
                              fill="#FFD057"
                              className="w-4 h-4 text-[#FFD057]"
                            />
                          </span>
                        </span>
                      );
                    } else {
                      return (
                        <span key={star} className="text-[#FFD057]">
                          <Star className="w-4 h-4" />
                        </span>
                      );
                    }
                  })}
                </div>
                <span className="text-gray-500">(502 reviews)</span>
              </div>
              <div className="h-[29px] w-[191px] flex justify-center items-center bg-[#FFDEDE] px-[10px] py-[8px] rounded-[18px]">
                <p className="font-semibold text-[18px] text-[#611D1D]">
                  Pure mathematics
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-emerald-100 rounded-t-[8px]">
          <section className="border bg-white w-[435px] h-[191.36581420898438px] border-gray-300 rounded-[8px] p-[30px]">
          <p className="text-[18px] leading-[13px] tracking-[0] mb-2 font-medium text-[#2A2D34]">
            Class details
          </p>
          <div className="flex items-center h-[64px] gap-4">
            <div className="w-[64px] h-[64px] border border-gray-300 rounded-[8px] py-[12px] px-[15px] g-[8px] flex flex-col items-center justify-center">
              <strong className="text-[16px] text-[#2A2D34] font-medium">
                oct
              </strong>
              <div className="text-[24px] text-[#2A2D34] font-semibold">22</div>
            </div>
            <div>
              <div className="text-gray-700 flex items-center gap-[8px]">
                <CalendarCheck2Icon size={20} />
                <span className="text-[18px] font-normal">Wednesday</span>
              </div>
              <div className="text-gray-700 flex items-center gap-[8px]">
                <Clock size={20} />
                <span className="text-[18px] font-normal">
                  2:00 pm - 4:00 pm
                </span>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <div className="text[#2A2D34] leading-[13px] tracking-[0] font-medium text-[16px] mb-[12px]">
              Class title:
            </div>
            <div className="text[#2A2D34] leading-[13px] tracking-[0] font-medium text-[18px]">
              Differential equations
            </div>
          </div>
        </section>
        
        <div className="bg-emerald-100 py-[14px] px-[16px] rounded-b-[8px] mb-4">
          <p className="text-[#0A8458] text-[16px] font-medium leading-[13px] tracking-[0]">
            you can <span className="font-bold">cancel or reschedule</span>{" "}
            until 2:00 pm Oct 22
          </p>
        </div>
        </div>

        <section className="border w-[435px] h-[196px] border-gray-300 rounded-[8px] p-[30px]">
          <h3 className="text-[18px] font-semibold mb-2">Checkout info</h3>

          <div className="flex justify-between">
            <span className="text-[18px] font-normal text-[#2A2D34]">
              Original price
            </span>
            <span className="text-[18px] font-normal text-[#525FE1]">
              EGP 100
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-[18px] font-normal text-[#2A2D34]">tax</span>
            <span className="text-[18px] font-normal text-[#525FE1]">
              EGP 10
            </span>
          </div>
          <div className="border border-gray-300"></div>
          <div className="flex justify-between items-center mt-2">
            <span className="font-semibold text-[#2A2D34] text-[24px]">
              Total
            </span>
            <span className="font-semibold text-[#525FE1] text-[24px]">
              EGP 110
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default StaticPayment;
