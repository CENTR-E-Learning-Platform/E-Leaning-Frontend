// SatartQuiz.tsx
import { useAttemptQuiz } from '../Hooks/useAttemptQuiz'
import { NavLink } from 'react-router-dom'

const SatartQuiz = ({st}:any) => {
    const {fetchQuestions} = useAttemptQuiz();
  return (
    <div>
         <button
         onClick={()=>{
             fetchQuestions();
                st(false)
         }}
       className="flex flex-col justify-center items-center w-[229px] h-[42px] bg-[#525FE1] rounded-[8px] font-['Poppins',sans-serif] font-bold text-[12px] leading-[22px] text-white shadow-[0px_20px_25px_-5px_rgba(82,95,225,0.25),0px_8px_10px_-6px_rgba(0,64,223,0.25)] hover:bg-[#4350c9] transition-colors cursor-pointer">
        Start Quiz
      </button>
    </div>
  )
}

export default SatartQuiz