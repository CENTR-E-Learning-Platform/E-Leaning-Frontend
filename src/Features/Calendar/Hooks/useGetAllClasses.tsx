import { useEffect } from "react";
import { getAllTeacherClasses } from "../Services/getAllTeacherClasses";
import { useCalendar } from "../Contexts/CalendarContext";
export const useGetAllClasses = () => {
  const { SetTeacherClass } = useCalendar();
  useEffect(() => {
    const fetchData = async () => {
      const data = getAllTeacherClasses();
      SetTeacherClass((await data).data.data);
      console.log((await data).data.data);
      
    };
    fetchData();
  }, []);
};
