import { useQuery } from "@tanstack/react-query";
import { quizSearch } from "../Services/quizSearch";

export const useQuizSearch = (studentName: string , quizId: number) => {
    const { data, refetch, isLoading } = useQuery({
        queryKey: ["QuizSearch", studentName, quizId],
        queryFn: async () => {
            return await quizSearch(quizId , studentName);
        },
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    return { data, refetch, isLoading };
};