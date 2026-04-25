const BASE_URL = "https://localhost:7251"; 
const ADD_QUIZ_API = `${BASE_URL}/api/TeacherQuiz/add-quiz`;
const GET_ALL_CLASSES_QUIZ_API = `${BASE_URL}/api/TeacherQuiz/get-sessions-data`;
const ATTEND_QUIZ_API = `${BASE_URL}/api/StudentQuiz/attend-quiz`;
const SUBMIT_QUIZ_API = `${BASE_URL}/api/StudentQuiz/submit-quiz`;
const QUIZ_BASIC_INFO_API  = `${BASE_URL}/api/TeacherQuiz/get-quiz-basic-info`;
const QUIZ_STATUS_API = `${BASE_URL}/api/TeacherQuiz/get-quiz-submission-status-Performance-Preview`;
const QUIZ_SEARCH_API = `${BASE_URL}/api/TeacherQuiz/get-student-submissions`;
export{
    ADD_QUIZ_API,
    GET_ALL_CLASSES_QUIZ_API,
    ATTEND_QUIZ_API,
    SUBMIT_QUIZ_API,
    QUIZ_BASIC_INFO_API,
    QUIZ_STATUS_API,
    QUIZ_SEARCH_API
}