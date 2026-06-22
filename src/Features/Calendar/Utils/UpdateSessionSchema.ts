import * as Yup from "yup";

export const UpdateSessionSchema = Yup.object({
    title: Yup.string()
        .required("Title is required")
        .min(2, "Title must be at least 2 characters"),

    startTime: Yup.string()
        .required("Start date is required"),

    durationMinutes: Yup.number()
        .typeError("Duration must be a number")
        .required("Duration is required")
        .min(15, "Minimum duration is 15 minutes")
        .max(480, "Maximum duration is 480 minutes"),

    grade: Yup.number()
        .required("Grade is required"),

    price: Yup.number()
        .typeError("Price must be a number")
        .required("Price is required")
        .min(0, "Price cannot be negative"),

    reminder: Yup.string()
        .required("Reminder is required"),

    description: Yup.string()
        .required("Description is required")
        .min(5, "Description must be at least 5 characters"),
});
