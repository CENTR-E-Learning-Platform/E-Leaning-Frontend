import * as Yup from "yup";

export const IntroVideoAndBioSchema = Yup.object({
  bio: Yup.string().required("Profile overview is required"),
  video: Yup.mixed()
  .required("Video is required")
  .test(
    "fileSize",
    "Video size must not exceed 30 MB",
    (value) => {
      if (!value) return false;
      return (value as File).size <= 30 * 1024 * 1024;
    }
  ),
});
