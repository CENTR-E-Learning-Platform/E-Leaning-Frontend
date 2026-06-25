import { useQuery } from "@tanstack/react-query";
import { sendAllTeacherData } from "../Services/allTeacherAPI";
import { useState } from "react";

export const useGetAllTeachers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const teachersPerPage = 3;

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["allTeachers", currentPage, teachersPerPage],
    queryFn: () =>
      sendAllTeacherData({
        pageIndex: Number(currentPage),
        pageSize: Number(teachersPerPage),
      }),
    retry: false,
    enabled: true,
    refetchOnMount: true,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    error,
    isLoading,
    refetch,
    currentPage,
    setCurrentPage,
    teachersPerPage,
  };
};
