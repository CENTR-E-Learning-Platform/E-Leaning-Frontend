import * as Yup from "yup";

export const IntroVideoAndBioSchema = Yup.object({
  bio: Yup.string().max(500 , "You can't write more than 500 characters"),
  video: Yup.mixed()
    .nullable()
    .test(
      "fileSize",
      "Video size must not exceed 30 MB",
      (value) => {
        if (!value) return true;
        return (value as File).size <= 30 * 1024 * 1024;
      }
    ),
});
