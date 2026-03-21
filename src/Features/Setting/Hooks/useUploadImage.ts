import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendUploadImageData } from "../Services/uploadImageAPI";

export const useUploadImage = () => {
  const queryClient = useQueryClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutation = useMutation({
    mutationFn: (file: File) => sendUploadImageData(file),
    onSuccess: (res) => {
      console.log("Image uploaded successfully:", res.data);
      queryClient.invalidateQueries({ queryKey: ["studentProfile"] });
    },
    onError: (err) => {
      console.error("Error uploading image:", err);
    },
  });

  return mutation;
};
