import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import ChatContent from "../Components/Message/ChatContent";
import ContactList from "../Components/Message/ContactItem";
import { ShareDataContactItems } from "../Contexts/ShareDataContactItems";
import MessagesHeader from "../Components/Message/MessagesHeader";
import EmptyTeacher from "../Components/EmptyMessage/EmptyTeacher";
import EmptyStudent from "../Components/EmptyMessage/EmptyStudent";
import { useGetChatConversation } from "../Hooks/useGetChatConversation";

const MainMessage = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const { isTeacher } = useContext(ShareDataContactItems);
  // console.log(dataContactItem)

  const { data: dataGetChatConversation } = useGetChatConversation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="MainMessage">
        {/* {dataGetChatConversation?.data?.length === 0 ? (
          isTeacher ? (
            <EmptyTeacher />
          ) : (
            <EmptyStudent />
          )
        ) : (
        )} */}

        {showSkeleton ? (
          <div className="flex justify-start items-start bg-[#F9FBFC] h-[calc(100vh-66px)]">
            <div className="left-content bg-[#F9FBFC] h-full flex flex-col w-[350px] border-r border-[#E8EAED] p-4">
              <div className="mb-6">
                <Skeleton height={50} borderRadius={8} />
              </div>
              <div className="flex flex-col gap-5">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <Skeleton circle width={50} height={50} />
                    <div className="flex-1">
                      <Skeleton height={18} width="70%" />
                      <Skeleton height={14} width="40%" className="mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="center-content flex-1 h-full flex flex-col p-6">
              <div className="mb-6">
                <Skeleton height={70} borderRadius={12} />
              </div>
              
              <div className="flex-1 flex flex-col gap-6 justify-end pb-6">
                <div className="self-start w-[45%]">
                  <Skeleton height={80} borderRadius={16} />
                </div>
                <div className="self-end w-[45%]">
                  <Skeleton height={80} borderRadius={16} />
                </div>
                <div className="self-start w-[35%]">
                  <Skeleton height={60} borderRadius={16} />
                </div>
              </div>

              <div>
                <Skeleton height={65} borderRadius={12} />
              </div>
            </div>
          </div>
        ) : (
          <div className="controlMessage flex justify-start items-start bg-[#F9FBFC]">
            <div className="left-content bg-[#F9FBFC] h-[calc(100vh-66px)] flex flex-col">
              <MessagesHeader />
              <ContactList />
            </div>

            <div className="center-content flex-1">
              <ChatContent />
            </div>
            {/* {dataGetChatConversation?.data?.length >= 1 ? (
            ) : (
              ""
            )} */}
          </div>
        )}
      </section>
    </>
  );
};

export default MainMessage;