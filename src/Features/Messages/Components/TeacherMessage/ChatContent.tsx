import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import DateDivider from "./DateDivider"

import StudentMessage from "./StudentMessage"
import { TeacherFileMessage } from "./TeacherFileMessage"
import { TeacherTextMessage } from "./TeacherTextMessage"

const ChatContent = () => {
  return <>
    <section className="ChatContent relative bg-[#F3F6FF] w-[800px] h-[calc(100vh-66px)]">
       <ChatHeader/>
        <div className="p-[32px]">
            <DateDivider/>
            <div className="mb-6"></div>
            <StudentMessage/>
            <div className="mb-6"></div>
            <TeacherTextMessage/>
            <div className="mb-6"></div>
            <TeacherFileMessage/>
            <ChatInput/>
        </div>
    </section>
  </>
}

export default ChatContent
