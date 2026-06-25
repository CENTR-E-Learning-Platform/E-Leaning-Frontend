import bg_TeacherMath from "../../../../../src/assets/images/bg_TeacherMath.png";
import UnSubscribtion from "../../../../../src/assets/icons/UnSubscribtion.svg";
import SubscribtionIcon from "../../../../../src/assets/icons/Subscribtion.svg";
import MessageIcon from "../../../../../src/assets/icons/MessageIcon.svg";
import ShareIcon from "../../../../../src/assets/icons/ShareIcon.svg";
import bg_imptyPhoto from "../../../../../src/assets/images/imptyPhoto.jpg";
import { BASE_URL } from "../../../Streaming/Utils/Apis";
import { useStudentProfileContext } from "../../Contexts/StudentProfileContext";
import { useAddSubscription } from "../../Hooks/useAddsubscription";
import { useAddUnsubscription } from "../../Hooks/useAddUnsubscription";

const ProfileHeader = () => {
  const { teacherProfile , isLoading , fetchTeacherProfile } =
    useStudentProfileContext();
  const { mutate: addSubscription } = useAddSubscription();
  const { mutate: addUnsubscription } = useAddUnsubscription();
  const fullProfilePicture = teacherProfile?.profilePicturePath
    ? teacherProfile.profilePicturePath === BASE_URL
      ? bg_imptyPhoto
      : `${teacherProfile.profilePicturePath}`
    : bg_imptyPhoto;

  const handleFavoriteClick = () => {
    const teacherId = teacherProfile?.teacherId;
    if (!teacherId) return;
    const subscribed = teacherProfile?.status === 1;

    if (subscribed) {
      addUnsubscription(teacherId, {
        onSuccess: () => {
          fetchTeacherProfile();
        },
      });
    } else {
      addSubscription(teacherId, {
        onSuccess: () => {
          fetchTeacherProfile();
        },
      });
    }
  };

  const subject = teacherProfile?.subjects?.join(" , ") ?? "—";

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
              <img
                className="w-[144px] object-cover h-[144px] absolute bottom-[-85px] rounded-full border-2 border-[#D1D5DB]"
                src={fullProfilePicture}
                alt="Teacher Profile Image"
              />
              <div className="text-xl absolute top-[15px] left-[160px] font-bold">
                <h2 className="text-[28px] mb-4 leading-[13px] tracking-[0] font-bold">
                  {isLoading ? "Loading..." : (teacherProfile?.fullName ?? "—")}
                </h2>
                <p className="inline-block bg-[#FFDEDE] px-[10px] py-[8px] rounded-[18px] font-semibold text-[18px] text-[#611D1D]">
                  {subject}
                </p>
              </div>
            </div>

            <div className="flex gap-4 absolute top-[15px] right-[-5px] justify-center items-center">
              {teacherProfile?.status === 1 ? (
                <img
                  className="cursor-pointer"
                  onClick={handleFavoriteClick}
                  src={SubscribtionIcon}
                  alt="Subscribed"
                />
              ) : (
                <img
                  className="cursor-pointer"
                  onClick={handleFavoriteClick}
                  src={UnSubscribtion}
                  alt="UnSubscribed"
                />
              )}

              <div className="p-3 border-2 border-[#525FE1] flex justify-center items-center gap-2 rounded-[8px]">
                <img src={MessageIcon} alt="Message Icon" />
                <span className="font-medium text-[16px] text-[#525FE1]">
                  Message
                </span>
              </div>
              <div className="p-3 border-2 border-[#525FE1] flex justify-center items-center gap-2 rounded-[8px]">
                <img src={ShareIcon} alt="Share Icon" />
                <span className="font-medium text-[16px] text-[#525FE1]">
                  Share
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden px-4">
          <div className="flex items-center gap-3 -mt-8">
            <img
              className="w-[90px] h-[90px] rounded-full border-2 border-[#D1D5DB] flex-shrink-0"
              src={fullProfilePicture}
              alt="Teacher Profile Image"
            />
            <div className="mt-4">
              <h2 className="text-[20px] font-bold leading-snug">
                {isLoading ? "Loading..." : (teacherProfile?.fullName ?? "—")}
              </h2>
              <div className="mt-2 inline-flex justify-center items-center bg-[#FFDEDE] px-[10px] py-[4px] rounded-[18px]">
                <p className="font-semibold text-[14px] text-[#611D1D]">
                  {subject}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4 pb-4">
            {teacherProfile?.status === 1 ? (
              <img
                className="cursor-pointer"
                onClick={handleFavoriteClick}
                src={SubscribtionIcon}
                alt="Subscribed"
              />
            ) : (
              <img
                className="cursor-pointer"
                onClick={handleFavoriteClick}
                src={UnSubscribtion}
                alt="UnSubscribed"
              />
            )}

            <div className="p-2 border-2 border-[#525FE1] flex justify-center items-center gap-2 rounded-[8px]">
              <img src={MessageIcon} alt="Message Icon" />
              <span className="font-medium text-[14px] text-[#525FE1]">
                Message
              </span>
            </div>
            <div className="p-2 border-2 border-[#525FE1] flex justify-center items-center gap-2 rounded-[8px]">
              <img src={ShareIcon} alt="Share Icon" />
              <span className="font-medium text-[14px] text-[#525FE1]">
                Share
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
