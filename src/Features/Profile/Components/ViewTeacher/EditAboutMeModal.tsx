import { useState } from "react";
import Close from "../../../../assets/icons/Close.svg";
import VideoDropBox from "./VideoDropBox";
import { useUploadIntroVideo } from "../../Hooks/useUploadIntroVideo";
import { useAddBio } from "../../Hooks/useAddBio";

export default function EditAboutMeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [bio, setBio] = useState<string>("");
  const { mutate : uploadIntroVideoMutate } = useUploadIntroVideo();
  const { mutate: addBioMutate } = useAddBio();
  const handleAnyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };
  const SaveChange = () => {

    if (!videoFile && !bio.trim()) {
      return;
    }

    if (videoFile) {
      uploadIntroVideoMutate(videoFile);
    }

    if (bio.trim()){
      console.log(`true`)
      addBioMutate(bio);
    }

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
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <img src={Close} alt="Close" />
              </button>
            </div>

            <div className="px-6 pb-6">
              <h3 className="font-semibold text-[24px] text-[#2A2D34] mt-4 mb-1">
                Upload an introduction
              </h3>

              <p className="text-[16px] font-semibold text-[#6D7588] mb-4">
                For best results, video uploads should be at least 1080p (1920 x
                1080 pixels) in MP4 format.
              </p>

              <VideoDropBox onFileSelect={setVideoFile} />

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
              onChange={handleAnyChange}
                className="w-full bg-white border-2 border-[#D1D5DB] rounded-lg py-3 pr-[46px] pl-[16px] text-sm text-[#6D7588] resize-none focus:outline-none"
                rows={5}
                placeholder={`Example: Hi, I'm [Name]. I help students master Pure Math without the headache.\n\nI specialize in turning "blurry" concepts into clear results. Whether it's Calculus or Algebra, my lessons are tailored to your specific goals.\n\nWhy work with me? ✅ 15+ years of professional teaching ✅ Focus...`}
              />

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-white rounded-lg border-2 border-[#525FE1] text-[16px] font-semibold text-[#525FE1] hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={SaveChange}
                  className="px-5 py-2 rounded-lg bg-[#525FE1] text-white text-sm font-semibold hover:bg-[#3f4bc4] transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
