import { CalendarCheck2Icon, ChevronDown, Clock, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usesearchteach } from "../Hooks/usesearchteach";
import { usefilterteach } from "../Hooks/usefilterteach";

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
    applyFilters 
  } = usefilterteach(); // Filter Teachers

  //////////////////////////////////////////////

  ///////////////////////////////////// Subjects

  const [expanded, setExpanded] = useState(false);

  const languages = [
    [
      { name: "Arabic", width: "w-[92px]" },
      { name: "English", width: "w-[97px]" },
    ],
    [
      { name: "Deutsch", width: "w-[107px]" },
      { name: "Français", width: "w-[110px]" },
    ],
    [
      { name: "Español", width: "w-[104px]" },
      { name: "Italiano", width: "w-[101px]" },
    ],
  ];

  const subjects = [
    { name: "Mathematics", width: "w-[153px]" },
    { name: "Science", width: "w-[104px]" },
    { name: "Social Science", width: "w-[170px]" },
    [
      { name: "Physics", width: "w-[100px]" },
      { name: "Chemistry", width: "w-[126px]" },
    ],
    [
      { name: "Biology", width: "w-[99px]" },
      { name: "History", width: "w-[95px]" },
    ],
    { name: "Geography", width: "w-[135px]" },
    { name: "Statistics", width: "w-[115px]" },
  ];

  ////////////////////////// Range Price

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

  ////////////////////////////////////////// Call filter function

  const handleApplyFilters = () => {
    applyFilters();
  };

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

  ///////////////////////////////////// function Clear All Filters

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

  // loading screen

//   if(searchIsLoading){
//       return <>

//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//           <div className="text-center">

//               <div className="relative w-24 h-24 mx-auto mb-8">
//                   <div className="absolute inset-0 border-4 border-indigo-200 rounded-full"></div>
//                   <div className="absolute inset-0 border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"></div>
//                   <div className="absolute inset-3 border-4 border-transparent border-t-blue-400 rounded-full animate-spin" style={{ animationDuration: '1s', animationDirection: 'reverse' }}></div>

//                   <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></div>
//                   </div>
//               </div>
//               <div className="flex justify-center gap-2 mt-6">
//                   <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
//                   <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
//                   <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
//               </div>
//           </div>
//       </div>

