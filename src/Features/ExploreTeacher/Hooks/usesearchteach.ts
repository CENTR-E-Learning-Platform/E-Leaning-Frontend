import { useQuery } from "@tanstack/react-query";
import { sendSearchData } from "../Services/searchAPI";
import { useFormik } from "formik";
import { useState } from "react";

export const usesearchteach = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const teachersPerPage = 3;
  const formik = useFormik({
    initialValues: {
      SearchTeacher: "",
    },
    onSubmit: () => {},
  });

  const { data, error, isLoading } = useQuery({
    queryKey: [
      "search",
      formik.values.SearchTeacher,
      currentPage,
      teachersPerPage,
    ],
    queryFn: () => {
      return sendSearchData({
        searchTerm: `${formik.values.SearchTeacher}`,
        pageNumber: Number(currentPage),
        pageSize: Number(teachersPerPage),
      });
    },
    retry: false,
    enabled: formik.values.SearchTeacher.trim() !== "",
    refetchOnMount: true,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    error,
    isLoading,
    formik,
    setCurrentPage,
    currentPage,
    teachersPerPage,
  };
};
