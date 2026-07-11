import { useQuery } from "@tanstack/react-query";
import { getAllQuizTeacher } from "../Services/getAllQuizTeacher";
import { roleToAuth } from "../../../Utils/Constant";
import { getAllQuizzesStudent } from "../Services/getAllQuizStudent";
export const useGetAllQuizes = () => {
    const isTeacher = !!roleToAuth?.includes("Teacher");
    const { data, refetch, isLoading } = useQuery({
    queryKey: [isTeacher ? "getAllQuizTeacher" : "getAllQuizzesStudent"],
    queryFn: async() =>{
        if(isTeacher){
            return (await getAllQuizTeacher());
        }
        return (await getAllQuizzesStudent());
        
    },
    
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
});
    return {data , refetch, isLoading}
}