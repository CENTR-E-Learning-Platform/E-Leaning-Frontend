import { useQuery } from "@tanstack/react-query";
import { getChatMyGroups } from "../Services/getChatMyGroups";

export const useGetChatMyGroups = () => {
  const { data, refetch :refetchChatMyGroups } = useQuery({
    queryKey: ["GetChatMyGroup"],
    queryFn: getChatMyGroups,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true, 
    staleTime: 30000
  });

  return { data, refetchChatMyGroups };
};