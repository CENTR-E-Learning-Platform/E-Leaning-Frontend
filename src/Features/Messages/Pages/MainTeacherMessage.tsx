import ChatContent from "../Components/TeacherMessage/ChatContent";
import ChatHeader from "../Components/TeacherMessage/ChatHeader";
import ContactList from "../Components/TeacherMessage/ContactItem";
import MessagesHeader from "../Components/TeacherMessage/MessagesHeader";

const MainTeacherMessage = () => {
  return (
    <>
      <section className="MainTeacherMessage">
        <div className="controlTeacherMessage flex justify-start items-start bg-[#F9FBFC]">
          <div className="left-content bg-[#F9FBFC] h-screen flex flex-col">
            <MessagesHeader />
            <ContactList />
          </div>

          <div className="center-content">
            <ChatHeader/>
            <ChatContent/>
          </div>

          <div className="right-content">
            
          </div>
        </div>
      </section>
    </>
  );
};

export default MainTeacherMessage;
