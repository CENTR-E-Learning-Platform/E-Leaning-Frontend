import { useGetChatConversation } from "../../Hooks/useGetChatConversation"
import useSignalR from "../../Hooks/useSignalR"
import { BASE_URL } from "../../Utils/Api"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import DateDivider from "./DateDivider"

import StudentMessage from "./StudentMessage"
import { TeacherFileMessage } from "./TeacherFileMessage"
import { TeacherTextMessage } from "./TeacherTextMessage"

const ChatContent = () => {
  const token = `${localStorage.getItem("token")}`;
  const { refetch } = useGetChatConversation();
  const signalR = useSignalR(token, BASE_URL, refetch);

  return <>
    <section className="ChatContent border border-[#C4C5D94D] relative bg-[#F3F6FF] w-[800px] h-[calc(100vh-66px)]">
       <ChatHeader/>
        <div className="p-[32px]">
            <DateDivider/>
            <div className="mb-6"></div>
            <StudentMessage/>
            <div className="mb-6"></div>
            <TeacherTextMessage messages={signalR.messages}/>
            <div className="mb-6"></div>
            <TeacherFileMessage/>
            <ChatInput connection={signalR.connection}/>
        </div>
    </section>
  </>
}

export default ChatContent
