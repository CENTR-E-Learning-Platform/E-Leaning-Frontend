import { Star } from "lucide-react";
import type { RattingFilterExploreProps } from "../../Types/type";

const RattingFilterExplore = ({ selectedRating, setSelectedRating }: RattingFilterExploreProps) => {
  return <>
    <section className="Ratings">
        <div className="mb-[20px]">
            <h2 className="font-semibold mb-[25px] text-[16px]">Ratings</h2>

            <div className="rangeRate max-w-[238px]">
                <div className="flex items-center gap-2 mb-3">
                    <input
                    type="radio"
                    name="rating"
                    value={4.5}
                    checked={selectedRating === 4.5}
                    onChange={(e) => setSelectedRating(Number(e.target.value))}
                    className="appearance-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer checked:border-[5px] checked:border-[#525FE1] transition-all"
                    />

                    <span className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => {
                        const rating = 4.5;
                        if (star <= Math.floor(rating)) {
                        return (
                            <span key={star} className="text-[#FFD057]">
                            <Star fill="#FFD057" className="w-[14px] h-[14px]" />
                            </span>
                        );
                        } else if (
                        star === Math.ceil(rating) &&
                        rating % 1 !== 0
                        ) {
                        return (
                            <span key={star} className="relative inline-block">
                            <Star className="w-[14px] h-[14px] text-[#FFD057]" />
                            <span
                                className="absolute top-0 left-0 overflow-hidden"
                                style={{ width: `${(rating % 1) * 100}%` }}
                            >
                                <Star
                                fill="#FFD057"
                                className="w-[14px] h-[14px] text-[#FFD057]"
                                />
                            </span>
                            </span>
                        );
                        } else {
                        return (
                            <span key={star} className="text-[#FFD057]">
                            <Star className="w-[14px] h-[14px]" />
                            </span>
                        );
                        }
                    })}
                    </span>

                    <h4 className="font-semibold text-[14px] text-[#5A6272]">
                    4.5 & up <span className="font-medium"> (73) </span>
                    </h4>
                </div>

                <div className="flex items-center gap-2 mb-3">
                    <input
                    type="radio"
                    name="rating"
                    value={4.0}
                    checked={selectedRating === 4.0}
                    onChange={(e) => setSelectedRating(Number(e.target.value))}
                    className="appearance-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer checked:border-[5px] checked:border-[#525FE1] transition-all"
                    />

                    <span className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => {
                        const rating = 4.0;
                        if (star <= Math.floor(rating)) {
                        return (
                            <span key={star} className="text-[#FFD057]">
                            <Star fill="#FFD057" className="w-[14px] h-[14px]" />
                            </span>
                        );
                        } else if (
                        star === Math.ceil(rating) &&
                        rating % 1 !== 0
                        ) {
                        return (
                            <span key={star} className="relative inline-block">
                            <Star className="w-[14px] h-[14px] text-[#FFD057]" />
                            <span
                                className="absolute top-0 left-0 overflow-hidden"
                                style={{ width: `${(rating % 1) * 100}%` }}
                            >
                                <Star
                                fill="#FFD057"
                                className="w-[14px] h-[14px] text-[#FFD057]"
                                />
                            </span>
                            </span>
                        );
                        } else {
                        return (
                            <span key={star} className="text-[#FFD057]">
                            <Star className="w-[14px] h-[14px]" />
                            </span>
                        );
                        }
                    })}
                    </span>

                    <h4 className="font-semibold text-[14px] text-[#5A6272]">
                    4.0 & up <span className="font-medium"> (132) </span>
                    </h4>
                </div>

                <div className="flex items-center gap-2 mb-3">
                    <input
                    type="radio"
                    name="rating"
                    value={3.5}
                    checked={selectedRating === 3.5}
                    onChange={(e) => setSelectedRating(Number(e.target.value))}
                    className="appearance-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer checked:border-[5px] checked:border-[#525FE1] transition-all"
                    />

                    <span className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => {
                        const rating = 3.5;
                        if (star <= Math.floor(rating)) {
                        return (
                            <span key={star} className="text-[#FFD057]">
                            <Star fill="#FFD057" className="w-[14px] h-[14px]" />
                            </span>
                        );
                        } else if (
                        star === Math.ceil(rating) &&
                        rating % 1 !== 0
                        ) {
                        return (
                            <span key={star} className="relative inline-block">
                            <Star className="w-[14px] h-[14px] text-[#FFD057]" />
                            <span
                                className="absolute top-0 left-0 overflow-hidden"
                                style={{ width: `${(rating % 1) * 100}%` }}
                            >
                                <Star
                                fill="#FFD057"
                                className="w-[14px] h-[14px] text-[#FFD057]"
                                />
                            </span>
                            </span>
                        );
                        } else {
                        return (
                            <span key={star} className="text-[#FFD057]">
                            <Star className="w-[14px] h-[14px]" />
                            </span>
                        );
                        }
                    })}
                    </span>

                    <h4 className="font-semibold text-[14px] text-[#5A6272]">
                    3.5 & up <span className="font-medium"> (167) </span>
                    </h4>
                </div>

                <div className="flex items-center gap-2">
                    <input
                    type="radio"
                    name="rating"
                    value={3.0}
                    checked={selectedRating === 3.0}
                    onChange={(e) => setSelectedRating(Number(e.target.value))}
                    className="appearance-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer checked:border-[5px] checked:border-[#525FE1] transition-all"
                    />

                    <span className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => {
                        const rating = 3.0;
                        if (star <= Math.floor(rating)) {
                        return (
                            <span key={star} className="text-[#FFD057]">
                            <Star fill="#FFD057" className="w-[14px] h-[14px]" />
                            </span>
                        );
                        } else if (
                        star === Math.ceil(rating) &&
                        rating % 1 !== 0
                        ) {
                        return (
                            <span key={star} className="relative inline-block">
                            <Star className="w-[14px] h-[14px] text-[#FFD057]" />
                            <span
                                className="absolute top-0 left-0 overflow-hidden"
                                style={{ width: `${(rating % 1) * 100}%` }}
                            >
                                <Star
                                fill="#FFD057"
                                className="w-[14px] h-[14px] text-[#FFD057]"
                                />
                            </span>
                            </span>
                        );
                        } else {
                        return (
                            <span key={star} className="text-[#FFD057]">
                            <Star className="w-[14px] h-[14px]" />
                            </span>
                        );
                        }
                    })}
                    </span>

                    <h4 className="font-semibold text-[14px] text-[#5A6272]">
                    3.0 & up <span className="font-medium"> (293) </span>
                    </h4>
                </div>
            </div>
        </div>
    </section>
  </>
}

export default RattingFilterExplore