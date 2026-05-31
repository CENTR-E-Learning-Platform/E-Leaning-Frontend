const BASE_URL = "https://localhost:7251";
const GET_STUDENT_DASHBOARD_INFO = `${BASE_URL}/api/StudentDashboard/GetStudentDashboardInfo`;
const UPCOMING_CLASSES_STUDENT = `${BASE_URL}/api/StudentDashboard/upcoming-classes`;
const UPCOMING_CLASSES_TEACHER = `${BASE_URL}/api/TeacherDashboard/GetUpcomingClasses`;
const RECOMMENDED_TEACHERS = `${BASE_URL}/api/StudentDashboard/recommended-teachers`;
const GET_TEACHER_DASHBOARD_INFO = `${BASE_URL}/api/TeacherDashboard/GetTeacherDashboardInfo`;



export {GET_STUDENT_DASHBOARD_INFO , UPCOMING_CLASSES_STUDENT, UPCOMING_CLASSES_TEACHER, RECOMMENDED_TEACHERS, GET_TEACHER_DASHBOARD_INFO ,BASE_URL}
