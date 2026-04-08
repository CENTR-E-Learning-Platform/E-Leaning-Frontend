import React, { createContext , useContext, useState , type ReactNode  } from "react"

interface SettingContextTypes {
  isCreated: boolean;
  setIsCreated: React.Dispatch<React.SetStateAction<boolean>>;
  showAddFlow: boolean;
  setShowAddFlow: React.Dispatch<React.SetStateAction<boolean>>;
  
 
}

const SettingCtx = createContext<SettingContextTypes | null>(null);

export const SettingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isCreated, setIsCreated] = useState(false);
  const [showAddFlow, setShowAddFlow] = useState(false);
  
  return (
    <SettingCtx.Provider value={{ isCreated, setIsCreated , showAddFlow, setShowAddFlow }}> 
      {children}
    </SettingCtx.Provider>
  );
};

export const useSettingContext = (): SettingContextTypes => {
  const ctx = useContext(SettingCtx);
  if (!ctx) {
    throw new Error("SettingContext must be used within SettingProvider");
  }
  return ctx; 
};
