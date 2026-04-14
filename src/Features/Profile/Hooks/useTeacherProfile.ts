import { useQuery } from "@tanstack/react-query";
import { GetTeacherProfileData } from "../Services/TeacherProfileAPI";

export const useTeacherProfile = (isProfilePage: boolean) => {
  const { data, refetch } = useQuery({
    queryKey: ["teacherProfile"],
    queryFn: GetTeacherProfileData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
    enabled: isProfilePage,
  });

  return { data, refetch };
};
