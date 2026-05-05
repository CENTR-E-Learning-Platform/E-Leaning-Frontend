import { useQuery } from "@tanstack/react-query";
import { getChatConversation } from "../Services/getChatConversation";

export const useGetChatConversation = () => {
  const { data, refetch } = useQuery({
    queryKey: ["GetConversation"],
    queryFn: getChatConversation,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true, 
    staleTime: 30000
  });

  return { data, refetch };
};
