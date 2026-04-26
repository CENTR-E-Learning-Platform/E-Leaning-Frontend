import { useQuery } from "@tanstack/react-query";
import { quizSubmissions } from "../Services/QuizSubmissions";
export const useQuizSubmissions = () => {

    const { data , refetch } = useQuery({
        queryKey: ["QuizSubmissions"],
        queryFn: async () => {
            return (await quizSubmissions(1,1,7))
        },
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    return {data , refetch}
}