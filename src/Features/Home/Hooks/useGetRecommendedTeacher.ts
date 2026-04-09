import { useQuery } from "@tanstack/react-query";
import { GetRecommendedTeacher } from "../Services/getRecommendedTeacher";

export const useRecommendedTeacher = () => {

   const { data  , refetch} = useQuery({
        queryKey: ["recommendedTeachers"],
        queryFn: GetRecommendedTeacher,
        refetchOnWindowFocus: false,
    });

    return {data , refetch};
}