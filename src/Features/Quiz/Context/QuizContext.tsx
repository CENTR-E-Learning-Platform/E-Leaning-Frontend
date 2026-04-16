import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type QuizTime } from "../Types/types"


interface QuizContext {
    QuizDataTime: QuizTime;
    setQuizDataTime: React.Dispatch<React.SetStateAction<QuizTime>>;
    secondQuizData: boolean;
    setSecondQuizData: React.Dispatch<React.SetStateAction<boolean>>;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isPublishModel: boolean;
    setIsPublishModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultQuizData: QuizTime = {
    Title: "",
    Description: "",
    Date: "",
    Time: "",
    Duration: 10,
    IsAttempted: false,
    Class: "Chemistry - Prep 2 (25 students)"
};

const Quiz = createContext<QuizContext | null>(null);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [QuizDataTime, setQuizDataTime] = useState<QuizTime>(() => {
        const savedData = localStorage.getItem("quizDraft");
        return savedData ? JSON.parse(savedData) : defaultQuizData;
    });
    useEffect(() => {
        localStorage.setItem("quizDraft", JSON.stringify(QuizDataTime));
    }, [QuizDataTime]);

    const [secondQuizData, setSecondQuizData] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPublishModel, setIsPublishModel] = useState(false);

    return (
        <Quiz.Provider value={{ QuizDataTime, setQuizDataTime, secondQuizData, setSecondQuizData, isModalOpen, setIsModalOpen, isPublishModel, setIsPublishModel }}>
            {children}
        </Quiz.Provider>
    );
};

export const useQuiz = (): QuizContext => {
    const ctx = useContext(Quiz);
    if (!ctx) {
        throw new Error("useQuiz must be used within QuizProvider");
    }
    return ctx;
};