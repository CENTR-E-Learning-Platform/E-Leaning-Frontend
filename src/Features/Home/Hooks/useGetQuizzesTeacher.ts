import { useQuery } from "@tanstack/react-query";
import { getQuizzesSummaryTeacher } from "../Services/getQuizzesSummaryTecher";

export const useGetQuizzesTeacher = () => {

   const { data  , refetch} = useQuery({
        queryKey: ["QuizzesSummaryTeacher"],
        queryFn: getQuizzesSummaryTeacher,
        refetchOnWindowFocus: false,
    });

    return {data , refetch};
}