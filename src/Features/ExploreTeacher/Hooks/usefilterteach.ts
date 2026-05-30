import { useQuery } from "@tanstack/react-query";
import { sendFilterData } from "../Services/filterAPI";
import { useState } from "react";

export const usefilterteach = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("");
    const [selectedDay, setSelectedDay] = useState<string>("");
    const [startTime, setStartTime] = useState(8);
    const [endTime, setEndTime] = useState(26);
    const [startPrice, setStartPrice] = useState(50);
    const [endPrice, setEndPrice] = useState(300);
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [pageNum, setPageNum] = useState<number>(1);
    let endRating = selectedRating !== null ? selectedRating + 0.5 : null;

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["filter", selectedLanguage, selectedDay, startTime, endTime, startPrice, endPrice, selectedRating, searchTerm, pageNum],
        queryFn: () => {
            const dayMap: Record<string, string> = {
                Sun: "Sunday",
                Mon: "Monday",
                Tue: "Tuesday",
                Wed: "Wednesday",
                Thu: "Thursday",
                Fri: "Friday",
                Sat: "Saturday"
            };

            const getISOStringForHour = (hour: number): string => {
                const date = new Date();
                if (selectedDay) {
                    const weekdayIndexMap: Record<string, number> = {
                        Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6
                    };
                    const targetDayIndex = weekdayIndexMap[selectedDay];
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

            const filterParams = {
                searchTerm: searchTerm || undefined,
                Subject: selectedLanguage || undefined,
                FilteringDay: selectedDay ? dayMap[selectedDay] : undefined,
                MinPrice: Number(startPrice),
                MaxPrice: Number(endPrice),
                StartTime: getISOStringForHour(startTime),
                EndTime: getISOStringForHour(endTime),
                MinRate: selectedRating !== null ? Number(selectedRating) : undefined,
                MaxRate: endRating !== null ? Number(endRating) : undefined,
                pageNumber: pageNum,
                pageSize: 3,
            };
            console.log("Filter params being sent:", filterParams);
            return sendFilterData(filterParams)
        },
        enabled: false,
        retry: false,
        refetchOnMount: false,
        staleTime: 60000,
        refetchOnWindowFocus: false,
    });

    return {
        data, error, isLoading, selectedLanguage, setSelectedLanguage, selectedDay, setSelectedDay,
        startTime, setStartTime, endTime, setEndTime, startPrice, setStartPrice, endPrice, setEndPrice, selectedRating,
        setSelectedRating, endRating, applyFilters: refetch, searchTerm, setSearchTerm, pageNum, setPageNum
    };
}