const TEACHER_CLASSES = "api/Calendar/GetTeacherClasses";
const STUDENT_CLASSES = "api/Calendar/GetStudentClasses";
const BASE_URL = "https://localhost:7251";
const TEACHER_QUIZ = `${BASE_URL}/api/Calendar/get-teacher-quizzes-calendar`;
const STUDENT_QUIZ = `${BASE_URL}/api/Calendar/get-student-quizzes-calendar`;
const UPDATE_SESSION_API = `${BASE_URL}/api/Room/UpdateSession`;
const UPDATE_SESSION_SERIES_API = `${BASE_URL}/api/Room/UpdateSeries`;
export { TEACHER_CLASSES, STUDENT_CLASSES, BASE_URL, TEACHER_QUIZ, STUDENT_QUIZ, UPDATE_SESSION_API, UPDATE_SESSION_SERIES_API };