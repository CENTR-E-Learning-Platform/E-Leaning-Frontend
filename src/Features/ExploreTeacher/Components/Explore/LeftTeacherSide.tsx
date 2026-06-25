import { useStudentProfileContext } from "../../../Profile/Contexts/StudentProfileContext";

import type { Teacher } from "../../Types/type";
import ButtomReserveSession from "./ButtomReserveSession";
import SelectTime from "./SelectTime";
import UnSubscribtion from "../../../../../src/assets/icons/UnSubscribtion.svg";
import SubscribtionIcon from "../../../../../src/assets/icons/Subscribtion.svg";
import { useAddSubscription } from "../../../Profile/Hooks/useAddsubscription";
import { useAddUnsubscription } from "../../../Profile/Hooks/useAddUnsubscription";

function LeftTeacherSide({ teacher }: { teacher: Teacher }) {
  const { fetchTeacherProfile } = useStudentProfileContext();

  const { mutate: addSubscription } = useAddSubscription();
  const { mutate: addUnsubscription } = useAddUnsubscription();
  const handleFavoriteClick = () => {
    const teacherId = teacher?.teacherId;
    console.log("clicked");

    console.log("teacherId:", teacherId);

    if (!teacherId) return;

    console.log("teacher.status", teacher?.status);
    
    const subscribed = teacher?.status === 1;
    console.log("subscribed:", subscribed);

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
