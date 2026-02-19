import React, { createContext , useContext, useState , type ReactNode  } from "react"

interface RoomContextTypes {
  cameraView: boolean;
  setCameraView: React.Dispatch<React.SetStateAction<boolean>>;
  mic: boolean;
  setMic: React.Dispatch<React.SetStateAction<boolean>>;
  openStream: boolean;
  setOpenStream: React.Dispatch<React.SetStateAction<boolean>>;
  optionMic: boolean;
  setOptionMic: React.Dispatch<React.SetStateAction<boolean>>;
  optionCamera: boolean;
  setOptionCamera: React.Dispatch<React.SetStateAction<boolean>>;
  optionMenu: boolean;
  setOptionMenu: React.Dispatch<React.SetStateAction<boolean>>;
  optionSmallMenu: boolean;
  setOptionSmallMenu: React.Dispatch<React.SetStateAction<boolean>>;
  optionEmoji: boolean;
  setOptionEmoji: React.Dispatch<React.SetStateAction<boolean>>;
  emoji: string [];
  setEmoji: React.Dispatch<React.SetStateAction<string[]>>;
  optionLeave: boolean;
  setOptionLeave: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoomCtx = createContext<RoomContextTypes | null>(null);

export const RoomProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cameraView, setCameraView] = useState(false);
  const [mic, setMic] = useState(false);
  const [openStream, setOpenStream] = useState(false);
  const [optionMic, setOptionMic] = useState(false);
  const [optionCamera, setOptionCamera] = useState(false);
  const [optionMenu, setOptionMenu] = useState(false);
  const [optionSmallMenu, setOptionSmallMenu] = useState(false);
  const [optionEmoji, setOptionEmoji] = useState(false);
  const [emoji, setEmoji] = useState<string[]>([]);
  const [optionLeave, setOptionLeave] = useState(false)
  return (
    <RoomCtx.Provider value={{ cameraView, setCameraView , mic , setMic , openStream , setOpenStream , optionMic , setOptionMic ,optionCamera , setOptionCamera , optionMenu , setOptionMenu , optionSmallMenu , setOptionSmallMenu , optionEmoji , setOptionEmoji ,emoji ,setEmoji , optionLeave , setOptionLeave}}>
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
