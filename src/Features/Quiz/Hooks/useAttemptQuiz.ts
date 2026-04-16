// useAttemptQuiz.ts
import { data } from "react-router-dom";
import { getQuizQuestions } from "../Services/getQuizQuestions";
import { submitQuiz } from "../Services/submitQuiz";
import { ATTEND_QUIZ_API } from "../Utils/Api";

export const useAttemptQuiz = () => {
    const fetchQuestions = async () => {
        try {
            const response = await getQuizQuestions(`${ATTEND_QUIZ_API}?sessionId=${localStorage.getItem("sessionId")}`);
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
            const currentAttemptId = attemptData?.attemptId || attemptData?.id || 1;

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
            localStorage.setItem("quizResult", JSON.stringify(response.data));
            window.dispatchEvent(new Event("quizResultUpdated"));

        } catch (err: any) {
            console.error(err);
            throw err;
        }
    }

    return { fetchQuestions, submit }
}