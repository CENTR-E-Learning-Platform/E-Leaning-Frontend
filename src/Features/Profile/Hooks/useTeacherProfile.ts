import { useQuery } from "@tanstack/react-query";
import { GetTeacherProfileData } from "../Services/TeacherProfileAPI";

export const useTeacherProfile = () => {
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ["teacherProfile"],
    queryFn: GetTeacherProfileData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  });

  return { data, refetch, isLoading, isError, error };
};
