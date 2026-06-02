import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentAttemptQuiz from '../Components/StudentAttemptQuiz';
import QuizHeaderAttempt from '../Components/QuizHeaderAttempt';
import { useAttemptQuiz } from '../Hooks/useAttemptQuiz';

const StartQuizforStudent = () => {
  const [isWarningVisible, setIsWarningVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [warningTimer, setWarningTimer] = useState(10);
  const { fetchQuestions } = useAttemptQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('quizResult');
    fetchQuestions();

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && hasStarted) {
        setIsWarningVisible(true);
        setWarningTimer(10);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [hasStarted]);

  useEffect(() => {
    let timer: any;
    if (isWarningVisible && warningTimer > 0) {
      timer = setInterval(() => {
        setWarningTimer((prev) => prev - 1);
      }, 1000);
    } else if (isWarningVisible && warningTimer === 0) {
      window.dispatchEvent(new Event('forceSubmitQuiz'));
      navigate('/quiz/result');
    }
    return () => clearInterval(timer);
  }, [isWarningVisible, warningTimer, navigate]);

  const handleStartQuiz = async () => {
    try {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      }
      setHasStarted(true);
    } catch (err) {
      setHasStarted(true);
    }
  };

  const returnToQuiz = async () => {
    try {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      }
      setIsWarningVisible(false);
      setWarningTimer(10);
    } catch (err) {
    }
  };

  if (!hasStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8FAFC] w-full">
         <div className="bg-white p-10 rounded-xl text-center max-w-md shadow-lg border border-[#E8EAED]">
            <h2 className="text-2xl font-bold text-[#181C20] mb-4">Ready to begin?</h2>
            <p className="text-[#64748B] mb-8 leading-relaxed">
              This quiz requires fullscreen mode. Exiting fullscreen during the quiz will trigger a warning.
            </p>
            <button
              onClick={handleStartQuiz}
              className="px-8 py-3.5 bg-[#525FE1] text-white font-bold rounded-lg transition-colors hover:bg-blue-700 w-full shadow-md"
            >
              Enter Fullscreen & Start Quiz
            </button>
         </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center min-h-screen gap-[24px] w-full'>
      <div className="w-full flex flex-col items-center relative">
        {isWarningVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex flex-col items-center justify-center z-[9999]">
            <div className="bg-white p-8 rounded-lg text-center max-w-md shadow-2xl">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Warning!</h2>
              <p className="text-gray-700 mb-4">
                You exited fullscreen mode. Please return to fullscreen to continue your quiz.
              </p>
              <p className="text-red-600 font-bold text-xl mb-6">
                Auto-submit in: {warningTimer}s
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