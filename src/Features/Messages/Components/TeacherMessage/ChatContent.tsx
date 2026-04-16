import DateDivider from "./DateDivider"
import StudentMessage from "./StudentMessage"
import { TeacherFileMessage } from "./TeacherFileMessage"
import { TeacherTextMessage } from "./TeacherTextMessage"

const ChatContent = () => {
  return <>
    <section className="ChatContent bg-[rgba(82,95,225,0.2)] w-[500px] h-screen">
        <div className="p-[32px]">
            <DateDivider/>
            <StudentMessage/>
            <div className="mb-6"></div>
            <TeacherTextMessage/>
            <div className="mb-6"></div>
            <TeacherFileMessage/>

        </div>
    </section>
  </>
}

export default ChatContent
