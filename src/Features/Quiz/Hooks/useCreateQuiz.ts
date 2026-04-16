import { createQuiz } from "../Services/createQuiz";
import { useQuiz } from "../Context/QuizContext";
import { getAllClassesQuiz } from "../Services/getAllClassesQuiz";
export const useCreateQuiz = () => {
    const { QuizDataTime } = useQuiz()

    const createNewQuiz = async (sessionId: string) => {
        
        let dueDateISO = new Date().toISOString(); 
        if (QuizDataTime.Date && QuizDataTime.Time) {
            dueDateISO = new Date(`${QuizDataTime.Date}T${QuizDataTime.Time}:00`).toISOString();
        }

     
        const quizData = {
            title: QuizDataTime.Title || "",
            sessionId: sessionId,
            dueDate: dueDateISO,
            timeLimitInMinutes: QuizDataTime.Duration || 30,
            maxNumberAttempts: 3,
            questions: QuizDataTime.Questions?.map((q, qIndex) => ({
                questionTitle: q.questionTitle,
                questionType: q.questionType,
                points: q.points,
                sequenceOrder: q.sequenceOrder || (qIndex + 1),
                options: q.options.map((opt, optIndex) => ({
                    optionText: opt.optionText,
                    isCorrect: opt.isCorrect,
                    sequenceOrder: opt.sequenceOrder || (optIndex + 1)
                }))
            })) || []
        };

        console.log(sessionId);
        try {
            
            const response = await createQuiz(quizData); 
            console.log(response.data);
            
        } catch (error) {
            console.error("Error creating quiz:", error);
            throw error; 
        }
    };

const GetAllClassesQuiz = async () => {
    try{
        const response = await getAllClassesQuiz();
        localStorage.setItem("classesQuizData", JSON.stringify(response.data));
        console.log(response.data);
    }catch(error){
        console.error("Error fetching classes quiz data:", error);
    }
     
}

    return { createNewQuiz , GetAllClassesQuiz};
}