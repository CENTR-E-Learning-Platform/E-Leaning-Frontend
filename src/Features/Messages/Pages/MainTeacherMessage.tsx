import ChatContent from "../Components/Message/ChatContent";
import ContactList from "../Components/Message/ContactItem";
import MessagesHeader from "../Components/Message/MessagesHeader";

const MainTeacherMessage = () => {
  return (
    <>
      <section className="MainTeacherMessage">
        <div className="controlTeacherMessage flex justify-start items-start bg-[#F9FBFC]">
          <div className="left-content bg-[#F9FBFC] h-[calc(100vh-66px)] flex flex-col">
            <MessagesHeader />
            <ContactList />
          </div>

          <div className="center-content">
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
