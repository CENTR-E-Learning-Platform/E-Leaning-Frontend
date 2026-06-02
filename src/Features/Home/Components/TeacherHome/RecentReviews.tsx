import React from "react";
import { Star } from "lucide-react";
import type { RecentReviewsProps, ReviewCardProps } from "../../Types/types";


const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  date,
  comment,
  avatarUrl,
  rating,
}) => {
  return (
    <div className="flex flex-col justify-center items-start p-[20px_28px] gap-[17px] w-full md:w-[220.33px] min-h-[244.36px] bg-white border border-[#E8EAED] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] rounded-[8px] font-['Poppins']">
      <div className="flex flex-col items-start gap-[20px] w-full">
        <div className="flex flex-row items-center gap-[6px]">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={17}
              fill={i < rating ? "#FFD057" : "transparent"}
              stroke="#FFD057"
            />
          ))}
          <span className="text-[12px] font-medium text-[#6D7588]">
            {rating.toFixed(1)}
          </span>
        </div>

        <div className="flex flex-col items-start w-full">
          <p className="text-[14px] font-medium leading-[28px] text-[#2A2D34] line-clamp-3">
            "{comment}"
          </p>
          <button className="text-[14px] font-medium underline text-[#2A2D34] mt-1">
            Read more
          </button>
        </div>
      </div>

      <div className="w-full h-0 border-t border-[#E8EAED]"></div>

      <div className="flex flex-row items-center gap-[8px] w-full">
        <img
          src={avatarUrl}
          alt={name}
          className="w-[40px] h-[40px] rounded-full border border-[#F9FBFC] object-cover"
        />
        <div className="flex flex-col items-start">
          <h4 className="text-[14px] font-semibold text-[#2A2D34]">{name}</h4>
          <span className="text-[12px] font-normal text-[#6D7588]">{date}</span>
        </div>
      </div>
    </div>
  );
};

const RecentReviews: React.FC<RecentReviewsProps> = ({ reviews = [] }) => {
  const normalizedReviews = reviews.map((review) => ({
    name: review.studentName,
    date: new Date(review.reviewDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    comment: review.reviewText,
    avatarUrl:
      review.reviewProfilePicture ||
      `https://i.pravatar.cc/150?u=${encodeURIComponent(review.studentName)}`,
    rating: review.rating ?? 0,
  }));

  return (
    <section className="flex flex-col items-start gap-[28px] w-full max-w-[717px] py-8">
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="text-[22px] font-bold text-[#2A2D34]">Recent Reviews</h2>
        <button className="text-[16px] font-medium text-[#525FE1] hover:underline">
          See all
        </button>
      </div>

      <div className="flex flex-row flex-wrap md:flex-nowrap items-start gap-[28px] w-full overflow-x-auto pb-4">
        {normalizedReviews.length > 0 ? (
          normalizedReviews.map((review, index) => (
            <ReviewCard key={`${review.name}-${index}`} {...review} />
          ))
        ) : (
          <p className="text-[14px] text-[#6D7588]">
            No recent reviews available yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default RecentReviews;
