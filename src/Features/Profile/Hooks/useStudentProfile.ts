import { useQuery } from "@tanstack/react-query";
import { GetStudentProfileData } from "../Services/studentProfileAPI";



export const useStudentProfile = () => {

   const { data } = useQuery({
        queryKey: ["StudentProfileData"],
        queryFn: ()=>{
            return GetStudentProfileData()
        },
    });

    return {data};
}