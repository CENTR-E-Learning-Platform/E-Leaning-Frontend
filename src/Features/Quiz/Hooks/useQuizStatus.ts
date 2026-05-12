import { useQuery } from "@tanstack/react-query";
import { getQuizStatus } from "../Services/getQuizStatus";
export const useQuizStatus = (quizId: number) => {

    const { data , refetch } = useQuery({
        queryKey: ["QuizStatus", quizId],
        queryFn: async () => {
            return (await getQuizStatus(quizId)).data
        },
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    return {data , refetch}
}