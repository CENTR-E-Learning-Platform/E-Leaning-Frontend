import { useEffect, useCallback } from "react";
import { getAllTeacherClasses } from "../Services/getAllTeacherClasses";
import { useCalendar } from "../Contexts/CalendarContext";

export const useGetAllClasses = () => {
  const { SetTeacherClass } = useCalendar();

  const fetchClasses = useCallback(async () => {
    try {
      const response = await getAllTeacherClasses();
      SetTeacherClass(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  }, [SetTeacherClass]);

  useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);

  return { fetchClasses };
};