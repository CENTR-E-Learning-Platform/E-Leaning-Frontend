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
export interface UpcomingEmptyProps {
  buttonLabel?: string;
  navigatePath?: string;
}
export interface QuizDashboardStudent {
  title: string;
  subject: string;
  dueDate: string;
  quizId: number;
  sessionId: string;
}

export interface TeacherData {
  img: string;
  name: string;
  subject: string;
  rating: string;
  reviews: string;
  price: string;
  starIcon: string;
  lineIcon: string;
}