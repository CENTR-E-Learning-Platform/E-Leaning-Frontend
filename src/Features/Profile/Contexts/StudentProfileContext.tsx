import { createContext, useContext } from "react";

export interface TeacherProfileData {
  teacherId: string;
  profilePicturePath: string;
  fullName: string;
  userName: string;
  coverPath: string;
  introVideoPath: string;
  phoneNum: string | null;
  rate: number;
  balance: number;
  email: string;
  bio: string | null;
  isVerified: boolean;
  completedClasses: number;
  yearsExperience: number | null;
  subjects: string[];
  grades: string[] | null;
  upComingSessions: any[];
  completionPercentage: number;
  numberOfReviews: number;
  status: number;
  reviews: any[];
}

interface StudentProfileContextType {
  teacherProfile: TeacherProfileData | null;
  isLoading: boolean;
  fetchTeacherProfile: () => void;
}

export const StudentProfileContext = createContext<StudentProfileContextType>({
  teacherProfile: null,
  isLoading: false,
  fetchTeacherProfile: () => {},
});

export const useStudentProfileContext = () => useContext(StudentProfileContext);
