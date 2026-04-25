import { useQuery } from "@tanstack/react-query";
import { getQuizStatus } from "../Services/getQuizStatus";
export const useQuizStatus = () => {

    const { data , refetch } = useQuery({
        queryKey: ["QuizStatus"],
        queryFn: async () => {
            return (await getQuizStatus(1)).data
        },
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    return {data , refetch}
}