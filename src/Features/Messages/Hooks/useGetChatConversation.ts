

import { useQuery } from "@tanstack/react-query";
import { getChatConversation } from "../Services/getChatConversation";

export const useGetChatConversation = () => {
  const { data, refetch } = useQuery({
    queryKey: ["GetConversation"],
    queryFn: getChatConversation,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  });

  return { data, refetch };
};
