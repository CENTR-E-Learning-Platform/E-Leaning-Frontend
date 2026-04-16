import { useMutation } from "@tanstack/react-query";
import { addUnsubscription } from "../Services/addUnsubscriptionAPI";

export const useAddUnsubscription = () => {

    const mutation = useMutation({
        mutationFn: (teacherId: string) => addUnsubscription(teacherId),
        onSuccess: (res) => {
            console.log("Unsubscription added successfully:", res.data);
        },
        onError: (err) => {
            console.error("Error adding Unsubscription:", err);
        },
    });

    return mutation;

}