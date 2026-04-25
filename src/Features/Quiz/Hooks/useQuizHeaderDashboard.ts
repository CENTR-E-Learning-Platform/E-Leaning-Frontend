import { useQuery } from "@tanstack/react-query";
import { getBasicInfo } from "../Services/getBasicInfo"
export const useQuizHeaderDashboard = () => {
    
    const { data , refetch } = useQuery({
    queryKey: ["QuizHeaderData"],
    queryFn: async() =>{
        return (await getBasicInfo(1)).data;
    },
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
});
    return {data , refetch}

}