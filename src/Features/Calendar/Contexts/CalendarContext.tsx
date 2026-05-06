import React, { createContext , useContext, useState , type ReactNode  } from "react"

interface CalendarContext {
    active : string | null , 
    setActive : React.Dispatch<React.SetStateAction<string |null>>
    activeLeft : string | null , 
    setActiveLeft : React.Dispatch<React.SetStateAction<string |null>>
    date : string | null , 
    setDate : React.Dispatch<React.SetStateAction<string |null>>
    Class : any | null , 
    setClass : React.Dispatch<React.SetStateAction<any |null>>
    checkGrad : any | null , 
    setCheckGrad : React.Dispatch<React.SetStateAction<any |null>>

}

const Calendar = createContext<CalendarContext | null>({} as CalendarContext);
export const CalendarProvider: React.FC<{ children: ReactNode } >  = ({children}) => {
    const [active , setActive] = useState<string | null>("all");
    const [activeLeft , setActiveLeft] = useState<string | null>("month");
    const [date , setDate] = useState<string | null>("");
    const [Class , setClass] = useState<any |null>([]);
    const [checkGrad , setCheckGrad] = useState(false);
    return (
        <Calendar.Provider value={{active , setActive , activeLeft , setActiveLeft , date , setDate , Class , setClass , checkGrad , setCheckGrad}}>
            {children}
        </Calendar.Provider>
    );
}

export const useCalendar = ():CalendarContext => {
    const ctx =  useContext(Calendar);
    if(!ctx){
        throw new Error("useCalendar must be used within CalendarProvider");
    }
    return ctx; 
} 
