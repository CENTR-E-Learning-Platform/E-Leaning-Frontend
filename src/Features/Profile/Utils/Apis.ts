const BASE_URL = "https://localhost:7251";
const UPLOADIMAGE_API = `${BASE_URL}/api/TeacherProfile/Add%20Image`;
const TEACHERPROFILE_API = `${BASE_URL}/api/TeacherProfile/Get%20TeacherProfile%20Data`;
const UPLOAD_INTRO_VIDEO_API = `${BASE_URL}/api/TeacherProfile/Upload%20Intro%20Video`;
const STUDENTPROFILE_API = `${BASE_URL}/api/StudentProfile/Get%20StudentProfile%20Data`; // Setting feature
const DELETE_FILE_API = `${BASE_URL}/api/TeacherProfile/Delete%20File`;
const ADD_TEACHR_BIO_API = `${BASE_URL}/api/TeacherProfile/Add%20Teacher%20Bio`;

export {UPLOADIMAGE_API ,TEACHERPROFILE_API  , UPLOAD_INTRO_VIDEO_API  , STUDENTPROFILE_API , DELETE_FILE_API , ADD_TEACHR_BIO_API}