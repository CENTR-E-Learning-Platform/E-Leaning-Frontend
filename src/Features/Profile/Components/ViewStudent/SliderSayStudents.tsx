import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { forwardRef } from "react";
import { Star } from "lucide-react";
import { useStudentProfileContext } from "../../Contexts/StudentProfileContext";
import { BASE_URL } from "../../Utils/Apis";

const SliderSayStudents = forwardRef((_props: any, ref: any) => {
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

  const { teacherProfile } = useStudentProfileContext();

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="w-[564px] mx-auto mb-9">
      <Slider ref={ref} {...settings} className="!select-text">
        {teacherProfile?.reviews?.map((review, index) => (
          <div key={index} className="px-3">
            <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-4 h-full">
              <div className="flex items-center gap-3 mb-3">
                {review.reviewerProfilePicture ? (
                  <img
                    className="rounded-full w-[40px] h-[40px] object-cover flex-shrink-0"
                    src={`${BASE_URL}${review.reviewerProfilePicture}`}
                    alt="StudentPhoto"
                  />
                ) : (
                  <div className="rounded-full w-[40px] h-[40px] flex-shrink-0 bg-[#525FE1] flex items-center justify-center text-white text-[14px] font-bold uppercase">
                    {review.reviewerName?.substring(0, 2) || "??"}
                  </div>
                )}
                <div>
                  <h3 className="text-[#2A2D34] text-[14px] font-medium font-Poppins">
                    {review.reviewerName}
                  </h3>
                  <p className="text-[#6D7588] font-normal text-[12px] font-Poppins">
                    {formatDate(review.reviewedAt)}
                  </p>
                </div>
              </div>

              <span className="flex mb-2 items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => {
                  const rating = review.rate;
                  if (star <= Math.floor(rating)) {
                    return (
                      <Star
                        key={star}
                        fill="#FFD057"
                        className="w-4 h-4 text-[#FFD057]"
                      />
                    );
                  } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
                    return (
                      <span
                        key={star}
                        className="relative inline-block w-4 h-4"
                      >
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
                      <Star key={star} className="w-4 h-4 text-[#FFD057]" />
                    );
                  }
                })}
              </span>

              <p className="text-[14px] font-Poppins text-[#2A2D34] leading-relaxed">
                {review.review}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default SliderSayStudents;
