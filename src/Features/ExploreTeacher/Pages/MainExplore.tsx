import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { usesearchteach } from "../Hooks/usesearchteach";
import { usefilterteach } from "../Hooks/usefilterteach";
import { useGetAllTeachers } from "../Hooks/useallTeacher";
import ExploreSearchBar from "../Components/Explore/ExploreSearchBar";
import ExploreFiltersPanel from "../Components/Explore/ExploreFiltersPanel";
import TeacherList from "../Components/Explore/TeacherList";
import TeacherProfileModal from "../Components/Explore/TeacherProfileModal";
import Header from "../Components/Explore/Header";
import { extractTeachersList } from "../Utils/extractTeachers";
import { useChat } from "../../Messages/Contexts/ShareDataMessages";

const MainExplore = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  const {
    data: searchTeachers,
    error: searchError,
    isLoading: searchIsLoading,
    formik,
    currentPage: searchCurrentPage,
    setCurrentPage: setSearchCurrentPage,
    teachersPerPage: searchTeachersPerPage,
  } = usesearchteach();

  const {
    data: filterData,
    error: filterError,
    isLoading: filterIsLoading,
    isFetching: filterIsFetching,
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
    setSearchTerm,
    pageNum: filterPageNum,
    setPageNum: setFilterPageNum,
    teachersPerPage: filterTeachersPerPage,
  } = usefilterteach();

  const {
    data: allTeachers,
    isLoading: allIsLoading,
    currentPage: allCurrentPage,
    setCurrentPage: setAllCurrentPage,
    teachersPerPage: allTeachersPerPage,
  } = useGetAllTeachers();

  const navigate = useNavigate();
  const { setOtherUserId, setSelectedConversation, setConversationId } = useChat();
  const [selectedTeacherForModal, setSelectedTeacherForModal] = useState<any>(null);

  const [resultsSource, setResultsSource] = useState<"all" | "filter" | "search">("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (page: number) => {
    if (resultsSource === "filter") {
      setPageNum(page);
    } else if (resultsSource === "search") {
      setSearchCurrentPage(page);
    } else {
      setAllCurrentPage(page);
    }
  };

  const setPageNum = (page: number) => {
    setResultsSource("filter");
    setFilterPageNum(page);
  };

  const openTeacherProfile = (teacher: any) => {
    setSelectedTeacherForModal(teacher);
  };

  const closeTeacherModal = () => {
    setSelectedTeacherForModal(null);
  };

  const goToMessages = (teacher: any) => {
    const teacherId = teacher.teacherId ?? teacher.id ?? null;
  if (!teacherId) return;

  setConversationId(null);
  setOtherUserId(teacherId);
  setSelectedConversation({
    otherUserId: teacherId,
    otherUserName: teacher.teacherName,
    otherUserPicture: teacher.teacherPic || "",
    isOnline: false,
    isGroup: false,
  });

  setSelectedTeacherForModal(null);
  navigate("/messages");

  };

  const handleApplyFilters = () => {
    setResultsSource("filter");
    formik.setFieldValue("SearchTeacher", "");
    setSearchTerm("");
    applyFilters();
  };

  const handleClearFilters = () => {
    setResultsSource("all");
    formik.setFieldValue("SearchTeacher", "");
    clearFilters();
  };

  const activeResponse =
    resultsSource === "filter"
      ? filterData
      : resultsSource === "search"
        ? searchTeachers
        : allTeachers;
  const teachersList = extractTeachersList(activeResponse);
  const isLoadingTeachers =
    resultsSource === "filter"
      ? filterIsLoading || filterIsFetching
      : resultsSource === "search"
        ? searchIsLoading
        : allIsLoading;

  const currentPage =
    resultsSource === "filter"
      ? filterPageNum
      : resultsSource === "search"
        ? searchCurrentPage
        : allCurrentPage;

  const pageSize =
    resultsSource === "filter"
      ? filterTeachersPerPage
      : resultsSource === "search"
        ? searchTeachersPerPage
        : allTeachersPerPage;

  const totalCount = activeResponse?.data?.totalPages;

    console.log("activeResponse?.data" , activeResponse?.data?.totalPages)

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
        {showSkeleton ? (
          <div className="flex flex-col gap-8 w-full mt-8">
            <Skeleton height={120} borderRadius={16} />
            <Skeleton height={60} borderRadius={12} />
            <div className="flex justify-between items-start gap-[28px]">
              <div className="w-[300px]">
                <Skeleton height={650} borderRadius={16} />
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <Skeleton height={180} borderRadius={16} />
                <Skeleton height={180} borderRadius={16} />
                <Skeleton height={180} borderRadius={16} />
              </div>
            </div>
          </div>
        ) : (
          <>
            <Header />

            <ExploreSearchBar
              formik={formik}
              setSearchTerm={setSearchTerm}
              setResultsSource={setResultsSource}
            />

            <div className="flex justify-between items-start gap-[28px]">
              <ExploreFiltersPanel
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
                setEndTime={setEndTime}
                startPrice={startPrice}
                setStartPrice={setStartPrice}
                endPrice={endPrice}
                setEndPrice={setEndPrice}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
                applyFilters={handleApplyFilters}
                clearFilters={handleClearFilters}
                formik={formik}
                setSearchTerm={setSearchTerm}
                setResultsSource={setResultsSource}
              />

              <div className="teachers w-full">
                <TeacherList
                  teachersList={teachersList}
                  isLoading={isLoadingTeachers}
                  currentPage={currentPage}
                  pageSize={pageSize}
                  totalCount={totalCount}
                  onPageChange={handlePageChange}
                  onOpenProfile={openTeacherProfile}
                />

                {selectedTeacherForModal && (
                  <TeacherProfileModal
                    teacher={selectedTeacherForModal}
                    onClose={closeTeacherModal}
                    onMessage={goToMessages}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default MainExplore;