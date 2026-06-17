import startStudent from "../../../../assets/icons/startStudent.svg";
import bg_imptyPhoto from "../../../../assets/images/imptyPhoto.jpg";
import Close from "../../../../assets/icons/Close.svg";
import { useState } from "react";
import { Star } from "lucide-react";

interface ReviewItem {
  reviewerName?: string;
  reviewerProfilePicture?: string;
  reviewDate?: string;
  rating?: number;
  comment?: string;
}

interface SeeAllReviewsIntoProps {
  isOpen: boolean;
  onClose: () => void;
  reviews: ReviewItem[];
  rating: number;
  numberOfReviews: number;
}

export default function SeeAllReviewsInto({
  isOpen,
  onClose,
  reviews,
  rating,
  numberOfReviews,
}: SeeAllReviewsIntoProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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

  // Build rating distribution from actual reviews
  const ratingDistribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((r) => Math.round(r.rating ?? 0) === stars).length,
  }));

  const renderStars = (starRating: number) => {
    return [1, 2, 3, 4, 5].map((star) => {
      if (star <= Math.floor(starRating)) {
        return (
          <span key={star} className="text-[#FFD057]">
            <Star fill="#FFD057" className="w-5 h-5" />
          </span>
        );
      } else if (star === Math.ceil(starRating) && starRating % 1 !== 0) {
        return (
          <span key={star} className="relative inline-block">
            <Star className="w-[17px] h-[16px] text-[#FFD057]" />
            <span
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${(starRating % 1) * 100}%` }}
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
    <>
      <section>
        {isOpen ? (
          <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-[878px] overflow-hidden relative">
              <button
                onClick={() => onClose()}
                className="absolute cursor-pointer top-8 right-12 flex items-center justify-center"
              >
                <img src={Close} alt="Close X" />
              </button>

              <div className="p-8 overflow-y-auto max-h-[90vh]">
                <h2 className="text-[28px] font-bold text-[#2A2D34] mb-2">
                  What my students say
                </h2>
                <p className="text-[#6D7588] text-[14px] mb-10">
                  Based on {numberOfReviews} student reviews
                </p>

                <div className="flex items-start gap-8 mb-8">
                  <div className="flex items-center gap-3">
                    <img
                      width={33}
                      height={31}
                      src={startStudent}
                      alt="Star"
                    />
                    <p className="text-[44px] font-semibold font-Poppins text-[#2A2D34]">
                      {rating}
                    </p>
                  </div>

                  <div className="flex-1">
                    {ratingDistribution.map((item) => (
                      <div key={item.stars} className="flex items-center">
                        <div className="w-[587px] mr-2.5 border-2 border-[#2A2D34] bg-white h-[8px] overflow-hidden">
                          <div
                            className="bg-[#2A2D34] h-[8px]"
                            style={{
                              width:
                                numberOfReviews > 0
                                  ? `${(item.count / numberOfReviews) * 100}%`
                                  : "0%",
                            }}
                          />
                        </div>
                        <span className="text-gray-600 text-sm min-w-[45px]">
                          ({item.count})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {numberOfReviews} reviews
                </h3>

                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-full w-[40px] h-[40px]"
                            src={
                              review.reviewerProfilePicture || bg_imptyPhoto
                            }
                            alt={review.reviewerName || "Reviewer"}
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-[#2A2D34] text-[16px] font-medium font-Poppins">
                            {review.reviewerName || "Anonymous"}
                          </h3>
                          <p className="text-[#6D7588] font-normal text-[16px] font-Poppins">
                            {formatDate(review.reviewDate)}
                          </p>

                          <div className="flex gap-1 mb-3">
                            <span className="flex items-center mb-[10px] gap-0.5">
                              {renderStars(review.rating ?? 0)}
                            </span>
                          </div>

                          <p
                            className={`text-[16px] font-Poppins text-[#2A2D34] ${expandedId !== index ? "line-clamp-2" : ""}`}
                          >
                            {review.comment}
                          </p>
                          {review.comment && review.comment.length > 80 && (
                            <button
                              onClick={() =>
                                setExpandedId(
                                  expandedId === index ? null : index
                                )
                              }
                              className="text-[#2A2D34] text-[16px] font-medium mt-1 underline"
                            >
                              {expandedId === index
                                ? "Read less"
                                : "Read more"}
                            </button>
                          )}
                        </div>
                      </div>
                      {index < reviews.length - 1 && (
                        <hr className="border border-[#D1D5DB] w-[730px] mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
