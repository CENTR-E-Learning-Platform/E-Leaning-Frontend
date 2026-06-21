import { Star } from "lucide-react";
import LayerBackgroundTeacher from "./LayerBackgroundTeacher";
import LeftTeacherSide from "./LeftTeacherSide";
import { BASE_URL } from "../../../Streaming/Utils/Apis";

interface TeacherCardProps {
  teacher: any;
  onOpenProfile: (teacher: any) => void;
}

const TeacherCard = ({ teacher, onOpenProfile }: TeacherCardProps) => {
  const rating = teacher.rating ?? 0;

  return (
    <div className="w-[836px] overflow-hidden relative h-[293px] rounded-[8px] px-[19px] py-[27px] border-2 border-[#D1D5DB] mb-[27px]">
      <div className="flex justify-between items-center gap-[57px]">
        <div className="RightTeacher flex justify-between items-start gap-[15px] w-[456px] h-[239px]">
          <div className="w-[114px] h-[114px] RightRightTeacher">
            {teacher.teacherPic ? (
              <img
                className="w-full h-full object-cover rounded-[8px] border border-[#D1D5DB]"
                src={`${BASE_URL}${teacher.teacherPic}`}
                alt="teacher image"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#525FE1] text-white text-[32px] font-bold rounded-[8px] border border-[#D1D5DB] uppercase">
                {teacher.teacherName?.substring(0, 2) || "T"}
              </div>
            )}
          </div>
          <div className="LeftRightTeacher">
            <div className="w-[326px] mb-[18px] h-[81px]">
              <button
                type="button"
                onClick={() => onOpenProfile(teacher)}
                className="text-left text-[18px] mb-[14px] leading-[13px] tracking-[0] font-bold text-[#2A2D34] hover:text-[#525FE1] transition-colors"
              >
                {teacher.teacherName}
              </button>
              <div className="flex items-center gap-2 mb-[14px] text-[11px] mt-1">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => {
                    if (star <= Math.floor(rating)) {
                      return (
                        <span key={star} className="text-[#FFD057]">
                          <Star fill="#FFD057" className="w-[14px] h-[14px]" />
                        </span>
                      );
                    }

                    if (star === Math.ceil(rating) && rating % 1 !== 0) {
                      return (
                        <span key={star} className="relative inline-block">
                          <Star className="w-[14px] h-[14px] text-[#FFD057]" />
                          <span
                            className="absolute top-0 left-0 overflow-hidden"
                            style={{
                              width: `${(rating % 1) * 100}%`,
                            }}
                          >
                            <Star
                              fill="#FFD057"
                              className="w-[14px] h-[14px] text-[#FFD057]"
                            />
                          </span>
                        </span>
                      );
                    }

                    return (
                      <span key={star} className="text-[#FFD057]">
                        <Star className="w-[14px] h-[14px]" />
                      </span>
                    );
                  })}
                </div>
                <span className="text-gray-500">
                  ({teacher.numberOfReviews} reviews)
                </span>
              </div>
              <div className="h-[26px] w-fit flex justify-center items-center bg-[#FFDEDE] px-[9px] py-[7px] rounded-[18px]">
                <p className="font-semibold text-[16px] text-[#611D1D]">
                  {teacher.subjects?.join(" , ")}
                </p>
              </div>
            </div>
            <div className="DetailsAboutTeacher w-[326px] h-[82px] mt-2">
              <p className="font-medium text-[14px] text-[#5A6272]">
                {teacher.bio}
              </p>
            </div>
          </div>
        </div>
        <LeftTeacherSide teacher={teacher} />
      </div>
      <LayerBackgroundTeacher />
    </div>
  );
};

export default TeacherCard;
