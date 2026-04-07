import { usefilterteach } from "../../Hooks/usefilterteach";

const ButtomApplyFilter = ({
  setDragging,
  setDragging2,
}: {
  setDragging: (value: null) => void;
  setDragging2: (value: null) => void;
}) => {
  const {
    setSelectedLanguage,
    setSelectedDay,
    setStartTime,
    setEndTime,
    setStartPrice,
    setEndPrice,
    setSelectedRating,
    applyFilters,
  } = usefilterteach();
  const handleApplyFilters = () => {
    applyFilters();
  };

  const handleClearAll = () => {
    setSelectedDay("");
    setSelectedLanguage("");
    setSelectedRating(null);
    setStartTime(8);
    setEndTime(26);
    setDragging(null);
    setDragging2(null);
    setSelectedRating(null);
    setEndPrice(300);
    setStartPrice(50);
  };

  return (
    <>
      <div className="buttons" onClick={handleApplyFilters}>
        <button className="bg-[#525FE1] flex justify-center items-center cursor-pointer w-[238px] mb-[14px] h-[40px] text-white text-[16px] p-[14px] rounded-[8px] font-semibold">
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