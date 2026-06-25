import { useQuery } from "@tanstack/react-query";
import { sendFilterData } from "../Services/filterAPI";
import { useState } from "react";

type AppliedFilters = {
    searchTerm: string;
    subject: string;
    selectedDay: string;
    startTime: number;
    endTime: number;
    startPrice: number;
    endPrice: number;
    selectedRating: number | null;
};

const DEFAULT_APPLIED_FILTERS: AppliedFilters = {
    searchTerm: "",
    subject: "",
    selectedDay: "",
    startTime: 8,
    endTime: 26,
    startPrice: 50,
    endPrice: 300,
    selectedRating: null,
};

const dayMap: Record<string, string> = {
    Sun: "Sunday",
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
};

const buildFilterParams = (filters: AppliedFilters, pageNum: number) => {
    const getISOStringForHour = (hour: number): string => {
        const date = new Date();
        if (filters.selectedDay) {
            const weekdayIndexMap: Record<string, number> = {
                Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
            };
            const targetDayIndex = weekdayIndexMap[filters.selectedDay];
            if (targetDayIndex !== undefined) {
                const currentDayIndex = date.getDay();
                let dayDiff = targetDayIndex - currentDayIndex;
                if (dayDiff < 0) dayDiff += 7;
                date.setDate(date.getDate() + dayDiff);
            }
        }

        if (hour >= 24) {
            date.setDate(date.getDate() + 1);
            date.setHours(hour - 24, 0, 0, 0);
        } else {
            date.setHours(hour, 0, 0, 0);
        }
        return date.toISOString();
    };

    const filterParams: Record<string, string | number | undefined> = {
        searchTerm: filters.searchTerm || undefined,
        Subject: filters.subject || undefined,
        FilteringDay: filters.selectedDay ? dayMap[filters.selectedDay] : undefined,
        pageNumber: pageNum,
        pageSize: 3,
    };

    if (filters.startPrice !== 50 || filters.endPrice !== 300) {
        filterParams.MinPrice = Number(filters.startPrice);
        filterParams.MaxPrice = Number(filters.endPrice);
    }

    if (filters.selectedDay) {
        filterParams.StartTime = getISOStringForHour(filters.startTime);
        filterParams.EndTime = getISOStringForHour(filters.endTime);
    }

    if (filters.selectedRating != null) {
        filterParams.MinRate = Number(filters.selectedRating);
    }

    return filterParams;
};

export const usefilterteach = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [startTime, setStartTime] = useState(8);
    const [endTime, setEndTime] = useState(26);
    const [startPrice, setStartPrice] = useState(50);
    const [endPrice, setEndPrice] = useState(300);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [pageNum, setPageNum] = useState(1);
    const teachersPerPage = 3;
    const [appliedFilters, setAppliedFilters] = useState<AppliedFilters>(DEFAULT_APPLIED_FILTERS);

    const { data, error, isLoading, isFetching } = useQuery({
        queryKey: ["filter", appliedFilters, pageNum],
        queryFn: () => {
            const filterParams = buildFilterParams(appliedFilters, pageNum);
            console.log("Filter params being sent:", filterParams);
            return sendFilterData(filterParams);
        },
        enabled: true,
        retry: false,
        refetchOnMount: true,
        staleTime: 0,
        refetchOnWindowFocus: false,
    });

    const applyFilters = () => {
        setPageNum(1);
        setAppliedFilters({
            searchTerm,
            subject: selectedLanguage,
            selectedDay,
            startTime,
            endTime,
            startPrice,
            endPrice,
            selectedRating,
        });
    };

    const clearFilters = () => {
        setSelectedLanguage("");
        setSelectedDay("");
        setSelectedRating(null);
        setStartTime(8);
        setEndTime(26);
        setStartPrice(50);
        setEndPrice(300);
        setSearchTerm("");
        setPageNum(1);
        setAppliedFilters(DEFAULT_APPLIED_FILTERS);
    };

    return {
        data,
        error,
        isLoading,
        isFetching,
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
        searchTerm,
        setSearchTerm,
        pageNum,
        setPageNum,
        teachersPerPage,
    };
};
