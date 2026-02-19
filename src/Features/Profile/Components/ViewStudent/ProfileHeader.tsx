import bg_TeacherMath from "../../../../../src/assets/images/bg_TeacherMath.png";
import bg_Teacher from "../../../../../src/assets/images/bg_Teacher.jpg";
import heartIcon from "../../../../../src/assets/icons/heartIcon.svg";
import MessageIcon from "../../../../../src/assets/icons/MessageIcon.svg";
import ShareIcon from "../../../../../src/assets/icons/ShareIcon.svg";
import { useTeacherProfile } from "../../Hooks/useTeacherProfile";
import bg_imptyPhoto from "../../../../../src/assets/images/imptyPhoto.jpg";
const ProfileHeader = () => {
  const {data} = useTeacherProfile();

  // console.log(data);

  
  return <>
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
                src={data?.data.fullPrfilePicturePath || bg_imptyPhoto}
                alt="Teacher Profile Image"
              />
              <div className="text-xl absolute top-[15px] left-[160px] font-bold">
                <h2 className="text-[28px] mb-4 leading-[13px] tracking-[0] font-bold">
                  {data?.data.fullName}
                </h2>
                <div className="h-[29px] w-[191px] flex justify-center items-center bg-[#FFDEDE] px-[10px] py-[8px] rounded-[18px]">
                  <p className="font-semibold text-[18px] text-[#611D1D]">
                    Pure mathematics
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 absolute top-[15px] right-[-5px] justify-center items-center">
              <img
                className="p-4 border-2 border-[#525FE1] rounded-[8px]"
                src={heartIcon}
                alt="Heart Icon"
              />
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
              src={bg_Teacher}
              alt="Teacher Profile Image"
            />
            <div className="mt-4">
              <h2 className="text-[20px] font-bold leading-snug">
                {data?.data.fullName}
              </h2>
              <div className="mt-2 inline-flex justify-center items-center bg-[#FFDEDE] px-[10px] py-[4px] rounded-[18px]">
                <p className="font-semibold text-[14px] text-[#611D1D]">
                  Pure mathematics
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4 pb-4">
            <img
              className="p-3 border-2 border-[#525FE1] rounded-[8px]"
              src={heartIcon}
              alt="Heart Icon"
            />
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
}

export default ProfileHeader