import * as Yup from "yup";

export const ClassFormShema = Yup.object({
    Title: Yup.string()
    .required("Title must be Required")
    .min(3, "Name at least 3 characters")
    .max(100, "Name at most 100 characters"),

    StartTime:Yup.date()
    .required("Start time is required")
    .test(
        "Date and time cannot be in the past",
        function(value){
            if(!value) return false;

            const time = new Date();
            return value >= time;
        }
    ),
    DurationMinutes: Yup.number()
    .required("Duration must be Required")
    .min(60 , "Duration at least 60 minutes")
    .max(300 , "Duration at most 300 minutes"),

    Price: Yup.number()
    .required("Price must be required")
    .min(20 , "price at least 20 LE")
    .max(500 , "price at most 500 LE")

    

})