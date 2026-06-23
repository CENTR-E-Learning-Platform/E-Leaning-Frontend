import * as Yup from "yup";

export const UpdateSessionSchema = Yup.object({
    title: Yup.string()
        .required("Title is required")
        .min(3, "Title must be at least 3 characters")
        .max(100, "Title must be at most 100 characters"),

    startTime: Yup.date()
        .required("Start date is required")
        .test("not-in-past", "Date and time cannot be in the past", (value) => {
            if (!value) return false;
            return new Date(value) >= new Date();
        }),

    durationMinutes: Yup.number()
        .typeError("Duration must be a number")
        .required("Duration is required")
        .min(60, "Minimum duration is 60 minutes")
        .max(300, "Maximum duration is 300 minutes"),

    grade: Yup.number()
        .required("Grade is required"),

    price: Yup.number()
        .typeError("Price must be a number")
        .required("Price is required")
        .min(20, "Price must be at least 20 LE")
        .max(500, "Price must be at most 500 LE"),

    reminder: Yup.string()
        .required("Reminder is required"),

    description: Yup.string()
        .optional(),
});
