import type { Teacher } from "../../Types/type";
import ButtomReserveSession from "./ButtomReserveSession";
import SelectTime from "./SelectTime";
import UnSubscribtion from "../../../../../src/assets/icons/UnSubscribtion.svg";
import SubscribtionIcon from "../../../../../src/assets/icons/Subscribtion.svg";
import { useAddSubscription } from "../../../Profile/Hooks/useAddsubscription";
import { useAddUnsubscription } from "../../../Profile/Hooks/useAddUnsubscription";
import { useQueryClient } from "@tanstack/react-query";
import { useStudentProfileContext } from "../../../Profile/Contexts/StudentProfileContext";
function LeftTeacherSide({ teacher }: { teacher: Teacher }) {
  const queryClient = useQueryClient();
  const { mutate: addSubscription } = useAddSubscription();
  const { mutate: addUnsubscription } = useAddUnsubscription();
  const { fetchTeacherProfile } = useStudentProfileContext();

  const handleFavoriteClick = () => {
    const teacherId = teacher?.teacherId;
    if (!teacherId) return;

    const subscribed = teacher?.status === 1;

    if (subscribed) {
      addUnsubscription(teacherId, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["allTeachers"],
          });

          queryClient.invalidateQueries({
            queryKey: ["search"],
          });

          queryClient.invalidateQueries({
            queryKey: ["filter"],
          });
          fetchTeacherProfile();
        },
      });
    } else {
      addSubscription(teacherId, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["allTeachers"],
          });

          queryClient.invalidateQueries({
            queryKey: ["search"],
          });

          queryClient.invalidateQueries({
            queryKey: ["filter"],
          });
          fetchTeacherProfile();
        },
      });
    }
  };
  return (
    <>
      <section className="LeftTeacher w-[285px] h-[239px]">
        <div className="w-[285px] mb-6 flex justify-between items-start">
          <div className="w-[124px] flex justify-center items-start gap-2">
            <img
              src="../../../../../src/assets/icons/MoneyIcon.svg"
              alt="MoneyIcon"
              className="w-[22px] mt-2 h-[22px]"
            />
            <div>
              <p className="font-bold text-[#525FE1] text-[22px]">
                EGP {teacher.closesetSessionPrice}
              </p>
              <p className="font-medium text-[13px] text-[#2A2D34]">
                per session
              </p>
            </div>
          </div>
          <div className="heartImage">
            {teacher?.status === 1 ? (
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
          </div>
        </div>

        <SelectTime />
        <ButtomReserveSession teacher={teacher} />
      </section>
    </>
  );
}

export default LeftTeacherSide;
