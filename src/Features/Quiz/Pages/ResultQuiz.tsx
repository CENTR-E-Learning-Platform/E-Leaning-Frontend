import QuizResultCard from '../Components/QuizResultCard'
import QuizSubmitted from '../Components/QuizSubmitted'

const ResultQuiz = () => {
  return (
    <>
    <div className="flex justify-center items-center flex-col gap-[24px] mt-[50px] mb-[50px]">
        <QuizSubmitted/>
        <QuizResultCard/>
    </div>
    </>
  )
}

export default ResultQuiz