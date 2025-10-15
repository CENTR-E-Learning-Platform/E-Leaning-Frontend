import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export interface User {
  email: string;
  fullName: string;
  password: string;
}

interface FormRegisterType {
  email?: string;
  fullName?: string;
  password?: string;
  role?: string | null;
  educationLevelOrSubject?: string | null;
}

interface AuthContextType {
  userData: User | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
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


  const [userData, setUserData] = useState<User | null>(
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
