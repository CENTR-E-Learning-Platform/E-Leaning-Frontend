import { useMutation } from "@tanstack/react-query";
import { AddBio } from "../Services/addBioAPI";

export const useAddBio = () => {

    const mutation = useMutation({
        mutationFn: (bio: string) => AddBio(bio),
        onSuccess: (res) => {
            console.log("Bio added successfully:", res.data);
        },
        onError: (err) => {
            console.error("Error adding Bio:", err);
        },
    });

    return mutation;

}