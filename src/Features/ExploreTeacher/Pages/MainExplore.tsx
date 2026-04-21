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
    // isLoading: searchIsLoading,
    formik,
    currentPage,
    teachersPerPage,
  } = usesearchteach();

  const {
    data: filterData,
    error: filterError,
    // isLoading: filterIsLoading,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    startPrice,
    setStartPrice,
    endPrice,
    setEndPrice,
    setSearchTerm,
  } = usefilterteach();

  console.log("Filter Data:", filterData);

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

  const totalTeachers = 9;
  // const totalPages = Math.ceil(totalTeachers / teachersPerPage);

  if (searchError && "response" in searchError) {
    console.log((searchError as any).response?.data?.message[0]);
  }

  useEffect(() => {
    if (searchTeachers) {
      console.log(searchTeachers.data);
    }
  }, [searchTeachers]);

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

  return (
    <>
      <main className="w-[1140px] m-auto">
        <Header />

        <div className="flex justify-between items-center mb-[27px]">
          <div className="flex justify-between items-center w-[325px]">
            <div className="w-[99px] h-[55px] text-[#2A2D34] flex justify-center gap-[9px] items-center border-2 border-[#D1D5DB] py-[17px] px-[19px] rounded-[8px]">
              <img
                src="../../../../../src/assets/icons/FilterIcon.svg"
                alt="FilterIcon"
              />
              <p className="text-[16px] font-medium">filter</p>
            </div>
            <div className="w-[214px] h-[55px] text-[#2A2D34] flex justify-center items-center border-2 border-[#D1D5DB] py-[17px] px-[19px] rounded-[8px]">
              <p className="font-normal text-[14px]">
                Sort by :{" "}
                <select
                  className="focus:outline-none focus:border-none font-medium text-[16px]"
                  name=""
                  id=""
                >
                  <option value="Top rated">Top rated</option>
                </select>
              </p>
            </div>
          </div>
          <div className="w-[393px] h-[55px] text-[#2A2D34] flex justify-start items-center border-2 border-[#D1D5DB] py-[21px] px-[15px] rounded-[8px]">
            <div className="flex justify-between gap-[7px] items-center">
              <img
                className="w-[19px] h-[19px]"
                src="../../../../../src/assets/icons/SearchIcon.svg"
                alt="SearchIcon"
              />
              <input
                onChange={(e) => {
                  const value = e.target.value;
                  setSearchTerm(value);
                  if (value.startsWith(" ")) return;
                  formik.handleChange(e);
                }}
                value={formik.values.SearchTeacher}
                className="outline-none border-none w-[332px] focus:outline-none focus:border-none"
                type="text"
                placeholder="Search Teacher"
                name="SearchTeacher"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-start gap-[28px]">
          <div className="w-[275px] border-2 border-[#D1D5DB] p-[18px] rounded-[8px]">
            <SubjectFilterExplore />

            <LineBetweenFilterElements />

            <div className="price w-[238px] mb-[20px] text-[#2A2D34]">
              <h2 className="font-semibold mb-[25px] text-[16px]">
                Price per class
              </h2>

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

            <RattingFilterExplore />

            <LineBetweenFilterElements />

            <DaysFilterExplore />

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
            />
          </div>

          <div className="teachers">
            {formik.values.SearchTeacher
              ?
                (searchTeachers?.data ?? []).map(
                  (teacher: any, index: number) => (
                    <div
                      key={index}
                      className="w-[836px] overflow-hidden relative h-[293px] rounded-[8px] px-[19px] py-[27px] border-2 border-[#D1D5DB] mb-[27px]"
                    >
                      <div className="flex justify-between items-center gap-[57px]">
                        <div className="RightTeacher flex justify-between items-start gap-[15px] w-[456px] h-[239px]">
                          <div className="w-[114px] h-[114px] RightRightTeacher">
                            <img
                              className="w-full h-full object-cover rounded-[8px] border border-[#D1D5DB]"
                              src={
                                teacher.teacherPic ??
                                "https://via.placeholder.com/114"
                              }
                              alt="teacher image"
                            />
                          </div>
                          <div className="LeftRightTeacher">
                            <div className="w-[326px] mb-[18px] h-[81px]">
                              <h2 className="text-[18px] mb-[14px] leading-[13px] tracking-[0] font-bold">
                                {teacher.teacherName}
                              </h2>
                              <div className="flex items-center gap-2 mb-[14px] text-[11px] mt-1">
                                <div className="flex items-center gap-0.5">
                                  {[1, 2, 3, 4, 5].map((star) => {
                                    const rating = teacher.rating ?? 0;
                                    if (star <= Math.floor(rating)) {
                                      return (
                                        <span
                                          key={star}
                                          className="text-[#FFD057]"
                                        >
                                          <Star
                                            fill="#FFD057"
                                            className="w-[14px] h-[14px]"
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
                                    } else {
                                      return (
                                        <span
                                          key={star}
                                          className="text-[#FFD057]"
                                        >
                                          <Star className="w-[14px] h-[14px]" />
                                        </span>
                                      );
                                    }
                                  })}
                                </div>
                                <span className="text-gray-500">
                                  ({teacher.numberOfReviews} reviews)
                                </span>
                              </div>
                              <div className="h-[26px] w-[181px] flex justify-center items-center bg-[#FFDEDE] px-[9px] py-[7px] rounded-[18px]">
                                <p className="font-semibold text-[16px] text-[#611D1D]">
                                  {teacher.subject}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <LeftTeacherSide teacher={teacher} />
                      </div>
                      <LayerBackgroundTeacher />
                    </div>
                  ),
                )
              :
                [...Array(teachersPerPage)].map((_, index) => {
                  const teacherNumber =
                    (currentPage - 1) * teachersPerPage + index + 1;
                  if (teacherNumber > totalTeachers) return null;
                  return (
                    <div
                      key={teacherNumber}
                      className="w-[836px] overflow-hidden relative h-[293px] rounded-[8px] px-[19px] py-[27px] border-2 border-[#D1D5DB] mb-[27px]"
                    >
                      <div className="flex justify-between items-center gap-[57px]">
                        <div className="RightTeacher flex justify-between items-start gap-[15px] w-[456px] h-[239px]">
                          <div className="w-[114px] h-[114px] RightRightTeacher">
                            <img
                              className="w-full h-full object-cover rounded-[8px] border border-[#D1D5DB]"
                              src="https://i.guim.co.uk/img/media/59baecefbc73d3bcf4a47b017453a27f19b55175/331_488_2481_1489/master/2481.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d201beebc8267e2197eb367488bafd4b"
                              alt="teacher image"
                            />
                          </div>
                          <div className="LeftRightTeacher">
                            <div className="w-[326px] mb-[18px] h-[81px]">
                              <h2 className="text-[18px] mb-[14px] leading-[13px] tracking-[0] font-bold">
                                Mr. Mohamed Salama
                              </h2>
                              <div className="flex items-center gap-2 mb-[14px] text-[11px] mt-1">
                                <div className="flex items-center gap-0.5">
                                  {[1, 2, 3, 4, 5].map((star) => {
                                    const rating = 3.5;
                                    if (star <= Math.floor(rating)) {
                                      return (
                                        <span
                                          key={star}
                                          className="text-[#FFD057]"
                                        >
                                          <Star
                                            fill="#FFD057"
                                            className="w-[14px] h-[14px]"
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
                                    } else {
                                      return (
                                        <span
                                          key={star}
                                          className="text-[#FFD057]"
                                        >
                                          <Star className="w-[14px] h-[14px]" />
                                        </span>
                                      );
                                    }
                                  })}
                                </div>
                                <span className="text-gray-500">
                                  (502 reviews)
                                </span>
                              </div>
                              <div className="h-[26px] w-[181px] flex justify-center items-center bg-[#FFDEDE] px-[9px] py-[7px] rounded-[18px]">
                                <p className="font-semibold text-[16px] text-[#611D1D]">
                                  Pure mathematics
                                </p>
                              </div>
                            </div>
                            <div className="DetailsAboutTeacher w-[326px] h-[82px]">
                              <p className="font-medium text-[14px] text-[#5A6272]">
                                20 years teaching | 13 years online math teacher{" "}
                                <span className="font-normal">
                                  {" "}
                                  - for 20 years i was teaching with passion and
                                  bla bla bla{" "}
                                </span>
                              </p>
                              <p className="font-medium text-[14px] underline cursor-pointer">
                                Learn more
                              </p>
                            </div>
                          </div>
                        </div>
                        <LeftTeacherSide teacher={{ pricePerSession: 50 }} />
                      </div>
                      <LayerBackgroundTeacher />
                    </div>
                  );
                })}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainExplore;
