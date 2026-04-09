const BASE_URL = "https://localhost:7251";
const UPLOADIMAGE_API = `${BASE_URL}/api/TeacherProfile/AddImage`;
const TEACHERPROFILE_API = `${BASE_URL}/api/TeacherProfile/Get_TeacherProfile_Data`;
const UPLOAD_INTRO_VIDEO_API = `${BASE_URL}/api/TeacherProfile/Upload_Intro_Video`;
const DELETE_FILE_API = `${BASE_URL}/api/TeacherProfile/DeleteFile`;
const ADD_TEACHR_BIO_API = `${BASE_URL}/api/TeacherProfile/Add_Teacher_Bio`;
const CHANGE_TEACHER_NAME_API = `${BASE_URL}/api/TeacherProfile/ChangeName`;

export {
  UPLOADIMAGE_API,
  TEACHERPROFILE_API,
  UPLOAD_INTRO_VIDEO_API,
  DELETE_FILE_API,
  ADD_TEACHR_BIO_API,
  CHANGE_TEACHER_NAME_API,
};
