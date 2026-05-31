import React from "react";

interface ButtomApplyFilterProps {
  setDragging: (value: null) => void;
  setDragging2: (value: null) => void;
  setStartTime: (value: number) => void;
  setEndTime: (value: number) => void;
  setStartPrice: (value: number) => void;
  setEndPrice: (value: number) => void;
  applyFilters: () => void;
  clearFilters: () => void;
}

const ButtomApplyFilter = ({
  setDragging,
  setDragging2,
  setStartTime,
  setEndTime,
  setStartPrice,
  setEndPrice,
  applyFilters,
  clearFilters,
}: ButtomApplyFilterProps) => {
  const handleApplyFilters = (e: React.MouseEvent) => {
    e.stopPropagation();
    applyFilters();
  };

  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStartTime(8);
    setEndTime(26);
    setDragging(null);
    setDragging2(null);
    setEndPrice(300);
    setStartPrice(50);
    clearFilters();
  };

  return (
    <>
      <div className="buttons">
        <button
          onClick={handleApplyFilters}
          className="bg-[#525FE1] flex justify-center items-center cursor-pointer w-[238px] mb-[14px] h-[40px] text-white text-[16px] p-[14px] rounded-[8px] font-semibold"
        >
          Apply
        </button>

        <button
          onClick={handleClearAll}
          type="button"
          className="flex justify-center items-center cursor-pointer w-[238px] h-[40px] text-[#525FE1] border-2 text-[16px] p-[14px] rounded-[8px] font-semibold"
        >
          Clear all
        </button>
      </div>
    </>
  );
};

export default ButtomApplyFilter;