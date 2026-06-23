import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { UpdateSession, UpdateSessionSeries } from "../Services/updateSession";
import { type Session } from "../Types/types";
import { UpdateSessionSchema } from "../Utils/UpdateSessionSchema";

export type UpdateScope = "single" | "series" | null;

export const useUpdateSession = (
    session: Session | null,
    numberOfWeeks: number = 1,
    sessionSeriesId: string = ""
) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [seriesMessage, setSeriesMessage] = useState<string | null>(null);
    const [updateScope, setUpdateScope] = useState<UpdateScope>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const isSeries = numberOfWeeks > 1;

    const { mutate: mutateSingle, isPending: isPendingSingle } = useMutation({
        mutationFn: (data: Session) => UpdateSession(data),
        onSuccess: () => {
            setShowConfirm(false);
            setShowSuccess(true);
        },
        onError: (error: any) => {
            setShowConfirm(false);
            const msg =
                error?.response?.data?.message ??
                error?.response?.data ??
                null;
            setErrorMessage(typeof msg === "string" ? msg : "There is a problem, maybe the session is reserved by a student or has timed out.");
        },
    });

    const { mutate: mutateSeries, isPending: isPendingSeries } = useMutation({
        mutationFn: (data: Session) => UpdateSessionSeries(data),
        onSuccess: (response) => {
            setShowConfirm(false);
            const msg =
                response?.data?.message ??
                response?.data ??
                null;
            setSeriesMessage(typeof msg === "string" ? msg : null);
            setShowSuccess(true);
        },
        onError: (error: any) => {
            setShowConfirm(false);
            const msg =
                error?.response?.data?.message ??
                error?.response?.data ??
                null;
            setErrorMessage(typeof msg === "string" ? msg : "There is a problem, maybe the session is reserved by a student or has timed out.");
        },
    });

    const isPending = isPendingSingle || isPendingSeries;

    const formik = useFormik<Session>({
        enableReinitialize: true,
        validationSchema: UpdateSessionSchema,
        initialValues: {
            id: session?.id ?? "",
            title: session?.title ?? "",
            startTime: session?.startTime
                ? (() => {
                    const d = new Date(session.startTime);
                    const pad = (n: number) => String(n).padStart(2, "0");
                    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
                })()
                : "",
            durationMinutes: session?.durationMinutes ?? 0,
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

    const confirmUpdate = (scope: UpdateScope) => {
        if (scope === "series") {
            const payload = {
                sessionSeriesId,
                price: Number(formik.values.price),
                title: formik.values.title,
                startTime: new Date(formik.values.startTime).toISOString(),
                durationMinutes: Number(formik.values.durationMinutes),
                grade: Number(formik.values.grade),
                reminder: formik.values.reminder,
                description: formik.values.description,
            };
            console.log("Series payload:", JSON.stringify(payload, null, 2));
            mutateSeries(payload as any);
        } else {
            const payload = {
                id: formik.values.id,
                price: Number(formik.values.price),
                title: formik.values.title,
                startTime: new Date(formik.values.startTime).toISOString(),
                durationMinutes: Number(formik.values.durationMinutes),
                grade: Number(formik.values.grade),
                reminder: formik.values.reminder,
                description: formik.values.description,
            };
            console.log("Session payload:", JSON.stringify(payload, null, 2));
            mutateSingle(payload);
        }
    };

    return {
        formik,
        showConfirm,
        setShowConfirm,
        showSuccess,
        setShowSuccess,
        confirmUpdate,
        isPending,
        isSeries,
        seriesMessage,
        updateScope,
        setUpdateScope,
        errorMessage,
        clearError: () => setErrorMessage(null),
    };
};
