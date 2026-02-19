import bg_TeacherMath from "../../../../../src/assets/images/bg_TeacherMath.png";
import bg_imptyPhoto from "../../../../../src/assets/images/imptyPhoto.jpg";
import PlusIcon from "../../../../../src/assets/icons/PlusIcon.svg";
import { useUploadImage } from "../../Hooks/useUploadImage";
import { useState } from "react";
const ProfileHeader = () => {


  const [previewImage, setPreviewImage] = useState(bg_imptyPhoto);
  const { mutate } = useUploadImage();
  

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreviewImage(URL.createObjectURL(file));
    mutate(file, {
    onError: () => {
      setPreviewImage(bg_imptyPhoto);
    },
  });
  };

  return (
    <>
      <div className="ProfileHeader">
        <div className="introProfileTecher">
          <img
            className="w-full h-[150px] object-cover"
            src={bg_TeacherMath}
            alt="Background for Teacher Profile"
          />
        </div>

        <div className="hidden md:block contentProfileTecher px-60">
          <div className="flex relative justify-between items-center">
            <div className="flex justify-between gap-4">
              <div className="Adding-Teacher-Profile-Image">
                <img
                  className="w-[144px] h-[144px] absolute bottom-[-85px] rounded-full "
                  src={previewImage || bg_imptyPhoto}
                  alt="Teacher Profile Image"
                />
                <img
                  onClick={() => document.getElementById("fileInput")?.click()}
                  className="absolute bg-[#F9FBFC] w-9 h-9 -bottom-[80px] z-50 cursor-pointer left-26 p-2.5  border-2 border-[#525FE1] rounded-full"
                  src={PlusIcon}
                  alt="PlusIcon"
                />
              </div>
              <div className="text-xl absolute top-[15px] left-[160px] font-bold">
                <h2 className="text-[28px] mb-4 leading-[13px] tracking-[0] font-bold">
                  Mr. Mohamed Salama
                </h2>
                <div className="h-[29px] w-[191px] flex justify-center items-center bg-[#FFDEDE] px-[10px] py-[8px] rounded-[18px]">
                  <p className="font-semibold text-[18px] text-[#611D1D]">
                    Pure mathematics
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 absolute top-[15px] right-[-5px] justify-center items-center">
              <div className="p-3 border-2 border-[#525FE1] flex justify-center items-center gap-2 rounded-[8px]">
                <span className="font-medium text-[16px] text-[#525FE1]">
                  See public view
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden px-4">
          <div className="flex items-center gap-3 -mt-8">
            <img
              className="w-[90px] h-[90px] rounded-full border-2 border-[#D1D5DB] flex-shrink-0"
              src={bg_imptyPhoto}
              alt="Teacher Profile Image"
            />
            <div className="mt-4">
              <h2 className="text-[20px] font-bold leading-snug">
                Mr. Mohamed Salama
              </h2>
              <div className="mt-2 inline-flex justify-center items-center bg-[#FFDEDE] px-[10px] py-[4px] rounded-[18px]">
                <p className="font-semibold text-[14px] text-[#611D1D]">
                  Pure mathematics
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4 pb-4">
            <div className="p-2 border-2 border-[#525FE1] flex justify-center items-center gap-2 rounded-[8px]">
              <span className="font-medium text-[14px] text-[#525FE1]">
                See public view
              </span>
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
    </>
  );
};

export default ProfileHeader;
