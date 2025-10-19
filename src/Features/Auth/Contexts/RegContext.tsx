import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type {FormRegisterType , UserRegister  } from '../Types/user';


interface AuthContextType {
  userData: UserRegister | null;
  setUserData: React.Dispatch<React.SetStateAction<UserRegister | null>>;
  role: string | null;
  setrole: React.Dispatch<React.SetStateAction<string | null>>;
  educationLevelOrSubject: string | null;
  seteducationLevelOrSubject: React.Dispatch<React.SetStateAction<string | null>>;
  FormRegister?: FormRegisterType;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const RegProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const storedUser = localStorage.getItem("userData");
  const storedRole = localStorage.getItem("role");
  const storeEducationLevelOrSubject = localStorage.getItem("educationLevelOrSubject");


  const [userData, setUserData] = useState<UserRegister | null>(
    storedUser ? JSON.parse(storedUser) : null
  );
  const [role, setrole] = useState<string | null>(
    storedRole ? JSON.parse(storedRole) : null
  );
  const [educationLevelOrSubject, seteducationLevelOrSubject] = useState<string | null>(
    storeEducationLevelOrSubject ? JSON.parse(storeEducationLevelOrSubject) : null
  );

  
  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);

  useEffect(() => {
    if (role) {
      localStorage.setItem("role", JSON.stringify(role));
    } else {
      localStorage.removeItem("role");
    }
  }, [role]);

   useEffect(() => {
    if (educationLevelOrSubject) {
      localStorage.setItem("educationLevelOrSubject", JSON.stringify(educationLevelOrSubject));
    } else {
      localStorage.removeItem("educationLevelOrSubject");
    }
  }, [educationLevelOrSubject]);

  const FormRegister = { ...(userData ?? {}), ...(role ? { role } : {}) , ...(educationLevelOrSubject ? { educationLevelOrSubject } : {}) };
  return (
    <AuthContext.Provider value={{ userData, setUserData, setrole, role , educationLevelOrSubject, seteducationLevelOrSubject , FormRegister }}>
      {children}
    </AuthContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useRegContext = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
