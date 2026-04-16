const BASE_URL = "https://localhost:7251"; 
const ADD_QUIZ_API = `${BASE_URL}/api/TeacherQuiz/add-quiz`;
const GET_ALL_CLASSES_QUIZ_API = `${BASE_URL}/api/TeacherQuiz/get-sessions-data`;
const ATTEND_QUIZ_API = `${BASE_URL}/api/StudentQuiz/attend-quiz`;
const SUBMIT_QUIZ_API = `${BASE_URL}/api/StudentQuiz/submit-quiz`;
export{
    ADD_QUIZ_API,
    GET_ALL_CLASSES_QUIZ_API,
    ATTEND_QUIZ_API,
    SUBMIT_QUIZ_API
}