import Close from "../../../../assets/icons/Close.svg";
import bg_imptyPhoto from "../../../../../src/assets/images/imptyPhoto.jpg";
import DeleteCurrentImage from "../../../../assets/icons/DeleteCurrentImage.svg";
import { useUploadImage } from "../../Hooks/useUploadImage";
import { useState } from "react";
import { useDeleteFile } from "../../Hooks/useDeleteFile";




const EditPhotoModal = ({
  isOpen,
  onClose,
  previewImage,
  setPreviewImage,
  refetch
}: {
  isOpen: boolean;
  onClose: () => void;
  previewImage: string;
  setPreviewImage: React.Dispatch<React.SetStateAction<string>>;
  refetch: () => void;
}) => {


  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { mutate } = useUploadImage();
  const { mutate: deleteMutate } = useDeleteFile();

  
  const handleDeleteImage = ()=>{
    setPreviewImage(bg_imptyPhoto);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
  };
  
  const saveChange = () => {

    if(previewImage === bg_imptyPhoto) {
      deleteMutate(0, {
        onSuccess: () => {
          setPreviewImage(bg_imptyPhoto);
          refetch();
        },
        onError: () => {
          console.error("Failed to delete image");
        },
      });
    } else if (previewImage !== bg_imptyPhoto) {
    
    if (!selectedFile) return;
    mutate(selectedFile, {
      onSuccess: () => {
        onClose();
      },
      onError: () => {
        setPreviewImage(bg_imptyPhoto);
      },
    })};

    onClose();
  };

  if (!isOpen) return null;

  const close = () => {
    onClose();
    refetch();  
  };

  return (
    <>
      <section className="EditPhotoModal-section">
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={close}
        >
          <div
            className="bg-white max-h-[90vh] w-full max-w-[594px] mx-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 pt-6 pb-2">
              <h2 className="text-[28px] font-semibold text-[#2A2D34]">
                Edit photo
              </h2>
              <button
                onClick={close}
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <img src={Close} alt="Close" />
              </button>
            </div>

            <div className="px-6 pb-6">
              <div className="flex flex-col items-center gap-6 mb-6">
                <img className="w-[160px] h-[160px] rounded-full" src={previewImage ?? bg_imptyPhoto} alt="Empty profile photo" />
                <button onClick={handleDeleteImage} className="text-[16px] cursor-pointer border-2 p-4 rounded-[8px] border-[#525FE1] flex justify-center items-center gap-1 text-[#525FE1] hover:text-[#3f4bc4] transition-colors">
                  <img src={DeleteCurrentImage} alt="Delete current image" />
                  <p className="w-[171px] font-medium">
                    Delete current image
                  </p>
                </button>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-[439px]">
                  <p className="text-[16px] mb-8 font-medium text-[#6D7588]">
                    <span className="font-semibold">Must be an actual photo of you.</span> Logos, clip-art, group photos, and digitally-altered images are not allowed.
                  </p>
                  
                  <div className="flex justify-center items-center gap-3">
                    <button onClick={() => document.getElementById("fileInput")?.click()} className="text-[16px] cursor-pointer border-2 py-2 px-4 rounded-[8px] border-[#525FE1] flex justify-center items-center gap-1 text-[#525FE1] hover:text-[#3f4bc4] transition-colors">
                      Change image
                    </button>
                    <button onClick={saveChange} className="text-[16px] cursor-pointer border-2 py-2 px-4 rounded-[8px] border-[#525FE1] bg-[#525FE1] flex justify-center hover:bg-[#3f4bc4] items-center gap-1 text-white hover:text-white transition-colors">
                      save photo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </section>
    </>
  );
};

export default EditPhotoModal;
