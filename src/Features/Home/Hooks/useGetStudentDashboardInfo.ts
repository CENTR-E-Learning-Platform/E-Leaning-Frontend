import { useQuery } from "@tanstack/react-query";
import { GetStudentDashboardInfo } from "../Services/getStudentDashboardInfo";

export const useStudentDashboardInfo = () => {

   const { data  , refetch} = useQuery({
        queryKey: ["studentDashboardInfo"],
        queryFn: GetStudentDashboardInfo,
        refetchOnWindowFocus: false,
    });

    return {data , refetch};
}