export type QuizTime = {
    Title: string;
    Description: string;
    Date: string;
    Time: string;
    Duration: number;
    IsAttempted: boolean;
    Class?: string; 
    Questions?: Question[];
};

export type Question = {
    questionTitle: string;
    questionType:string;
    options: Options[];
    points: number;
    sequenceOrder: number;
}
export type Options = {
    optionText: string;
    isCorrect: boolean;
    sequenceOrder: number;
}