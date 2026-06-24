import type { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalCount: number | null;
  itemsCount: number;
  onPageChange: (page: number) => void;
};

export type ApiBody = {
  data?: unknown;
  teachers?: unknown[];
  items?: unknown[];
};

export interface TeacherListProps {
  teachersList: any[];
  isLoading: boolean;
  currentPage: number;
  pageSize: number;
  totalCount: number | null;
  onPageChange: (page: number) => void;
  onOpenProfile: (teacher: any) => void;
};

export interface TeacherCardProps {
  teacher: any;
  onOpenProfile: (teacher: any) => void;
};

export interface RattingFilterExploreProps {
  selectedRating: number | null;
  setSelectedRating: (value: number | null) => void;
};

export interface Teacher {
  closesetSessionPrice: number;
  closesetSessionAvailableSeats: number;
  roomName: string;
  closesetSessionRoomName?: string;
  closestSessionRoomName?: string;
  closestRoomName?: string;
  sessionRoomName?: string;
  [key: string]: any;
};

export interface ExploreFiltersPanelProps {
  selectedLanguage: string;
  setSelectedLanguage: Dispatch<SetStateAction<string>>;
  selectedDay: string;
  setSelectedDay: Dispatch<SetStateAction<string>>;
  startTime: number;
  setStartTime: (value: number) => void;
  endTime: number;
  setEndTime: (value: number) => void;
  startPrice: number;
  setStartPrice: (value: number) => void;
  endPrice: number;
  setEndPrice: (value: number) => void;
  selectedRating: number | null;
  setSelectedRating: (value: number | null) => void;
  applyFilters: () => void;
  clearFilters: () => void;
  formik: any;
  setSearchTerm: (value: string) => void;
  setResultsSource: Dispatch<SetStateAction<"all" | "filter" | "search">>;
};

export interface DaysFilterExploreProps {
  selectedDay: string;
  setSelectedDay: Dispatch<SetStateAction<string>>;
};

export interface ButtomApplyFilterProps {
  setDragging: (value: null) => void;
  setDragging2: (value: null) => void;
  setStartTime: (value: number) => void;
  setEndTime: (value: number) => void;
  setStartPrice: (value: number) => void;
  setEndPrice: (value: number) => void;
  applyFilters: () => void;
  clearFilters: () => void;
};

export interface ExploreSearchBarProps {
  formik: any;
  setSearchTerm: (value: string) => void;
  setResultsSource: Dispatch<SetStateAction<"all" | "filter" | "search">>;
};

export interface SubjectFilterExploreProps {
  selectedLanguage: string;
  setSelectedLanguage: Dispatch<SetStateAction<string>>;
};

export interface TeacherProfileModalProps {
  teacher: any;
  onClose: () => void;
  onMessage: (teacher: any) => void; 
};
