import TeacherCard from "./TeacherCard";
import Pagination from "./Pagination";
import type { TeacherListProps } from "../../Types/type";


const TeacherList = ({
  teachersList,
  isLoading,
  currentPage,
  pageSize,
  totalCount,
  onPageChange,
  onOpenProfile,
}: TeacherListProps) => {
  if (isLoading) {
    return (
      <div className="w-[836px]">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-[836px] h-[293px] rounded-[8px] px-[19px] py-[27px] border-2 border-[#D1D5DB] mb-[27px] bg-gray-100 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (teachersList?.length === 0) {
    return (
      <div className="w-[836px] flex flex-col justify-center items-center py-16 px-6 border-2 border-dashed border-gray-300 rounded-[8px] bg-white text-gray-500">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
          alt="No Results"
          className="w-[80px] h-[80px] mb-4 opacity-60"
        />
        <h3 className="text-[18px] font-bold text-[#2A2D34] mb-1">
          No Teachers Found
        </h3>
        <p className="text-[14px] text-gray-400 text-center max-w-[320px]">
          We couldn't find any teachers matching your criteria. Try adjusting
          your filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <>
      {teachersList.map((teacher, index) => (
        <TeacherCard
          key={
            teacher.teacherId ?? teacher.id ?? `${teacher.teacherName}-${index}`
          }
          teacher={teacher}
          onOpenProfile={onOpenProfile}
        />
      ))}
      <div className="w-[836px] flex justify-center items-center gap-[8px] mt-[32px] mb-[40px]">
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalCount={totalCount}
          itemsCount={teachersList.length}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default TeacherList;
