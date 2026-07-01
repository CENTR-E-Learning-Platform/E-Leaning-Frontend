import ActionFooter from "../Components/QuizDashboard/ActionFooter"
import Header from "../Components/QuizDashboard/Header"
import PerformancePreview from "../Components/QuizDashboard/PerformancePreview"
import QuizHeader from "../Components/QuizDashboard/QuizHeader"
import StudentRow from "../Components/QuizDashboard/StudentRow"
import StudentSubmissionsHeader from "../Components/QuizDashboard/StudentSubmissionsHeader"
import SubmissionStatus from "../Components/QuizDashboard/SubmissionStatus"
import {CLoader} from '../../../Components/UI/CLoader'
import { useQuiz } from '../Context/QuizContext';
import { useQuizSearch } from '../Hooks/useQuizSearch';

const DashboardQuiz = () => {
  const { searchData } = useQuiz();
  const { isLoading } = useQuizSearch(searchData , 0);

  return (
    <div className="flex flex-col justify-center items-center mt-[20px] bg-[#f9fbfc]">
       <div>
         <QuizHeader/>
       </div>
      <div className="flex justify-center mt-[30px]">
        <div className="flex flex-col gap-[20px] me-[30px]">
            <SubmissionStatus/>
            <PerformancePreview/>
        </div>
        <div className="bg-white border border-[#E8EAED] shadow-[0px_18px_36px_rgba(0,19,85,0.06)] rounded-lg min-h-[600px] flex flex-col">
          <StudentSubmissionsHeader/>
          <Header/>
          
          {isLoading  && searchData !== ""? (
            <div className="flex flex-1 justify-center items-center min-h-[300px]">
              <CLoader size="sm" />
            </div>
          ) : (
            <>
              <StudentRow/>
              <div className="mt-auto">
                <ActionFooter/>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardQuiz;