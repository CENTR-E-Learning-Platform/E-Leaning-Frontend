
import startStudent from "../../../../assets/icons/startStudent.svg";
import type { Review } from "../../Types/dataTeacher";
import sene from "../../../../assets/images/sene.jpg";
import Close from "../../../../assets/icons/Close.svg"
import { useState } from "react";
import { Star } from "lucide-react";


export default function SeeAllReviews({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {

    const [isExpanded, setIsExpanded] = useState(false);
    
    const reviews: Review[] = [
        {
          id: 1,
          name: "Ali hosny",
          date: "February 6, 2026",
          rating: 5,
          comment:"Best math tutor I’ve ever had. Very professional, always on time, and makes the lessons actually enjoyable. He doesn't just lecture; he listens and adapts the lesson to how you think. 10/10!",
         
        },
        {
          id: 2,
          name: "Mohamed ragab",
          date: "February 6, 2026",
          rating: 5,
          comment:"I was honestly drowning in my Advanced Calculus course and felt like I was just memorizing formulas without understanding anything. [Your Name] completely changed that. He has this incredible ability to spot exactly where my logic was 'fuzzy' and explain it in a way that just clicked. For the first time, I’m not just solving equations—I actually understand the 'why' behind them. Total game changer!",
        },
      ];

    const ratingDistribution = [
        { stars: 5, count: 453 },
        { stars: 4, count: 49 },
        { stars: 3, count: 0 },
        { stars: 2, count: 0 },
        { stars: 1, count: 0 },
    ];
    
  const totalReviews = 502;

  return <>
    <section>
        {isOpen ? 
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
                  Based on 502 student reviews
                </p>

                <div className="flex items-start gap-8 mb-8">
                    <div className="flex items-center gap-3">
                        <img width={33} height={31} src={startStudent} alt="Star" />

                        <p className="text-[44px] font-semibold font-Poppins text-[#2A2D34]">
                            4.8
                        </p>
                    </div>

                  <div className="flex-1">
                    {ratingDistribution.map((item) => (
                      <div key={item.stars} className="flex items-center">
                        <div className="w-[587px] mr-2.5 border-2 border-[#2A2D34] bg-white h-[8px] overflow-hidden">
                          <div
                            className="bg-[#2A2D34] h-[8px]"
                            style={{
                              width: `${(item.count / totalReviews) * 100}%`,
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
                  502 reviews
                </h3>

                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={review.id}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <img
                                className="rounded-full w-[40px] h-[40px]"
                                src={sene}
                                alt="sene"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-[#2A2D34] text-[16px] font-medium font-Poppins">
                                {review.name}
                            </h3>
                            <p className="text-[#6D7588] font-normal text-[16px] font-Poppins">
                                {review.date}
                            </p>
                            
                            <div className="flex gap-1 mb-3">
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
                            </div>

                            <p
                                className={`text-[16px] font-Poppins text-[#2A2D34] ${!isExpanded ? "line-clamp-2" : ""}`}
                            >
                                {review.comment}
                            </p>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-[#2A2D34] text-[16px] font-medium mt-1 underline "
                            >
                                {isExpanded ? "Read less" : "Read more"}
                            </button>
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
        : null}
    </section>
  </>
}
