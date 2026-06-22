import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { UpdateSession } from "../Services/updateSession";
import { type Session } from "../Types/types";
import { UpdateSessionSchema } from "../Utils/UpdateSessionSchema";

export const useUpdateSession = (session: Session | null) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const { mutate, isPending } = useMutation({
        mutationFn: (data: Session) => UpdateSession(data),
        onSuccess: () => {
            setShowConfirm(false);
            setShowSuccess(true);
        },
        onError: (error) => {
            console.log("error", error);
        }
    });

    const formik = useFormik<Session>({
        enableReinitialize: true,
        validationSchema: UpdateSessionSchema,
        initialValues: {
            id: session?.id ?? "",
            title: session?.title ?? "",
            startTime: session?.startTime
                ? new Date(session.startTime).toISOString().slice(0, 16)
                : "",
            durationMinutes: session?.durationMinutes ?? 60,
            grade: session?.grade ?? 0,
            price: session?.price ?? 0,
            reminder: (() => {
                const r = session?.reminder ?? "01:00:00";
                if (r.includes("T")) {
                    return r.split("T")[1].slice(0, 8);
                }
                return r.slice(0, 8);
            })(),
            description: session?.description ?? "",
        },
        onSubmit: () => {
            setShowConfirm(true);
        },
    });

    const confirmUpdate = () => {
        const payload: Session = {
            id: formik.values.id,
            price: Number(formik.values.price),
            title: formik.values.title,
            startTime: new Date(formik.values.startTime).toISOString(),
            durationMinutes: Number(formik.values.durationMinutes),
            grade: Number(formik.values.grade),
            reminder: formik.values.reminder,
            description: formik.values.description,
        };
        console.log("Sending payload:", JSON.stringify(payload, null, 2));
        mutate(payload);
    };

    return {
        formik,
        showConfirm,
        setShowConfirm,
        showSuccess,
        setShowSuccess,
        confirmUpdate,
        isPending,
    };
};
