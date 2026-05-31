import { useQuery } from "@tanstack/react-query";
import { GetUpcomingClassesForTeacher } from "../Services/getUpcomingClassesForTeacher";

export const useUpcomingClassesForTeacher = () => {

   const { data  , refetch} = useQuery({
        queryKey: ["upcomingClassesTeacher"],
        queryFn: GetUpcomingClassesForTeacher,
        refetchOnWindowFocus: false,
    });

    return {data , refetch};
}