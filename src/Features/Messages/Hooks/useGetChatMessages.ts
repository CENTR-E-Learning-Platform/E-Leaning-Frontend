import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getChatMessages } from "../Services/getChatMessages";

export const useGetChatMessages = () => {
  const queryClient = useQueryClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutation = useMutation({
    mutationFn: (ChatGetMessages: object) => getChatMessages(ChatGetMessages),
    onSuccess: (res) => {
      console.log("get Messages successfully:", res.data);
      queryClient.invalidateQueries({ queryKey: ["GetMessages"] });
    },
    onError: (err) => {
      console.error("Error Get Messages:", err);
    },
  });

  return mutation;
};
