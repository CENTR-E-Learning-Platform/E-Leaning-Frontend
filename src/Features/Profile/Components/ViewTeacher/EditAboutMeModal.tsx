import Close from "../../../../assets/icons/Close.svg";
import VideoDropBox from "./VideoDropBox";
import { useUploadIntroVideo } from "../../Hooks/useUploadIntroVideo";
import { useAddBio } from "../../Hooks/useAddBio";
import { useFormik } from "formik";
import { IntroVideoAndBioSchema } from "../../Validation/BioAndVideoSchema";
import { useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../../Utils/Apis";

export default function EditAboutMeModal({
  isOpen,
  onClose,
  initialBio = "",
  initialVideoPath = "",
}: {
  isOpen: boolean;
  onClose: () => void;
  initialBio?: string;
  initialVideoPath?: string;
}) {
  const { mutateAsync: uploadIntroVideoMutate } = useUploadIntroVideo();
  const { mutateAsync: addBioMutate } = useAddBio();
  const queryClient = useQueryClient();

  const currentBio = initialBio;
  const introVideoPath = initialVideoPath;
  const hasVideo = introVideoPath && introVideoPath !== BASE_URL;

  const formik = useFormik({
    initialValues: {
      bio: currentBio,
      video: null,
    },
    enableReinitialize: true,
    validationSchema: IntroVideoAndBioSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,

    onSubmit: async (values) => {
      const { bio, video } = values;
      console.log("Submitted", values);

      if (video) {
        await uploadIntroVideoMutate(video as File);
      }

      if (bio.trim() !== currentBio.trim() || bio === "") {
        await addBioMutate(bio.trim());
      }

      await queryClient.invalidateQueries({ queryKey: ["teacherProfile"] });
      resetAndClose();
    },
  });

  const resetAndClose = () => {
    formik.resetForm();
    onClose();
  };

  if (!isOpen) return null;
  return (
    <>
      <section className="EditAboutMeModal-section">
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={onClose}
        >
          <div
            className="bg-[#F9FBFC] max-h-[90vh] w-full max-w-[540px] mx-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 pt-6 pb-2">
              <h2 className="text-[28px] font-semibold text-[#2A2D34]">
                Edit about me
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 cursor-pointer hover:text-gray-700 transition-colors"
              >
                <img src={Close} alt="Close" />
              </button>
            </div>

            <form onSubmit={formik.handleSubmit} className="px-6 pb-6">
              <h3 className="font-semibold text-[24px] text-[#2A2D34] mt-4 mb-1">
                Upload an introduction
              </h3>

              <p className="text-[16px] font-semibold text-[#6D7588] mb-4">
                For best results, video uploads should be at least 1080p (1920 x
                1080 pixels) in MP4 format.
              </p>

              {hasVideo && !formik.values.video && (
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
                  <span className="text-sm text-blue-700 font-medium">You already have an intro video uploaded.</span>
                  <a href={(introVideoPath.startsWith('http') ? introVideoPath : `${BASE_URL}${introVideoPath}`) + (introVideoPath.includes('?') ? '&' : '?') + `t=${new Date().getTime()}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">View current</a>
                </div>
              )}
      
              <VideoDropBox
                onFileSelect={async (file) => {
                  await formik.setFieldValue("video", file);
                  await formik.validateForm();
                }}
              />

              {formik.touched.video && formik.errors.video && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.video as string}
                </p>
              )}

              <h3 className="font-bold text-[#2A2D34] text-[24px] mb-1">
                Profile overview
              </h3>

              <p className="text-[16px] font-medium text-[#6D7588] mb-3">
                Use this space to show students you have the skills and
                experience they're looking for.
              </p>

              <ul className="text-[16px] text-[#6D7588] list-disc list-inside mb-4">
                <li>Describe your strengths and skills</li>
                <li>Highlight projects, accomplishments and education</li>
                <li>Keep it short and make sure it's error-free</li>
              </ul>

              <label className="text-[16px] font-normal text-[#2A2D34] mb-1 block">
                Profile overview
              </label>

              <textarea
                name="bio"
                value={formik.values.bio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={5}
                className="w-full bg-white border-2 border-[#D1D5DB] rounded-lg py-3 pr-[46px] pl-[16px] text-sm text-[#6D7588] resize-none focus:outline-none"
                placeholder={`Example: Hi, I'm [Name]. I help students master Pure Math without the headache.\n\nI specialize in turning "blurry" concepts into clear results. Whether it's Calculus or Algebra, my lessons are tailored to your specific goals.\n\nWhy work with me? ✅ 15+ years of professional teaching ✅ Focus...`}
              />

              {formik.touched.bio && formik.errors.bio && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.bio}</p>
              )}

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-5 py-2 bg-white rounded-lg cursor-pointer border-2 border-[#525FE1] text-[16px] font-semibold text-[#525FE1] hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formik.values.bio.trim() === currentBio.trim() && !formik.values.video}
                  className="px-5 py-2 rounded-lg bg-[#525FE1] cursor-pointer text-white text-sm font-semibold hover:bg-[#3f4bc4] transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
