import {
  useEffect,
  useRef,
  useState,
} from "react";
import ButtomApplyFilter from "./ButtomApplyFilter";
import DaysFilterExplore from "./DaysFilterExplore";
import RattingFilterExplore from "./RattingFilterExplore";
import SubjectFilterExplore from "./SubjectFilterExplore";
import LineBetweenFilterElements from "./LineBetweenFilterElements";
import type { ExploreFiltersPanelProps } from "../../Types/type";


const ExploreFiltersPanel = ({
  selectedLanguage,
  setSelectedLanguage,
  selectedDay,
  setSelectedDay,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  startPrice,
  setStartPrice,
  endPrice,
  setEndPrice,
  selectedRating,
  setSelectedRating,
  applyFilters,
  clearFilters,
  formik,
  setSearchTerm,
  setResultsSource,
}: ExploreFiltersPanelProps) => {
  const [dragging2, setDragging2] = useState<string | null>(null);
  const slider2Ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePriceMouseDown =
    (handle: string) => (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setDragging2(handle);
    };

  const handlePriceMouseMove = (e: { clientX: number }) => {
    if (!dragging2 || !slider2Ref.current) return;

    const rect = slider2Ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    const rawPrice = 50 + (percentage / 100) * 250;
    const price = Math.round(rawPrice / 5) * 5;

    if (dragging2 === "start") {
      if (price < endPrice) {
        setStartPrice(price);
      }
    } else if (dragging2 === "end") {
      if (price > startPrice) {
        setEndPrice(price);
      }
    }
  };

  const handlePriceMouseUp = () => {
    setDragging2(null);
  };

  useEffect(() => {
    if (dragging2) {
      document.addEventListener("mousemove", handlePriceMouseMove);
      document.addEventListener("mouseup", handlePriceMouseUp);
      return () => {
        document.removeEventListener("mousemove", handlePriceMouseMove);
        document.removeEventListener("mouseup", handlePriceMouseUp);
      };
    }
  }, [dragging2, startPrice, endPrice]);

  const startPercentage2 = ((startPrice - 50) / 250) * 100;
  const endPercentage2 = ((endPrice - 50) / 250) * 100;

  const formatTime = (hour: number) => {
    if (hour === 24) return "12am";
    if (hour > 24) {
      const h = hour - 24;
      return `${h}am`;
    }
    if (hour === 12) return "12pm";
    if (hour > 12) return `${hour - 12}pm`;
    return `${hour}am`;
  };

  const handleMouseDown =
    (handle: string) => (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setDragging(handle);
    };

  const handleMouseMove = (e: { clientX: number }) => {
    if (!dragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    const hour = Math.round(8 + (percentage / 100) * 18);

    if (dragging === "start") {
      if (hour < endTime) {
        setStartTime(hour);
      }
    } else if (dragging === "end") {
      if (hour > startTime) {
        setEndTime(hour);
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [dragging, startTime, endTime]);

  const startPercentage = ((startTime - 8) / 18) * 100;
  const endPercentage = ((endTime - 8) / 18) * 100;

  const handleApplyFilters = () => {
    setResultsSource("filter");
    formik.setFieldValue("SearchTeacher", "");
    setSearchTerm("");
    applyFilters();
  };

  return (
    <div className="w-[275px] border-2 border-[#D1D5DB] p-[18px] rounded-[8px]">
      <SubjectFilterExplore
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      <LineBetweenFilterElements />

      <div className="price w-[238px] mb-[20px] text-[#2A2D34]">
        <h2 className="font-semibold mb-[25px] text-[16px]">Price per class</h2>

        <p className="font-bold mb-[14px] text-center text-[16px]">
          EGP{startPrice}-{endPrice}
        </p>

        <div className="rangePrice">
          <div
            ref={slider2Ref}
            className="RangePrice relative flex justify-center items-center cursor-pointer"
            style={{ height: "25px" }}
          >
            <div className="absolute w-full h-1 bg-gray-300"></div>

            <div
              className="absolute h-1 bg-[#2A2D34]"
              style={{
                left: `${startPercentage2}%`,
                width: `${endPercentage2 - startPercentage2}%`,
              }}
            ></div>

            <div
              className="absolute w-[25px] h-[25px] border-2 border-[#2A2D34] rounded-[4px] bg-white cursor-grab active:cursor-grabbing"
              style={{
                left: `${startPercentage2}%`,
                transform: "translateX(-50%)",
                zIndex: dragging2 === "start" ? 10 : 5,
              }}
              onMouseDown={handlePriceMouseDown("start")}
            ></div>

            <div
              className="absolute w-[25px] h-[25px] border-2 border-[#2A2D34] rounded-[4px] bg-white cursor-grab active:cursor-grabbing"
              style={{
                left: `${endPercentage2}%`,
                transform: "translateX(-50%)",
                zIndex: dragging2 === "end" ? 10 : 5,
              }}
              onMouseDown={handlePriceMouseDown("end")}
            ></div>
          </div>
        </div>
      </div>

      <LineBetweenFilterElements />

      <RattingFilterExplore
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />

      <LineBetweenFilterElements />

      <DaysFilterExplore
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      <LineBetweenFilterElements />

      <div className="Times mb-[20px]">
        <h2 className="font-semibold mb-[25px] text-[16px]">Times</h2>

        <p className="font-bold mb-[14px] text-center text-[16px]">
          {formatTime(startTime)}-{formatTime(endTime)}
        </p>

        <div
          ref={sliderRef}
          className="RangeTime relative flex justify-center items-center cursor-pointer"
          style={{ height: "25px" }}
        >
          <div className="absolute w-full h-1 bg-gray-300"></div>

          <div
            className="absolute h-1 bg-[#2A2D34]"
            style={{
              left: `${startPercentage}%`,
              width: `${endPercentage - startPercentage}%`,
            }}
          ></div>

          <div
            className="absolute w-[25px] h-[25px] border-2 border-[#2A2D34] rounded-[4px] bg-white cursor-grab active:cursor-grabbing"
            style={{
              left: `${startPercentage}%`,
              transform: "translateX(-50%)",
              zIndex: dragging === "start" ? 10 : 5,
            }}
            onMouseDown={handleMouseDown("start")}
          ></div>

          <div
            className="absolute w-[25px] h-[25px] border-2 border-[#2A2D34] rounded-[4px] bg-white cursor-grab active:cursor-grabbing"
            style={{
              left: `${endPercentage}%`,
              transform: "translateX(-50%)",
              zIndex: dragging === "end" ? 10 : 5,
            }}
            onMouseDown={handleMouseDown("end")}
          ></div>
        </div>
      </div>

      <LineBetweenFilterElements />

      <ButtomApplyFilter
        setDragging={setDragging}
        setDragging2={setDragging2}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        setStartPrice={setStartPrice}
        setEndPrice={setEndPrice}
        applyFilters={handleApplyFilters}
        clearFilters={clearFilters}
      />
    </div>
  );
};

export default ExploreFiltersPanel;
