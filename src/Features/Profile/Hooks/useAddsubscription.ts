import { useMutation } from "@tanstack/react-query";
import { addSubscription } from "../Services/addSubscriptionAPI";

export const useAddSubscription = () => {

    const mutation = useMutation({
        mutationFn: (teacherId: string) => addSubscription(teacherId),
        onSuccess: (res) => {
            console.log("Subscription added successfully:", res.data);
        },
        onError: (err) => {
            console.error("Error adding Subscription:", err);
        },
    });

    return mutation;

}