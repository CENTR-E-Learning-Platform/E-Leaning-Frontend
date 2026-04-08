import { useQuery } from "@tanstack/react-query";
import { GetUpcomingClasses } from "../Services/getUpcomingClasses";

export const useUpcomingClasses = () => {

   const { data  , refetch} = useQuery({
        queryKey: ["upcomingClasses"],
        queryFn: GetUpcomingClasses,
        refetchOnWindowFocus: false,
    });

    return {data , refetch};
}