import startStudent from "../../../../assets/icons/startStudent.svg";
import ArrowLeft from "../../../../assets/icons/ArrowLeft.svg";
import ArrowRight from "../../../../assets/icons/ArrowRigth.svg";
import SliderSayStudentsInto from "./SliderSayStudentsInto";
import { useRef, useState } from "react";
import SeeAllReviewsInto from "./SeeAllReviewsInto";
import { useTeacherProfile } from "../../Hooks/useTeacherProfile";

const StudentsSayInto = () => {
  const sliderRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useTeacherProfile();
  const teacherData = data?.data?.data;

  const rating = teacherData?.rate ?? 0;
  const numberOfReviews = teacherData?.numberOfReviews ?? 0;
  const reviews = teacherData?.reviews ?? [];

  if (reviews.length === 0) {
    return (
      <section className="StudentsSay-section mb-12">
        <h2 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
          What my students say
        </h2>
        <div className="w-[541px] bg-white rounded-[8px] border-2 border-[#E8EAED] p-[30px]">
          <p className="text-[#6D7588] flex justify-center items-center font-semibold text-[18px]">
            No reviews yet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="StudentsSay-section mb-12">
        <h2 className="text-[24px] mb-4 text-[#2A2D34] font-Poppins font-bold">
          What my students say
        </h2>

        <div className="flex justify-between mb-6 w-[541px]">
          <div className="w-[181px]">
            <div className="flex justify-between w-[68px] gap-1">
              <img src={startStudent} alt="Star" />
              <p className="text-[28px] font-semibold font-Poppins text-[#2A2D34]">
                {rating}
              </p>
            </div>
            <p className="text-[12px] font-medium font-Poppins text-[#6D7588]">
              Based on {numberOfReviews} student reviews
            </p>
          </div>

          <div className="flex justify-between gap-2 h-[40px] w-[80px]">
            <div
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-1 rounded-[6px] cursor-pointer border border-[#E8EAED] flex justify-center items-center h-[36px] w-[36px]"
            >
              <img src={ArrowLeft} alt="Arrow Left" className="w-[8px] h-[14px]" />
            </div>
            <div
              onClick={() => sliderRef.current?.slickNext()}
              className="p-1 rounded-[6px] cursor-pointer border border-[#E8EAED] flex justify-center items-center h-[36px] w-[36px]"
            >
              <img src={ArrowRight} alt="Arrow Right" className="w-[8px] h-[14px]" />
            </div>
          </div>
        </div>

        <SliderSayStudentsInto ref={sliderRef} reviews={reviews} />

        <div className="flex justify-center items-center w-[541px]">
          <button
            onClick={() => setIsOpen(true)}
            className="border-2 border-[#D1D5DB] cursor-pointer flex justify-center items-center h-[35px] rounded-[4px] py-[12px] px-[16px]"
          >
            See all reviews
          </button>
        </div>

        <SeeAllReviewsInto
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          reviews={reviews}
          rating={rating}
          numberOfReviews={numberOfReviews}
        />
      </section>
    </>
  );
};

export default StudentsSayInto;
