import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usesearchteach } from "../Hooks/usesearchteach";
import { usefilterteach } from "../Hooks/usefilterteach";
import ButtomApplyFilter from "../Components/Explore/ButtomApplyFilter";
import DaysFilterExplore from "../Components/Explore/DaysFilterExplore";
import RattingFilterExplore from "../Components/Explore/RattingFilterExplore";
import SubjectFilterExplore from "../Components/Explore/SubjectFilterExplore";
import LineBetweenFilterElements from "../Components/Explore/LineBetweenFilterElements";
import LayerBackgroundTeacher from "../Components/Explore/LayerBackgroundTeacher";
import LeftTeacherSide from "../Components/Explore/LeftTeacherSide";
import Header from "../Components/Explore/Header";

const MainExplore = () => {
  const {
    data: searchTeachers,
    error: searchError,
    isLoading: searchIsLoading,
    formik,
    setCurrentPage,
    currentPage,
    teachersPerPage,
  } = usesearchteach(); // Search Teachers
  const {
    data: filterData,
    error: filterError,
    isLoading: filterIsLoading,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    startPrice,
    setStartPrice,
    endPrice,
    setEndPrice,
  } = usefilterteach(); // Filter Teachers

  const [dragging2, setDragging2] = useState<string | null>(null);
  const slider2Ref = useRef<HTMLDivElement>(null);

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
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////// Range Time

  const [dragging, setDragging] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  ///////////////////////////////////////// Pagination

  const totalTeachers = 9;
  const totalPages = Math.ceil(totalTeachers / teachersPerPage);

  ////////////////////////////////////////////////////////////////
  ////     the data of response (Search Teachers)     ////
  ////////////////////////////////////////////////////////////////
  if (searchError && "response" in searchError) {
    console.log((searchError as any).response?.data?.message[0]);
  }

  useEffect(() => {
    if (searchTeachers) {
      console.log(searchTeachers.data);
    }
  }, [searchTeachers]);

  ////////////////////////////////////////////////////////////////
  ///     the data of response (Filter Teachers)     ///
  ////////////////////////////////////////////////////////////////

  if (filterError && "response" in filterError) {
    const message = (filterError as any).response?.data?.message;

    if (Array.isArray(message)) {
      console.log(message[0]);
    } else {
      console.log(message);
    }
  }

  useEffect(() => {
    if (filterData) {
      console.log(filterData.data);
    }
  }, [filterData]);

  ////////////////////////////////////////////////////////////

  return (
    <>
      <main className="w-[1200px] m-auto">

        <Header/>

        <div className="flex justify-between items-center mb-[30px]">
          <div className="flex justify-between items-center w-[342px]">
            <div className="w-[104px] h-[61px] text-[#2A2D34] flex justify-center gap-2.5 items-center border-2 border-[#D1D5DB] py-[19px] px-[20px] rounded-[8px]">
              <img
                src="../../../../../src/assets/icons/FilterIcon.svg"
                alt="FilterIcon"
              />
              <p className="text-[18px] font-medium">filter</p>
            </div>
            <div className="w-[226px] h-[61px] text-[#2A2D34] flex justify-center items-center border-2 border-[#D1D5DB] py-[19px] px-[20px] rounded-[8px]">
              <p className="font-normal text-[16px]">
                Sort by :{" "}
                <select
                  className="focus:outline-none focus:border-none font-medium text-[18px]"
                  name=""
                  id=""
                >
                  <option value="Top rated">Top rated</option>
                </select>
              </p>
            </div>
          </div>
          <div className="w-[414px] h-[61px] text-[#2A2D34] flex justify-start items-center border-2 border-[#D1D5DB] py-[24px] px-[16px] rounded-[8px]">
            <div className="flex justify-between gap-2 items-center">
              <img
                className="w-[20px] h-[20px]"
                src="../../../../../src/assets/icons/SearchIcon.svg"
                alt="SearchIcon"
              />
              <input
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.startsWith(" ")) return;
                  formik.handleChange(e);
                }}
                value={formik.values.SearchTeacher}
                className="outline-none border-none w-[350px] focus:outline-none focus:border-none"
                type="text"
                placeholder="Search Teacher"
                name="SearchTeacher"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-start gap-[30px] ">
          <div className="w-[290px] border-2 border-[#D1D5DB] p-5 rounded-[8px]">

            <SubjectFilterExplore/>

            <LineBetweenFilterElements/>

            <div className="price w-[250px] mb-[22px] text-[#2A2D34]">
              <h2 className="font-semibold mb-[28px] text-[18px]">
                Price per class
              </h2>

              <p className="font-bold mb-4 text-center text-[18px]">
                EGP{startPrice}-{endPrice}
              </p>

              <div className="rangePrice">
                <div
                  ref={slider2Ref}
                  className="RangePrice relative flex justify-center items-center cursor-pointer"
                  style={{ height: "28px" }}
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
                    className="absolute w-7 h-7 border-2 border-[#2A2D34] rounded-[4px] bg-white cursor-grab active:cursor-grabbing"
                    style={{
                      left: `${startPercentage2}%`,
                      transform: "translateX(-50%)",
                      zIndex: dragging2 === "start" ? 10 : 5,
                    }}
                    onMouseDown={handlePriceMouseDown("start")}
                  ></div>

                  <div
                    className="absolute w-7 h-7 border-2 border-[#2A2D34] rounded-[4px] bg-white cursor-grab active:cursor-grabbing"
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

            <LineBetweenFilterElements/>

            <RattingFilterExplore/>

            <LineBetweenFilterElements/>

            <DaysFilterExplore/>

            <LineBetweenFilterElements/>

            <div className="Times mb-[22px]">
              <h2 className="font-semibold mb-[28px] text-[18px]">Times</h2>

              <p className="font-bold mb-4 text-center text-[18px]">
                {formatTime(startTime)}-{formatTime(endTime)}
              </p>

              <div
                ref={sliderRef}
                className="RangeTime relative flex justify-center items-center cursor-pointer"
                style={{ height: "28px" }}
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
                  className="absolute w-7 h-7 border-2 border-[#2A2D34] rounded-[4px] bg-white cursor-grab active:cursor-grabbing"
                  style={{
                    left: `${startPercentage}%`,
                    transform: "translateX(-50%)",
                    zIndex: dragging === "start" ? 10 : 5,
                  }}
                  onMouseDown={handleMouseDown("start")}
                ></div>

                <div
                  className="absolute w-7 h-7 border-2 border-[#2A2D34] rounded-[4px] bg-white cursor-grab active:cursor-grabbing"
                  style={{
                    left: `${endPercentage}%`,
                    transform: "translateX(-50%)",
                    zIndex: dragging === "end" ? 10 : 5,
                  }}
                  onMouseDown={handleMouseDown("end")}
                ></div>
              </div>
            </div>

            <LineBetweenFilterElements/>

            <ButtomApplyFilter setDragging={setDragging} setDragging2={setDragging2}/>
            
          </div>

          <div className="teachers">
            {[...Array(teachersPerPage)].map((_, index) => {
              const teacherNumber =
                (currentPage - 1) * teachersPerPage + index + 1;
              if (teacherNumber > totalTeachers) return null;

              return (
                <div
                  key={teacherNumber}
                  className="w-[880px] overflow-hidden relative h-[326px] rounded-[8px] px-[20px] py-[30px] border-2 border-[#D1D5DB] mb-[30px]"
                >
                  <div className="flex justify-between items-center gap-[60px]">
                    <div className="RightTeacher flex justify-between items-start gap-4 w-[480px] h-[266px]">
                      <div className="w-[120px] h-[120px] RightRightTeacher">
                        <img
                          className="w-full rounded-[8px] border border-[#D1D5DB]"
                          src="https://i.guim.co.uk/img/media/59baecefbc73d3bcf4a47b017453a27f19b55175/331_488_2481_1489/master/2481.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d201beebc8267e2197eb367488bafd4b"
                          alt="teacher image"
                        />
                      </div>
                      <div className="LeftRightTeacher">
                        <div className="w-[344px] mb-5 h-[90px]">
                          <h2 className="text-[20px] mb-4 leading-[13px] tracking-[0] font-bold">
                            Mr. Mohamed Salama
                          </h2>
                          <div className="flex items-center gap-2 mb-4  text-xs mt-1">
                            <div className="flex items-center gap-0.5">
                              {[1, 2, 3, 4, 5].map((star) => {
                                const rating = 3.5;
                                if (star <= Math.floor(rating)) {
                                  return (
                                    <span key={star} className="text-[#FFD057]">
                                      <Star
                                        fill="#FFD057"
                                        className="w-4 h-4"
                                      />
                                    </span>
                                  );
                                } else if (
                                  star === Math.ceil(rating) &&
                                  rating % 1 !== 0
                                ) {
                                  return (
                                    <span
                                      key={star}
                                      className="relative inline-block"
                                    >
                                      <Star className="w-4 h-4 text-[#FFD057]" />
                                      <span
                                        className="absolute top-0 left-0 overflow-hidden"
                                        style={{
                                          width: `${(rating % 1) * 100}%`,
                                        }}
                                      >
                                        <Star
                                          fill="#FFD057"
                                          className="w-4 h-4 text-[#FFD057]"
                                        />
                                      </span>
                                    </span>
                                  );
                                } else {
                                  return (
                                    <span key={star} className="text-[#FFD057]">
                                      <Star className="w-4 h-4" />
                                    </span>
                                  );
                                }
                              })}
                            </div>
                            <span className="text-gray-500">(502 reviews)</span>
                          </div>
                          <div className="h-[29px] w-[191px] flex justify-center items-center bg-[#FFDEDE] px-[10px] py-[8px] rounded-[18px]">
                            <p className="font-semibold text-[18px] text-[#611D1D]">
                              Pure mathematics
                            </p>
                          </div>
                        </div>
                        <div className="DetailsAboutTeacher w-[344px] h-[92px]">
                          <p className="font-medium text-[16px] text-[#5A6272]">
                            20 years teaching | 13 years online math teacher{" "}
                            <span className="font-normal">
                              {" "}
                              - for 20 years i was teaching with passion and bla
                              bla bla{" "}
                            </span>
                          </p>
                          <p className="font-medium text-[16px] underline">
                            Learn more
                          </p>
                        </div>
                      </div>
                    </div>

                    <LeftTeacherSide/>

                  </div>

                  <LayerBackgroundTeacher/>

                </div>
              );
            })}

            <div className="flex justify-center items-center gap-2 mt-8 mb-12">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`w-[48px] h-[48px] flex justify-center items-center rounded-[8px] border-2 transition-colors
                ${
                  currentPage === 1
                    ? "border-[#D1D5DB] text-[#D1D5DB] cursor-not-allowed"
                    : "border-[#525FE1] text-[#525FE1] hover:bg-[#525FE1] hover:text-white cursor-pointer"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {(() => {
                const pageNumbers = [];
                const startPage = Math.floor((currentPage - 1) / 3) * 3 + 1;
                const endPage = Math.min(startPage + 2, totalPages);

                for (let i = startPage; i <= endPage; i++) {
                  pageNumbers.push(
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-[48px] h-[48px] flex justify-center items-center rounded-[8px] font-bold text-[18px] transition-colors
                      ${
                        currentPage === i
                          ? "bg-[#525FE1] text-white"
                          : "bg-white text-[#2A2D34] border-2 border-[#D1D5DB] hover:border-[#525FE1] hover:text-[#525FE1]"
                      }`}
                    >
                      {i}
                    </button>,
                  );
                }

                return pageNumbers;
              })()}

              {currentPage <= totalPages - 3 && (
                <div className="w-[48px] h-[48px] flex justify-center items-center">
                  <span className="text-[#2A2D34] font-bold text-[18px]">
                    ...
                  </span>
                </div>
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`w-[48px] h-[48px] flex justify-center items-center rounded-[8px] border-2 transition-colors
                  ${
                    currentPage === totalPages
                      ? "border-[#D1D5DB] text-[#D1D5DB] cursor-not-allowed"
                      : "border-[#525FE1] text-[#525FE1] hover:bg-[#525FE1] hover:text-white cursor-pointer"
                  }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default MainExplore;