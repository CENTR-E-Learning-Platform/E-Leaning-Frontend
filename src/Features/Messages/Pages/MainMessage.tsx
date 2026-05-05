import { useContext } from "react";
import ChatContent from "../Components/Message/ChatContent";
import ContactList from "../Components/Message/ContactItem";
import { ShareDataContactItems } from "../Contexts/ShareDataContactItems";
import MessagesHeader from "../Components/Message/MessagesHeader";
import EmptyTeacher from "../Components/EmptyMessage/EmptyTeacher";
import EmptyStudent from "../Components/EmptyMessage/EmptyStudent";
const MainMessage = () => {
  const { dataContactItem , isTeacher } = useContext(ShareDataContactItems);

  return (
    <>
      <section className="MainMessage">
        {dataContactItem?.length === 0 ? (
          <div className="controlMessage flex justify-start items-start bg-[#F9FBFC]">
            <div className="left-content bg-[#F9FBFC] h-[calc(100vh-66px)] flex flex-col">
              <MessagesHeader />
              <ContactList />
            </div>

            {dataContactItem?.length >= 1 ? (
              <div className="center-content">
                <ChatContent />
              </div>
            ) : (
              ""
            )}

            <div className="right-content"></div>
          </div>
        ) : isTeacher ? (
          <EmptyTeacher />
        ) : (
          <EmptyStudent />
        )}
      </section>
    </>
  );
};

export default MainMessage;
