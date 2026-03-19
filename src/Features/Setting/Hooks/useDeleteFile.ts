import { useMutation } from "@tanstack/react-query";
import { DeleteFile } from "../Services/deleteFileAPI";

export const useDeleteFile = () => {

    const mutation = useMutation({
        mutationFn: (fileType: number) => DeleteFile(fileType),
        onSuccess: (res) => {
        console.log("Image deleted successfully:", res.data);
        },
        onError: (err) => {
        console.error("Error deleting Image:", err);
        },
    });

    return mutation;

}