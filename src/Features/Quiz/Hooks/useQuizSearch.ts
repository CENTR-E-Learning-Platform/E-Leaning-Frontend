import { useQuery } from "@tanstack/react-query";
import { quizSearch } from "../Services/quizSearch";

export const useQuizSearch = (studentName: string) => {
    const { data, refetch, isLoading } = useQuery({
        queryKey: ["QuizSearch", studentName],
        queryFn: async () => {
            return await quizSearch(1, studentName);
        },
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    return { data, refetch, isLoading };
};