import { useCallback, useState } from "react";
import { getAllTeacherClasses } from "../Services/getAllTeacherClasses";
import { useCalendar } from "../Contexts/CalendarContext";
import { roleToAuth } from "../../../Utils/Constant";
import { getAllStudentClasses } from "../Services/getAllStudentClasses";
import { startOfMonth, endOfMonth, format } from "date-fns";

export const useGetAllClasses = () => {
  const { setClass } = useCalendar();
  const [isLoading, setIsLoading] = useState(false);

  const isTeacher = !!roleToAuth?.includes("Teacher");

  const fetchClasses = useCallback(
    async (referenceDate: Date = new Date()) => {
      const start = format(startOfMonth(referenceDate), "yyyy-MM-dd");
      const end = format(endOfMonth(referenceDate), "yyyy-MM-dd");

      setIsLoading(true);
      try {
        let fetchedData;

        if (isTeacher) {
          const response = await getAllTeacherClasses(start, end);
          fetchedData = response.data.data;
        } else {
          const response = await getAllStudentClasses(start, end);
          fetchedData = response.data.data;
        }

        setClass(fetchedData);
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [setClass, isTeacher]
  );

  return { fetchClasses, isLoading };
};