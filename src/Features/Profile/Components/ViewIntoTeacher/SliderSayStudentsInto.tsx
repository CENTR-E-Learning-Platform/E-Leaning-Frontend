import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { forwardRef, useState } from "react";
import bg_imptyPhoto from "../../../../assets/images/imptyPhoto.jpg";
import { Star } from "lucide-react";

interface ReviewItem {
  reviewerName?: string;
  reviewerProfilePicture?: string;
  reviewDate?: string;
  rating?: number;
  comment?: string;
}

interface SliderSayStudentsIntoProps {
  reviews: ReviewItem[];
}

const SliderSayStudentsInto = forwardRef<any, SliderSayStudentsIntoProps>(
  ({ reviews }, ref) => {
    const settings = {
      dots: false,
      infinite: reviews.length > 2,
      speed: 500,
      slidesToShow: Math.min(2, reviews.length),
      slidesToScroll: 1,
      draggable: false,
      swipe: false,
      arrows: false,
      touchMove: false,
    };

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const formatDate = (dateStr?: string) => {
      if (!dateStr) return "";
      try {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      } catch {
        return dateStr;
      }
    };

    const renderStars = (rating: number) => {
      return [1, 2, 3, 4, 5].map((star) => {
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
      });
    };

    return (
      <div className="w-[564px] mx-auto mb-9">
        <Slider ref={ref} {...settings} className="!select-text">
          {reviews.map((review, index) => (
            <div key={index} className="pr-7">
              <div className="w-[257]">
                <div className="flex mb-[10px] justify-between items-start gap-3.5 w-[187px]">
                  <img
                    className="rounded-full w-[40px] h-[40px]"
                    src={review.reviewerProfilePicture || bg_imptyPhoto}
                    alt={review.reviewerName || "Reviewer"}
                  />
                  <div>
                    <h3 className="text-[#2A2D34] text-[16px] font-medium font-Poppins">
                      {review.reviewerName || "Anonymous"}
                    </h3>
                    <p className="text-[#6D7588] font-normal text-[16px] font-Poppins">
                      {formatDate(review.reviewDate)}
                    </p>
                  </div>
                </div>

                <div className="w-[256.5]">
                  <span className="flex mb-[10px] items-center gap-0.5">
                    {renderStars(review.rating ?? 0)}
                  </span>

                  <p
                    className={`text-[16px] font-Poppins text-[#2A2D34] ${expandedIndex !== index ? "line-clamp-2" : ""}`}
                  >
                    "{review.comment}"
                  </p>
                  {review.comment && review.comment.length > 80 && (
                    <button
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                      className="text-[#2A2D34] text-[16px] font-medium mt-1 underline"
                    >
                      {expandedIndex === index ? "Read less" : "Read more"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
);

export default SliderSayStudentsInto;
