import { createContext, useState, type ReactNode } from "react";
import { roleToAuth } from "../../../Utils/Constant";

interface ShareDataContactItemsContextValue {
  activeMessage: "Teachers" | "Students" | "Groups";
  setActiveMessage: React.Dispatch<
    React.SetStateAction<"Teachers" | "Students" | "Groups">
  >;
  isTeacher: boolean;
}

export const ShareDataContactItems =
  createContext<ShareDataContactItemsContextValue>({
    activeMessage: "Teachers",
    setActiveMessage: () => {},
    isTeacher: false,
  });

export function DataContactItemsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const isTeacher = roleToAuth?.includes("Teacher") ? true : false;
  const [activeMessage, setActiveMessage] = useState<
    "Teachers" | "Students" | "Groups"
  >(isTeacher ? "Teachers" : "Students");
  return (
    <ShareDataContactItems.Provider
      value={{
        activeMessage,
        setActiveMessage,
        isTeacher,
      }}
    >
      {children}
    </ShareDataContactItems.Provider>
  );
}
