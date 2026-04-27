import { getQuizQuestions } from "../Services/getQuizQuestions";
import { submitQuiz } from "../Services/submitQuiz";
import { ATTEND_QUIZ_API } from "../Utils/Api";

export const useAttemptQuiz = () => {
    const fetchQuestions = async () => {
        try {
            const response = await getQuizQuestions(`${ATTEND_QUIZ_API}?sessionId=9aac5039-f3fc-4aa9-8ec6-f9481d79e38f`);
            console.log(response);
            
            localStorage.setItem("quizQuestions", JSON.stringify(response.data.questions));
            localStorage.setItem("attemptData", JSON.stringify(response.data));
        } catch (err: any) {
            console.error(err);
        }
    }

    const submit = async (selectedAnswers: { [key: number]: number }) => {
        try {
            const storedAttemptData = localStorage.getItem("attemptData");
            const attemptData = storedAttemptData ? JSON.parse(storedAttemptData) : null;
            const currentAttemptId = attemptData?.attemptId || attemptData?.id || 4;

            const formattedAnswers = Object.entries(selectedAnswers).map(([questionId, selectedOptionId]) => ({
                questionId: Number(questionId),
                selectedOptionId: Number(selectedOptionId),
                answerText: "" 
            }));

            const payload = {
                attemptId: currentAttemptId,
                answers: formattedAnswers
            };

            const response = await submitQuiz(payload);
            console.log( " data from sumbission " , response.data );
            
            localStorage.setItem("quizResult", JSON.stringify(response.data));
            window.dispatchEvent(new Event("quizResultUpdated"));

        } catch (err: any) {
            console.error(err);
            throw err;
        }
    }

    return { fetchQuestions, submit }
}