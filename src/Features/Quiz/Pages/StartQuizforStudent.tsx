// StartQuizforStudent.tsx
import { useState } from 'react'
import SatartQuiz from '../Components/SatartQuiz'
import StudentAttemptQuiz from '../Components/StudentAttemptQuiz'

const StartQuizforStudent = () => {
    const [isStart , setIsStart] = useState(true);
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] gap-[24px]'>
         {isStart ? <SatartQuiz st ={setIsStart} /> :
         <StudentAttemptQuiz/>}
    </div>
  )
}

export default StartQuizforStudent