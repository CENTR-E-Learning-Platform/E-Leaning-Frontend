import attend from "../../../../assets/icons/attend.svg";
import menu from "../../../../assets/icons/menu.svg";
import { useParticipant } from "../../Hooks/useParticipant";
import { BASE_URL } from "../../Utils/Apis";

const Attend = ({ click }: any) => {
  const participants = useParticipant();

  return (
    <>
      {!click && (
        <div className="h-[48px] bg-[#393D44] rounded-[43px] flex items-center p-[4px] cursor-pointer">
          <div className="flex justify-center">
            {participants.tracks.slice(0, 3).map((track: any, index: number) => (
              <img
                key={index}
                src={`${BASE_URL}/${track.participant.attributes["UserImage"]}`}
                className="w-[40px] h-[39px] rounded-full -ml-2 first:ml-0 border-[1px] border-[#F9FBFC] object-cover"
                alt=""
              />
            ))}
          </div>
          {participants.tracks.length > 3 && (
            <h1 className="text-[16px] text-[#F9FBFC] ms-[8px]">
              + {participants.tracks.length - 3}
            </h1>
          )}
        </div>
      )}
      {click && (
        <div className="w-[228px] h-[48px] bg-[#393D44] rounded-[43px] flex items-center p-[4px] cursor-pointer justify-between ">
          <div className="flex items-center">
            <img
              src={attend}
              className="w-[19px] h-[16px] me-[13px] ms-[10px] "
              alt=""
            />
            <h1 className="text-[16px] text-[#F9FBFC] me-[13px]">
              Participants ({participants.tracks.length})
            </h1>
          </div>
          <img
            src={menu}
            className="w-[4px] h-[17px] me-[13px] ms-[10px] "
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default Attend;