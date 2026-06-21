import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usesearchteach } from "../Hooks/usesearchteach";
import { usefilterteach } from "../Hooks/usefilterteach";
import { useGetAllTeachers } from "../Hooks/useallTeacher";
import ExploreSearchBar from "../Components/Explore/ExploreSearchBar";
import ExploreFiltersPanel from "../Components/Explore/ExploreFiltersPanel";
import TeacherList from "../Components/Explore/TeacherList";
import TeacherProfileModal from "../Components/Explore/TeacherProfileModal";
import Header from "../Components/Explore/Header";
import { extractTeachersList } from "../Utils/extractTeachers";
import { BASE_URL } from "../../Streaming/Utils/Apis";
import { useChat } from "../../Messages/Contexts/ShareDataMessages";

const MainExplore = () => {
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
  const { setOtherUserId, setSelectedConversation, setConversationId } =
    useChat();
  const [selectedTeacherForModal, setSelectedTeacherForModal] =
    useState<any>(null);

  const [resultsSource, setResultsSource] = useState<
    "all" | "filter" | "search"
  >("all");

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
    const teacherId = teacher.teacherId ?? teacher.id ?? null;
    const teacherName = teacher.teacherName ?? teacher.name ?? "Teacher";
    const teacherPicture = teacher.teacherPic
      ? `${BASE_URL}${teacher.teacherPic}`
      : `https://api.dicebear.com/7.x/avataaars/svg?seed=${teacherName}`;

    setOtherUserId(teacherId);
    setConversationId(null);
    setSelectedConversation({
      otherUserName: teacherName,
      otherUserPicture: teacherPicture,
      isOnline: true,
      otherUserId: teacherId,
    });
    setSelectedTeacherForModal(teacher);
  };

  const closeTeacherModal = () => {
    setSelectedTeacherForModal(null);
  };

  const goToMessages = () => {
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

  const totalCount =
    activeResponse?.data?.totalCount ||
    activeResponse?.data?.totalItems ||
    activeResponse?.data?.total ||
    activeResponse?.data?.pagination?.totalCount ||
    activeResponse?.data?.totalPages ||
    null;

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

          <div className="teachers">
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
      </main>
    </>
  );
};

export default MainExplore;
