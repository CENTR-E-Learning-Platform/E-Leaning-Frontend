import * as Yup from "yup";

export const IntroVideoAndBioSchema = Yup.object({
  bio: Yup.string(),
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
