import { useQuery } from "@tanstack/react-query";
import { getBasicInfo } from "../Services/getBasicInfo"
export const useQuizHeaderDashboard = (quizId: number) => {
    
    const { data , refetch } = useQuery({
    queryKey: ["QuizHeaderData", quizId],
    queryFn: async() =>{
        return (await getBasicInfo(quizId)).data;
    },
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
});
    return {data , refetch}

}