//       </>
//   }

  ////////////////////////////////////////////////////////////

  return (
    <>
      <main className="w-[1200px] m-auto">
        <div className="flex justify-between items-center mb-[30px]">
          <h2 className="text-[#2A2D34] font-bold text-[32px]">
            Explore teachers
          </h2>
          <p className="text-[#2A2D34] font-bold text-[18px]">
            224 teachers available
          </p>
        </div>

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
            <div className="Subjects mb-[22px]">
              <p className="text-[18px] mb-[22px] text-[#2A2D34] font-semibold">
                Subjects
              </p>

              <div className="w-[250px]">
                <div className="space-y-2">
                  {languages.map((row, idx) => (
                    <div key={idx} className="flex gap-2">
                      {row.map((lang) => {
                        const isSelected = selectedLanguage === lang.name;
                        return (
                          <button
                            onClick={() => setSelectedLanguage(lang.name)}
                            key={lang.name}
                            className={`${lang.width} cursor-pointer p-4 h-[45px] flex justify-center items-center text-[18px] font-medium border rounded-lg transition-colors duration-300
                                                            ${
                                                              isSelected
                                                                ? "bg-[#525FE1] text-white border-[#525FE1]"
                                                                : "bg-white text-[#2A2D34] border-gray-300 hover:bg-[#525FE1] hover:text-white"
                                                            }`}
                          >
                            {lang.name}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {expanded && (
                  <div className="mt-4 space-y-2">
                    {subjects.map((item, idx) => (
                      <div key={idx}>
                        {Array.isArray(item) ? (
                          <div className="flex gap-2">
                            {item.map((subject) => {
                              const isSelected =
                                selectedLanguage === subject.name;
                              return (
                                <button
                                  key={subject.name}
                                  onClick={() =>
                                    setSelectedLanguage(subject.name)
                                  }
                                  className={`${subject.width} cursor-pointer p-4 h-[45px] flex justify-center items-center text-[18px] font-medium border rounded-lg transition-colors duration-300
                                                                    ${
                                                                      isSelected
                                                                        ? "bg-[#525FE1] text-white border-[#525FE1]"
                                                                        : "bg-white text-[#2A2D34] border-gray-300 hover:bg-[#525FE1] hover:text-white"
                                                                    }`}
                                >
                                  {subject.name}
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          (() => {
                            const isSelected = selectedLanguage === item.name;
                            return (
                              <button
                                onClick={() => setSelectedLanguage(item.name)}
                                className={`${item.width} cursor-pointer p-4 h-[45px] flex justify-center items-center text-[18px] font-medium border rounded-lg transition-colors duration-300
                                                                ${
                                                                  isSelected
                                                                    ? "bg-[#525FE1] text-white border-[#525FE1]"
                                                                    : "bg-white text-[#2A2D34] border-gray-300 hover:bg-[#525FE1] hover:text-white"
                                                                }`}
                              >
                                {item.name}
                              </button>
                            );
                          })()
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-3 text-[18px] font-medium text-[#525FE1]"
                >
                  {expanded ? "See less" : "See all"}
                </button>
              </div>
            </div>

            <div className="line w-[250px] mb-[22px] border border-[#D1D5DB]"></div>

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
              {/* ////////////////////////// */}
            </div>

            <div className="line w-[250px] mb-[22px] border border-[#D1D5DB]"></div>

            <div className="Ratings mb-[22px]">
              <h2 className="font-semibold mb-[28px] text-[18px]">Ratings</h2>

              <div className="rangeRate max-w-[250px]">
                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="radio"
                    name="rating"
                    value={4.5}
                    checked={selectedRating === 4.5}
                    onChange={(e) => setSelectedRating(Number(e.target.value))}
                    className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer
                                    checked:border-[6px] checked:border-[#525FE1] transition-all"
                  />

                  <span className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const rating = 4.5;
                      if (star <= Math.floor(rating)) {
                        return (
                          <span key={star} className="text-[#FFD057]">
                            <Star fill="#FFD057" className="w-4 h-4" />
                          </span>
                        );
                      } else if (
                        star === Math.ceil(rating) &&
                        rating % 1 !== 0
                      ) {
                        return (
                          <span key={star} className="relative inline-block">
                            <Star className="w-4 h-4 text-[#FFD057]" />
                            <span
                              className="absolute top-0 left-0 overflow-hidden"
                              style={{ width: `${(rating % 1) * 100}%` }}
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
                  </span>

                  <h4 className=" font-semibold text-[16px] text-[#5A6272] ">
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
                    className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer
                                    checked:border-[6px]  checked:border-[#525FE1] transition-all"
                  />

                  <span className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const rating = 4.0;
                      if (star <= Math.floor(rating)) {
                        return (
                          <span key={star} className="text-[#FFD057]">
                            <Star fill="#FFD057" className="w-4 h-4" />
                          </span>
                        );
                      } else if (
                        star === Math.ceil(rating) &&
                        rating % 1 !== 0
                      ) {
                        return (
                          <span key={star} className="relative inline-block">
                            <Star className="w-4 h-4 text-[#FFD057]" />
                            <span
                              className="absolute top-0 left-0 overflow-hidden"
                              style={{ width: `${(rating % 1) * 100}%` }}
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
                  </span>

                  <h4 className=" font-semibold text-[16px] text-[#5A6272] ">
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
                    className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer
                                    checked:border-[6px]  checked:border-[#525FE1] transition-all"
                  />

                  <span className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const rating = 3.5;
                      if (star <= Math.floor(rating)) {
                        return (
                          <span key={star} className="text-[#FFD057]">
                            <Star fill="#FFD057" className="w-4 h-4" />
                          </span>
                        );
                      } else if (
                        star === Math.ceil(rating) &&
                        rating % 1 !== 0
                      ) {
                        return (
                          <span key={star} className="relative inline-block">
                            <Star className="w-4 h-4 text-[#FFD057]" />
                            <span
                              className="absolute top-0 left-0 overflow-hidden"
                              style={{ width: `${(rating % 1) * 100}%` }}
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
                  </span>

                  <h4 className=" font-semibold text-[16px] text-[#5A6272] ">
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
                    className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer
                                    checked:border-[6px] checked:border-[#525FE1] transition-all"
                  />

                  <span className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const rating = 3.0;
                      if (star <= Math.floor(rating)) {
                        return (
                          <span key={star} className="text-[#FFD057]">
                            <Star fill="#FFD057" className="w-4 h-4" />
                          </span>
                        );
                      } else if (
                        star === Math.ceil(rating) &&
                        rating % 1 !== 0
                      ) {
                        return (
                          <span key={star} className="relative inline-block">
                            <Star className="w-4 h-4 text-[#FFD057]" />
                            <span
                              className="absolute top-0 left-0 overflow-hidden"
                              style={{ width: `${(rating % 1) * 100}%` }}
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
                  </span>

                  <h4 className=" font-semibold text-[16px] text-[#5A6272] ">
                    3.0 & up <span className="font-medium"> (293) </span>
                  </h4>
                </div>
              </div>
            </div>

            <div className="line w-[250px] mb-[22px] border border-[#D1D5DB]"></div>

            <div className="Days w-[250px]">
              <h2 className="font-semibold mb-[28px] text-[18px]">Days</h2>

              <div className="All_Option mb-[22px]">
                <div className="flex  items-center gap-2 mb-2">
                  <div
                    onClick={() => setSelectedDay("Sun")}
                    className={`cursor-pointer border flex justify-center items-center text-[#2A2D34] hover:bg-[#525FE1] hover:text-white h-[45px] border-[#D1D5DB] w-[67px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Sun" ? "bg-[#525FE1] text-white" : ""}`}
                  >
                    <p className="font-medium text-[18px]">Sun</p>
                  </div>
                  <div
                    onClick={() => setSelectedDay("Mon")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[45px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[72px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Mon" ? "bg-[#525FE1] text-white" : ""}`}
                  >
                    <p className="font-medium text-[18px]">Mon</p>
                  </div>
                  <div
                    onClick={() => setSelectedDay("Tue")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[45px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[65px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Tue" ? "bg-[#525FE1] text-white" : ""}`}
                  >
                    <p className="font-medium text-[18px]">Tue</p>
                  </div>
                </div>

                <div className="flex  items-center gap-2 mb-2">
                  <div
                    onClick={() => setSelectedDay("Wed")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[45px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[74px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Wed" ? "bg-[#525FE1] text-white" : ""}`}
                  >
                    <p className="font-medium text-[18px]">Wed</p>
                  </div>
                  <div
                    onClick={() => setSelectedDay("Thu")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[45px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[66px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Thu" ? "bg-[#525FE1] text-white" : ""}`}
                  >
                    <p className="font-medium text-[18px]">Thu</p>
                  </div>
                  <div
                    onClick={() => setSelectedDay("Fri")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[45px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[53px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Fri" ? "bg-[#525FE1] text-white" : ""}`}
                  >
                    <p className="font-medium text-[18px]">Fri</p>
                  </div>
                </div>

                <div className="flex  items-center gap-2">
                  <div
                    onClick={() => setSelectedDay("Sat")}
                    className={`cursor-pointer border flex justify-center text-[#2A2D34] items-center h-[45px] hover:bg-[#525FE1] hover:text-white border-[#D1D5DB] w-[62px] transition-colors duration-300 p-4 rounded-[8px] ${selectedDay === "Sat" ? "bg-[#525FE1] text-white" : ""}`}
                  >
                    <p className="font-medium text-[18px]">Sat</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="line w-[250px] mb-[22px] border border-[#D1D5DB]"></div>

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

            <div className="line w-[250px] mb-[22px] border border-[#D1D5DB]"></div>

            <div className="buttons" onClick={handleApplyFilters}>
              <button className="bg-[#525FE1] flex justify-center items-center cursor-pointer w-[250px] mb-4 h-[45px] text-white text-[18px] p-4 rounded-[8px] font-semibold">
                Apply
              </button>
              <button
                onClick={handleClearAll}
                type="button"
                className="flex justify-center items-center cursor-pointer w-[250px] h-[45px] text-[#525FE1] border-2 text-[18px] p-4 rounded-[8px] font-semibold"
              >
                Clear all
              </button>
            </div>
          </div>

          {/* /////////////////// teachers  */}
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

                    <div className="LeftTeacher w-[300px] h-[266px]">
                      <div className="w-[300px] mb-7 flex justify-between items-start">
                        <div className="w-[131px] flex justify-between items-start gap-2">
                          <img
                            src="../../../../../src/assets/icons/MoneyIcon.svg"
                            alt="MoneyIcon"
                          />
                          <div className="">
                            <p className="font-bold text-[#525FE1] text-[24px]">
                              Egp 100
                            </p>
                            <p className="font-medium text-[14px] text-[#2A2D34]">
                              per session
                            </p>
                          </div>
                        </div>
                        <div className="heartImage">
                          <img
                            src="../../../../../src/assets/icons/heartIcon.svg"
                            alt="heartIcon"
                          />
                        </div>
                      </div>

                      <div className="w-[300px] h-[95px] mb-7">
                        <p className="font-medium text-[16px]">Select time</p>
                        <div className="w-[300px] p-3 h-[74px] border border-[#D1D5DB] rounded-[8px] flex justify-between items-center">
                          <div className="flex items-center h-[64px] gap-[58px]">
                            <div className="Date&Time w-[197px]">
                              <div className="text-[#2A2D34] flex items-center gap-[8px]">
                                <CalendarCheck2Icon size={20} />
                                <span className="text-[18px] font-medium">
                                  Wed 22 oct
                                </span>
                              </div>
                              <div className="text-[#2A2D34] flex items-center gap-[8px]">
                                <Clock size={20} />
                                <span className="text-[18px] font-medium">
                                  2:00 pm - 4:00 pm
                                </span>
                              </div>
                            </div>

                            <div className="ArrowDown">
                              <ChevronDown />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-[300px] h-[66px]">
                        <p className="text-[14px] font-bold text-[#E15254]">
                          2 seats left
                        </p>
                        <button className="font-semibold w-[300px] h-[45px] flex justify-center items-center text-[18px] text-[#F9FBFC] bg-[#525FE1] rounded-[8px] p-4">
                          Reserve Session
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="layerBackGround top-[-23px] left-[-80px]  -z-10 absolute ">
                    <img
                      className="w-[236px] rotate-[99.81deg] h-[239]"
                      src="../../../../../src/assets/images/BackTeacher.png"
                      alt="BackTeacher"
                    />
                  </div>
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
