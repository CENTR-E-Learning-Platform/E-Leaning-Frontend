import { useQuery } from "@tanstack/react-query";
import { GetUpcomingClassesForStudent } from "../Services/getUpcomingClassesForStudent";

export const useUpcomingClassesForStudent = () => {

   const { data  , refetch} = useQuery({
        queryKey: ["upcomingClassesStudent"],
        queryFn: GetUpcomingClassesForStudent,
        refetchOnWindowFocus: false,
    });

    return {data , refetch};
}