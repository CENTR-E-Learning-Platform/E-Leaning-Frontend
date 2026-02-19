import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { forwardRef, useState } from "react";
import sene from "../../../../assets/images/sene.jpg";
import { Star } from "lucide-react";
const SliderSayStudents = forwardRef((props: any, ref: any) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: false,
      swipe: false,
      arrows: false,
      touchMove: false,      
    };
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className="w-[564px] mx-auto mb-9">
      <Slider ref={ref} {...settings} className="!select-text">

        <div className="pr-7">
          <div className="w-[257]">
            <div className="flex mb-[10px] justify-between items-start gap-3.5 w-[187px]">
              <img
                className="rounded-full w-[40px] h-[40px]"
                src={sene}
                alt="sene"
              />
              <div className="">
                <h3 className="text-[#2A2D34] text-[16px] font-medium font-Poppins">
                  Ali hosny
                </h3>
                <p className="text-[#6D7588] font-normal text-[16px] font-Poppins">
                  February 6, 2026
                </p>
              </div>
            </div>

            <div className="w-[256.5]">
              <span className="flex mb-[10px] items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => {
                  const rating = 5;
                  if (star <= Math.floor(rating)) {
                    return (
                      <span key={star} className="text-[#FFD057]">
                        <Star fill="#FFD057" className="w-5 h-5" />
                      </span>
                    );
                  } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
                    return (
                      <span key={star} className="relative inline-block">
                        <Star className="w-[17px] h-[16px] text-[#FFD057]" />
                        <span
                          className="absolute top-0 left-0 overflow-hidden"
                          style={{ width: `${(rating % 1) * 100}%` }}
                        >
                          <Star
                            fill="#FFD057"
                            className="w-[17px] h-[16px] text-[#FFD057]"
                          />
                        </span>
                      </span>
                    );
                  } else {
                    return (
                      <span key={star} className="text-[#FFD057]">
                        <Star className="w-[17px] h-[16px]" />
                      </span>
                    );
                  }
                })}
              </span>

              <p
                className={`text-[16px] font-Poppins text-[#2A2D34] ${!isExpanded ? "line-clamp-2" : ""}`}
              >
                "Best math tutor I’ve ever had. Very professional, always on
                time, and makes the lessons actually enjoyable. He doesn't just
                lecture; he listens and adapts the lesson to how you think.
                10/10!"
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#2A2D34] text-[16px] font-medium mt-1 underline "
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </div>
                  
       <div className="pr-7">
          <div className="w-[257]">
            <div className="flex mb-[10px] justify-between items-start gap-3.5 w-[187px]">
              <img
                className="rounded-full w-[40px] h-[40px]"
                src={sene}
                alt="sene"
              />
              <div className="">
                <h3 className="text-[#2A2D34] text-[16px] font-medium font-Poppins">
                  Ali hosny
                </h3>
                <p className="text-[#6D7588] font-normal text-[16px] font-Poppins">
                  February 6, 2026
                </p>
              </div>
            </div>

            <div className="w-[256.5]">
              <span className="flex mb-[10px] items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => {
                  const rating = 5;
                  if (star <= Math.floor(rating)) {
                    return (
                      <span key={star} className="text-[#FFD057]">
                        <Star fill="#FFD057" className="w-5 h-5" />
                      </span>
                    );
                  } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
                    return (
                      <span key={star} className="relative inline-block">
                        <Star className="w-[17px] h-[16px] text-[#FFD057]" />
                        <span
                          className="absolute top-0 left-0 overflow-hidden"
                          style={{ width: `${(rating % 1) * 100}%` }}
                        >
                          <Star
                            fill="#FFD057"
                            className="w-[17px] h-[16px] text-[#FFD057]"
                          />
                        </span>
                      </span>
                    );
                  } else {
                    return (
                      <span key={star} className="text-[#FFD057]">
                        <Star className="w-[17px] h-[16px]" />
                      </span>
                    );
                  }
                })}
              </span>

              <p
                className={`text-[16px] font-Poppins text-[#2A2D34] ${!isExpand ? "line-clamp-2" : ""}`}
              >
                "Best math tutor I’ve ever had. Very professional, always on
                time, and makes the lessons actually enjoyable. He doesn't just
                lecture; he listens and adapts the lesson to how you think.
                10/10!"
              </p>
              <button
                onClick={() => setIsExpand(!isExpand)}
                className="text-[#2A2D34] text-[16px] font-medium mt-1 underline "
              >
                {isExpand ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </div>

       <div className="pr-7">
          <div className="w-[257]">
            <div className="flex mb-[10px] justify-between items-start gap-3.5 w-[187px]">
              <img
                className="rounded-full w-[40px] h-[40px]"
                src={sene}
                alt="sene"
              />
              <div className="">
                <h3 className="text-[#2A2D34] text-[16px] font-medium font-Poppins">
                  Ali hosny
                </h3>
                <p className="text-[#6D7588] font-normal text-[16px] font-Poppins">
                  February 6, 2026
                </p>
              </div>
            </div>

            <div className="w-[256.5]">
              <span className="flex items-center mb-[10px] gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => {
                  const rating = 5;
                  if (star <= Math.floor(rating)) {
                    return (
                      <span key={star} className="text-[#FFD057]">
                        <Star fill="#FFD057" className="w-5 h-5" />
                      </span>
                    );
                  } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
                    return (
                      <span key={star} className="relative inline-block">
                        <Star className="w-[17px] h-[16px] text-[#FFD057]" />
                        <span
                          className="absolute top-0 left-0 overflow-hidden"
                          style={{ width: `${(rating % 1) * 100}%` }}
                        >
                          <Star
                            fill="#FFD057"
                            className="w-[17px] h-[16px] text-[#FFD057]"
                          />
                        </span>
                      </span>
                    );
                  } else {
                    return (
                      <span key={star} className="text-[#FFD057]">
                        <Star className="w-[17px] h-[16px]" />
                      </span>
                    );
                  }
                })}
              </span>

              <p
                className={`text-[16px] font-Poppins text-[#2A2D34] ${!isExpanded ? "line-clamp-2" : ""}`}
              >
                "Best math tutor I’ve ever had. Very professional, always on
                time, and makes the lessons actually enjoyable. He doesn't just
                lecture; he listens and adapts the lesson to how you think.
                10/10!"
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#2A2D34] text-[16px] font-medium mt-1 underline "
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
});

export default SliderSayStudents;
