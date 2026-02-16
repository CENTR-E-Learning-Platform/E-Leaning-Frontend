import React, { createContext , useContext, useState , type ReactNode  } from "react"

interface RoomContextTypes {
  cameraView: boolean;
  setCameraView: React.Dispatch<React.SetStateAction<boolean>>;
  mic: boolean;
  setMic: React.Dispatch<React.SetStateAction<boolean>>;
  openStream: boolean;
  setOpenStream: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoomCtx = createContext<RoomContextTypes | null>(null);

export const RoomProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cameraView, setCameraView] = useState(false);
  const [mic, setMic] = useState(false);
  const [openStream, setOpenStream] = useState(false);
  return (
    <RoomCtx.Provider value={{ cameraView, setCameraView , mic , setMic , openStream , setOpenStream}}>
      {children}
    </RoomCtx.Provider>
  );
};

export const useControlContext = (): RoomContextTypes => {
  const ctx = useContext(RoomCtx);
  if (!ctx) {
    throw new Error("RoomContext must be used within RoomProvider");
  }
  return ctx; 
};
