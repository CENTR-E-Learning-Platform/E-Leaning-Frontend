import { useRef, useState } from "react";
import VedioIntro from "../../../../assets/images/VedioIntro.jpg"

type VideoDropBoxProps = {
  onFileSelect: (file: File) => void;
};

export default function VideoDropBox({ onFileSelect }: VideoDropBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  

  const handleFile = (file: File) => {
    if (!file.type.startsWith("video/")) {
      alert("Upload video only");
      return;
    }
    onFileSelect(file); 
    setVideoFile(file);
  };

  return (
    <div
      className="border-2 bg-white border-dashed border-gray-200 rounded-xl flex flex-col items-center py-8 px-4 mb-6"
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
      }}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-3">
        <img className="rounded-[14px]" src={VedioIntro} alt="VedioIntro" />
      </div>

      <p className="font-semibold text-[#2A2D34] text-[16px] mb-1">
        Drag and drop video file to upload
      </p>

      <p className="text-[16px] text-[#6D7588] mb-4 text-center">
        Your video will be private until you publish your profile.
      </p>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="border-2 border-[#525FE1] duration-500 flex justify-center items-center text-[#525FE1] h-[43px] text-[16px] font-semibold px-4 py-4 rounded-[8px] hover:bg-[#525FE1] hover:text-white transition-colors"
      >
        Select files
      </button>


      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      {videoFile && (
        <p className="mt-2 text-sm text-[#525FE1] font-semibold">
          {videoFile.name}
        </p>
      )}
    </div>
  );
}