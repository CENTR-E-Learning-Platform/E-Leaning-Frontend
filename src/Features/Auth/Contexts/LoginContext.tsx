import React, { createContext , useContext, useState , type ReactNode  } from "react"
import type{UserLogin , dataGoogle} from '../Types/user';

interface LoginContextTypes {
    loginData : UserLogin | null , 
    setloginData : React.Dispatch<React.SetStateAction<UserLogin |null>>,
    googleData : dataGoogle | null , 
    setGoogleData : React.Dispatch<React.SetStateAction<dataGoogle |null>>

}

const AuthLogin = createContext<LoginContextTypes | null>({} as LoginContextTypes);
export const LoginProvider: React.FC<{ children: ReactNode } >  = ({children}) => {
    const [loginData , setloginData] = useState<UserLogin | null>(null);
    const [googleData , setGoogleData] = useState<dataGoogle | null>(null);
    return (
        <AuthLogin.Provider value={{loginData , setloginData , googleData , setGoogleData}}>
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
