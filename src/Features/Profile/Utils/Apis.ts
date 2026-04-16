const BASE_URL = "https://localhost:7251";
const UPLOADIMAGE_API = `${BASE_URL}/api/TeacherProfile/AddImage`;
const TEACHERPROFILE_API = `${BASE_URL}/api/TeacherProfile/Get_TeacherProfile_Data`;
const UPLOAD_INTRO_VIDEO_API = `${BASE_URL}/api/TeacherProfile/Upload_Intro_Video`;
const DELETE_FILE_API = `${BASE_URL}/api/TeacherProfile/DeleteFile`;
const ADD_TEACHR_BIO_API = `${BASE_URL}/api/TeacherProfile/Add_Teacher_Bio`;
const CHANGE_TEACHER_NAME_API = `${BASE_URL}/api/TeacherProfile/ChangeName`;
const SUBSCRIPTION_API = `${BASE_URL}/api/Subscription/Subscription`;
const UNSUBSCRIPTION_API = `${BASE_URL}/api/Subscription/UnSubscription`;
export {
  UPLOADIMAGE_API,
  TEACHERPROFILE_API,
  UPLOAD_INTRO_VIDEO_API,
  DELETE_FILE_API,
  ADD_TEACHR_BIO_API,
  CHANGE_TEACHER_NAME_API,
  SUBSCRIPTION_API,
  UNSUBSCRIPTION_API,
  BASE_URL
};
