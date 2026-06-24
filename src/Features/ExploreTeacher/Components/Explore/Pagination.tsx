import { ChevronRight } from "lucide-react";
import type { PaginationProps } from "../../Types/type";

const Pagination = ({
  currentPage,
  pageSize,
  totalCount,
  itemsCount,
  onPageChange,
}: PaginationProps) => {
  const hasTotalCount = totalCount !== null;

  const totalPages = hasTotalCount
    ? totalCount
    : Math.max(1, currentPage + (itemsCount === pageSize ? 1 : 0));

  const canGoNext = hasTotalCount
    ? currentPage < totalPages
    : itemsCount === pageSize;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i += 1) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i += 1) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center gap-[8px]">
      {pageNumbers.map((page, idx) => (
        <button
          key={idx}
          onClick={() => {
            if (typeof page === "number") {
              onPageChange(page);
            }
          }}
          disabled={typeof page === "string"}
          className={`flex items-center justify-center w-[40px] h-[40px] rounded-[6px] font-semibold text-[16px] transition-all duration-200 ${
            currentPage === page
              ? "bg-[#4F46E5] text-white"
              : typeof page === "string"
                ? "text-[#2A2D34] cursor-default"
                : "text-[#2A2D34] border-[2px] border-[#D1D5DB] hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        className={`flex items-center justify-center w-[40px] h-[40px] rounded-[6px] transition-all duration-200 ${
          !canGoNext
            ? "text-gray-300 cursor-not-allowed"
            : "text-[#2A2D34] hover:bg-gray-100 cursor-pointer"
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
