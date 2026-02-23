import { useMutation } from "@tanstack/react-query";
import { sendUploadVideoData } from "../Services/uploadIntroVideoAPI";


export const useUploadIntroVideo = ()=>{  
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutation = useMutation({
    mutationFn: (file: File) => sendUploadVideoData(file),
    onSuccess: (res) => {
      console.log("Video uploaded successfully:", res.data);
    },
    onError: (err) => {
      console.error("Error uploading Video:", err);
    },
  });

  return mutation;
};
