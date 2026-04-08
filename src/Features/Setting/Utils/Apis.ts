const BASE_URL = "https://localhost:7251";
const GET_STUDENT_PROFILE_API = `${BASE_URL}/api/StudentProfile/Get_StudentProfile_Data`;
const UPDATE_STUDENT_PROFILE_API = `${BASE_URL}/api/StudentProfile/Update_Studnet_Profile`;
const DELETE_FILE_API = `${BASE_URL}/api/TeacherProfile/Delete%20File`;
const UPLOADIMAGE_API = `${BASE_URL}/api/TeacherProfile/Add%20Image`;
const CHANGE_PASSWORD = `${BASE_URL}/Account/change-password`
const ADD_WALLET = `${BASE_URL}/api/TeacherPayment/Add%20Wallet`
const BALANCE = `${BASE_URL}/api/TeacherPayment/balance`

export{
    GET_STUDENT_PROFILE_API,
    UPDATE_STUDENT_PROFILE_API,
    DELETE_FILE_API,
    UPLOADIMAGE_API,
    CHANGE_PASSWORD,
    ADD_WALLET,
    BALANCE
}

