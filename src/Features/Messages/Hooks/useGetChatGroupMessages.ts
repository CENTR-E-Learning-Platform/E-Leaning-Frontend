import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getChatGroupMessages } from "../Services/getChatGroupMessages";

export const useGetChatGroupMessages = () => {
  const queryClient = useQueryClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutation = useMutation({
    mutationFn: (ChatGetGropMessages: object) => getChatGroupMessages(ChatGetGropMessages),
    onSuccess: (res) => {
      console.log("get Group Messages successfully:", res.data);
      queryClient.invalidateQueries({ queryKey: ["GetGroupMessages"] });
    },
    onError: (err) => {
      console.error("Error Get Group Messages:", err);
    },
  });

  return mutation;
};
