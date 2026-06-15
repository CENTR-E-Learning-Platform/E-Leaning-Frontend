import bg_TeacherMath from "../../../../../src/assets/images/bg_TeacherMath.png";
import bg_imptyPhoto from "../../../../../src/assets/images/imptyPhoto.jpg";
import PlusIcon from "../../../../../src/assets/icons/PlusIcon.svg";
import editIcon from "../../../../../src/assets/icons/editIcon.svg";
import { useEffect, useState } from "react";
import ProfileCompletion from "./ProfileCompletion";
import { useTeacherProfile } from "../../Hooks/useTeacherProfile";
import EditPhotoModal from "./EditPhotoModal";
import EditNameModal from "./EditNameModal";
import { BASE_URL } from "../../Utils/Apis";
import EditSubjectModal from "./EditSubjectModal";
import { roleToAuth } from "../../../../Utils/Constant";

const ProfileHeader = () => {
  const { data, refetch } = useTeacherProfile();
  const [previewImage, setPreviewImage] = useState(bg_imptyPhoto);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditSubjectOpen, setIsEditSubjectOpen] = useState(false);
  const [isEditNameOpen, setIsEditNameOpen] = useState(false);
  const isTeacher = roleToAuth?.includes("Teacher") ? true : false;

  console.log(data);
  useEffect(() => {
    const path = data?.data?.data.profilePicturePath;
    console.log("Path", path);
    if (!path) return;
    if (path === BASE_URL) {
      setPreviewImage(bg_imptyPhoto);
      return;
    }
    setPreviewImage(path + "?t=" + Date.now());
  }, [data]);

  useEffect(() => {
    return () => {
      if (previewImage && previewImage.startsWith("blob:")) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  return (
    <>
      <section className="ProfileHeader">
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
                  className="w-[144px] h-[144px] absolute bottom-[-85px] rounded-full object-cover"
                  src={previewImage ?? bg_imptyPhoto}
                  alt="Teacher Profile Image"
                />
                {isTeacher && (
                  <img
                    onClick={() => setIsModalOpen(true)}
                    className="absolute bg-[#F9FBFC] w-9 h-9 -bottom-[80px] z-50 cursor-pointer left-26 p-2.5  border-2 border-[#525FE1] rounded-full"
                    src={PlusIcon}
                    alt="PlusIcon"
                  />
                )}
              </div>
              <div className="text-xl absolute top-[15px] left-[160px] font-bold">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-[28px] leading-[13px] tracking-[0] font-bold">
                    {data?.data?.data.fullName}
                  </h2>

                  {isTeacher && (
                    <div
                      onClick={() => {
                        setIsEditNameOpen(true);
                      }}
                      className="flex justify-center items-center cursor-pointer w-9 h-9 border-2 border-[#525FE1] rounded-full"
                    >
                      <img src={editIcon} alt="edit" />
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <p className="inline-block bg-[#FFDEDE] px-[10px] py-[8px] rounded-[18px] font-semibold text-[18px] text-[#611D1D]">
                    {data?.data?.data.subjects?.join(" , ")}
                  </p>

                  {isTeacher && (
                    <div
                      onClick={() => setIsEditSubjectOpen(true)}
                      className="flex justify-center items-center cursor-pointer w-9 h-9 border-2 border-[#525FE1] rounded-full bg-white"
                    >
                      <img src={editIcon} alt="edit" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button className="flex cursor-pointer gap-4 absolute top-[15px] right-[-5px] justify-center items-center">
              <div className="p-3 border-2 border-[#525FE1] flex justify-center items-center gap-2 rounded-[8px]">
                <span className="font-medium text-[16px] text-[#525FE1]">
                  See public view
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="px-60 mt-30">
          <ProfileCompletion />
        </div>

        {/* Responsive design  */}

        <div className="block md:hidden px-4">
          <div className="flex items-center gap-3 -mt-8">
            <div className="Adding-Teacher-Profile-Image">
              <img
                className="w-[90px] h-[90px] rounded-full border-2 border-[#D1D5DB] flex-shrink-0"
                src={previewImage || bg_imptyPhoto}
                alt="Teacher Profile Image"
              />
              {isTeacher && (
                <img
                  onClick={() => setIsModalOpen(true)}
                  className="absolute bg-[#F9FBFC] w-9 h-9 -bottom-[80px] z-50 cursor-pointer left-26 p-2.5  border-2 border-[#525FE1] rounded-full"
                  src={PlusIcon}
                  alt="PlusIcon"
                />
              )}
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <h2 className="text-[20px] font-bold leading-snug">
                  {data?.data.data?.fullName}
                </h2>

                {isTeacher && (
                  <div
                    onClick={() => {
                      setIsEditNameOpen(true);
                    }}
                    className="flex justify-center items-center w-8 h-8 border-2 border-[#525FE1] rounded-full cursor-pointer bg-white"
                  >
                    <img src={editIcon} alt="edit" className="w-4" />
                  </div>
                )}
              </div>

              <div className="relative mt-2 inline-flex justify-center items-center bg-[#FFDEDE] px-[10px] py-[4px] rounded-[18px] pr-10">
                <p className="font-semibold text-[14px] text-[#611D1D]">
                  {data?.data?.data.subjects
                    ?.map((subject: string) => subject)
                    .join(", ")}
                </p>

                {isTeacher && (
                  <div className="absolute right-[-10px] top-[-6px] flex justify-center items-center w-8 h-8 border-2 border-[#525FE1] rounded-full cursor-pointer bg-white">
                    <img src={editIcon} alt="edit" className="w-4" />
                  </div>
                )}
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

        <EditPhotoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          previewImage={previewImage}
          setPreviewImage={setPreviewImage}
          refetch={refetch}
        />

        <EditSubjectModal
          isOpen={isEditSubjectOpen}
          oldSubject={data?.data?.data.subjects?.[0] || ""}
          refetch={refetch}
          onClose={() => setIsEditSubjectOpen(false)}
        />

        <EditNameModal
          isOpen={isEditNameOpen}
          oldName={data?.data?.data.fullName || ""}
          onClose={() => setIsEditNameOpen(false)}
        />
      </section>
    </>
  );
};

export default ProfileHeader;
