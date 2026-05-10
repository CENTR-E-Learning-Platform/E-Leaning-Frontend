import { useQuery } from "@tanstack/react-query";
import { quizSubmissions } from "../Services/QuizSubmissions";
export const useQuizSubmissions = (quizId: number) => {

    const { data , refetch } = useQuery({
        queryKey: ["QuizSubmissions", quizId  ],
        queryFn: async () => {
            return (await quizSubmissions(quizId,1,7))
        },
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    return {data , refetch}
}