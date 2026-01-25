import { useQuery } from "@tanstack/react-query";
import { sendFilterData } from "../Services/filterAPI";
import { useState } from "react";

export const usefilterteach = () => {
   const [selectedLanguage, setSelectedLanguage] = useState<string | null>("");
   const [selectedDay, setSelectedDay] = useState<string | null>("");
   const [startTime, setStartTime] = useState(8);
   const [endTime, setEndTime] = useState(26);
   const [startPrice, setStartPrice] = useState(50);
   const [endPrice, setEndPrice] = useState(300);
   const [selectedRating, setSelectedRating] = useState<number | null>(null);
   let endRating = selectedRating !== null ? selectedRating + 0.5 : null;

   const { data, error, isLoading , refetch } = useQuery({
        queryKey: ["filter" , selectedLanguage, selectedDay, startTime, endTime, startPrice, endPrice, selectedRating],
        queryFn: ()=>{
            return sendFilterData({
                Subject: `${selectedLanguage}`,
                MinDateHour: `${startTime}`,
                MaxDateHour: `${endTime}`,
                WeekDay: `${selectedDay}`,
                MinPrice: Number(startPrice),
                MaxPrice: Number(endPrice),
                MinRate: Number(selectedRating),
                MaxRate: Number(endRating),
            })
        },
        enabled: false,
        retry: false, 
        refetchOnMount: false,
        staleTime: 60000,
        refetchOnWindowFocus: false,
    });

    return { data , error, isLoading , selectedLanguage , setSelectedLanguage , selectedDay, setSelectedDay  ,
        startTime, setStartTime , endTime, setEndTime , startPrice, setStartPrice , endPrice, setEndPrice , selectedRating ,
        setSelectedRating , endRating , applyFilters: refetch
    };
}