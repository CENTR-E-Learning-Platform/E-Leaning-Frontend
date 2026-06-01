import { useQuery } from "@tanstack/react-query";
import { getDashboardQuizzesStudent } from "../Services/getDashboardQuizzesStudent";

export const useGetQuizzesStudent = () => {

   const { data  , refetch} = useQuery({
        queryKey: ["DashboardQuizzesStudent"],
        queryFn: getDashboardQuizzesStudent,
        refetchOnWindowFocus: false,
    });

    return {data , refetch};
}