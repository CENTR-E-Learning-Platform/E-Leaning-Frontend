import { ActionButtons } from "../Components/ActionButtons"
import { BasicInformationSection } from "../Components/BasicInformationSection"
import TimingAndSettings from "../Components/TimingAndSettings"

const QuizSetting = () => {
  return (
    <>
    <BasicInformationSection/>
    <TimingAndSettings/>
    <div className='flex justify-items-end mb-[24px] w-full max-w-[1045px]'>
    <ActionButtons/>
    </div>
       
    </>
  )
}

export default QuizSetting