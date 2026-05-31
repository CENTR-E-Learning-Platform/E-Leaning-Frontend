import { useState, useEffect } from 'react';
import StudentAttemptQuiz from '../Components/StudentAttemptQuiz';
import QuizHeaderAttempt from '../Components/QuizHeaderAttempt';
import { useAttemptQuiz } from '../Hooks/useAttemptQuiz';
const StartQuizforStudent = () => {
  const [isWarningVisible, setIsWarningVisible] = useState(false);
  const { fetchQuestions } = useAttemptQuiz();
  useEffect(() => {
    const handleFullscreenChange = () => {

      if (!document.fullscreenElement) {
        setIsWarningVisible(true);
      }
    };
    fetchQuestions();
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const returnToQuiz = async () => {
    try {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      }
      setIsWarningVisible(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex flex-col items-center min-h-screen gap-[24px] w-full'>
      <div className="w-full flex flex-col items-center relative">
        {isWarningVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex flex-col items-center justify-center z-[9999]">
            <div className="bg-white p-8 rounded-lg text-center max-w-md shadow-2xl">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Warning!</h2>
              <p className="text-gray-700 mb-6">
                You exited fullscreen mode. Please return to fullscreen to continue your quiz.
              </p>
              <button
                onClick={returnToQuiz}
                className="px-6 py-3 bg-[#0040DF] text-white font-bold rounded-lg transition-colors hover:bg-blue-700"
              >
                Return to Quiz
              </button>
            </div>
          </div>
        )}

        <div className='mb-[30px] mt-[30px]'>
          <QuizHeaderAttempt />
        </div>
        <StudentAttemptQuiz />
      </div>
    </div>
  );
};

export default StartQuizforStudent;