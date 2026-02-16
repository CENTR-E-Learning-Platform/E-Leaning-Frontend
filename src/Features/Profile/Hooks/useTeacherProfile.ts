import { useQuery } from "@tanstack/react-query";
import { GetTeacherProfileData } from "../Services/TeacherProfileAPI";


export const useTeacherProfile = () => {

   const { data } = useQuery({
        queryKey: ["TeacherProfileData"],
        queryFn: ()=>{
            return GetTeacherProfileData()
        },
    });

    return {data};
}