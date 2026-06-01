export interface QuizItemProps {
  title: string;
  subject: string;
  timeLeft: string;
  progress: number;
  submissions: string;
  isUrgent?: boolean;
}
export interface TeacherQuizSummary {
  quizId: number;
  title: string;
  subject: string;
  level: string;
  dueDate: string;
  totalStudents: number;
  submittedCount: number;
  submissionPercentage: number;
}
export interface TeacherClass {
  additionalAttendeesCount?: number;
  attendeeProfilePictures?: string[];
  level?: string;
  roomName?: string;
  startTime?: string;
  title?: string;
}