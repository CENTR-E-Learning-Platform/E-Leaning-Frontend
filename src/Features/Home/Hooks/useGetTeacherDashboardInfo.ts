import { useQuery } from "@tanstack/react-query";
import { GetTeacherDashboardInfo } from "../Services/getTeacherDashboardInfo";

export const useTeacherDashboardInfo = () => {

   const { data  , refetch} = useQuery({
        queryKey: ["teacherDashboardInfo"],
        queryFn: GetTeacherDashboardInfo,
        refetchOnWindowFocus: false,
    });

    return {data , refetch};
}