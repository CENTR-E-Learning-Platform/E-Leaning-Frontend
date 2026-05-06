import { useEffect, useCallback } from "react";
import { getAllTeacherClasses } from "../Services/getAllTeacherClasses";
import { useCalendar } from "../Contexts/CalendarContext";
import { roleToAuth } from "../../../Utils/Constant";
import { getAllStudentClasses } from "../Services/getAllStudentClasses";

export const useGetAllClasses = () => {
  const { setClass } = useCalendar();

  const isTeacher = !!roleToAuth?.includes("Teacher");

  const fetchClasses = useCallback(async () => {
    try {
      let fetchedData;

      if (isTeacher) {
        const response = await getAllTeacherClasses();
        fetchedData = response.data.data;
      } else {
        const response = await getAllStudentClasses();
        fetchedData = response.data.data;
      }

      setClass(fetchedData);
      console.log(fetchedData);

    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  }, [setClass, isTeacher]); 

  useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);

  return { fetchClasses };
};