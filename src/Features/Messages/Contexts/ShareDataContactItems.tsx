import { createContext, useState, type ReactNode } from "react";

interface ShareDataContactItemsContextValue {
  dataContactItem: any[];
  setDataContactItem: React.Dispatch<React.SetStateAction<any[]>>;
}

export const ShareDataContactItems =
  createContext<ShareDataContactItemsContextValue>({
    dataContactItem: [],
    setDataContactItem: () => {},
  });

export function DataContactItemsProvider({ children }: { children: ReactNode }) {
  const [dataContactItem, setDataContactItem] = useState<any[]>([]);

  return (
    <ShareDataContactItems.Provider value={{ dataContactItem, setDataContactItem }}>
      {children}
    </ShareDataContactItems.Provider>
  );
}
