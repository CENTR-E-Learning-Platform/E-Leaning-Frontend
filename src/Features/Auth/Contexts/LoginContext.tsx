import React, { createContext , useContext, useState , type ReactNode  } from "react"
import type{UserLogin} from '../Types/user';

interface LoginContextTypes {
    loginData : UserLogin | null , 
    setloginData : React.Dispatch<React.SetStateAction<UserLogin |null>>

}

const AuthLogin = createContext<LoginContextTypes | null>({} as LoginContextTypes);
export const LoginProvider: React.FC<{ children: ReactNode } >  = ({children}) => {
    const [loginData , setloginData] = useState<UserLogin | null>(null);
    
    return (
        <AuthLogin.Provider value={{loginData , setloginData}}>
            {children}
        </AuthLogin.Provider>
    );
}

export const useLoginContext = ():LoginContextTypes => {
    const ctx =  useContext(AuthLogin);
    if(!ctx){
        throw new Error("useAuth must be used within AuthProvider");
    }
    return ctx; 
} 
