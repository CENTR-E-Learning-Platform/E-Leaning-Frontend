export interface FormRegisterType {
  email?: string;
  fullName?: string;
  password?: string;
  role?: string | null;
  educationLevelOrSubject?: string | null;
}

export interface UserRegister {
  email: string;
  fullName: string;
  password: string;
}
export interface UserLogin {
    email : string , 
    password : string 
}