import { useQuery } from "@tanstack/react-query";
import { GetStudentProfileData } from "../Services/studentProfileAPI";

export const useStudentProfile = () => {

   const { data , refetch , isLoading } = useQuery({
        queryKey: ["StudentProfileData"],
        queryFn: ()=>{
            return GetStudentProfileData()
        },
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    return {data , refetch , isLoading};
}