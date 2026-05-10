import { useContext } from "react";
import ChatContent from "../Components/Message/ChatContent";
import ContactList from "../Components/Message/ContactItem";
import { ShareDataContactItems } from "../Contexts/ShareDataContactItems";
import MessagesHeader from "../Components/Message/MessagesHeader";
import EmptyTeacher from "../Components/EmptyMessage/EmptyTeacher";
import EmptyStudent from "../Components/EmptyMessage/EmptyStudent";
import { useGetChatConversation } from "../Hooks/useGetChatConversation";
const MainMessage = () => {
  const { isTeacher } = useContext(ShareDataContactItems);
  // console.log(dataContactItem)

  const { data : dataGetChatConversation } = useGetChatConversation();
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
          <div></div>
        )} */}
        <div className="controlMessage flex justify-start items-start bg-[#F9FBFC]">
            <div className="left-content bg-[#F9FBFC] h-[calc(100vh-66px)] flex flex-col">
              <MessagesHeader />
              <ContactList />
            </div>

            {/* {dataGetChatConversation?.data?.length >= 1 ? (
             
            ) : (
              ""
            )} */}
 <div className="center-content">
                <ChatContent />
              </div>
            <div className="right-content"></div>
          </div>
      </section>
    </>
  );
};

export default MainMessage;
