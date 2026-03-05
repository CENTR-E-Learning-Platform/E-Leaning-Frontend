import { useQuery } from "@tanstack/react-query";
import { GetTeacherProfileData } from "../Services/TeacherProfileAPI";

export const useTeacherProfile = () => {

   const { data  , refetch} = useQuery({
        queryKey: ["teacherProfile"],
        queryFn: GetTeacherProfileData,
        refetchOnWindowFocus: false,
    });

    return {data , refetch};
}