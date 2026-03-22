import * as Yup from "yup";

export const changePasswordSchema = Yup.object({
    currentPassword: Yup.string().required("current password must be Required")  
        .min(8, "current password at least 8 characters")
        .max(25, "current password must be at most 25 characters"),
    newPassword:Yup.string().required("new Password must be Required")
        .min(8, "new password at least 8 characters")
        .max(25, "new password must be at most 25 characters")
        .notOneOf([Yup.ref("currentPassword")], "New password must be different from current password"),
    confirmPassword:Yup.string().required("confirm password is required")
        .oneOf([Yup.ref('newPassword'),] , `confirm password pattern is inavalid`)
        .notOneOf([Yup.ref("currentPassword")], "Confirm password must be different from current password"),
});
