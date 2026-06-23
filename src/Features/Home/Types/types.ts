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

export interface ReviewCardProps {
  name: string;
  date: string;
  comment: string;
  avatarUrl: string;
  rating: number;
}

export interface DashboardReview {
  studentName: string;
  reviewText: string;
  rating: number;
  reviewDate: string;
  reviewProfilePicture: string;
}

export interface RecentReviewsProps {
  reviews?: DashboardReview[];
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

export interface ClassItemProps {
  cls: TeacherClass;
  isLast: boolean;
  upcomingClasses?: TeacherClass[];
}

export interface UpcomingClassesCardProps {
  upcomingClasses?: TeacherClass[];
}

export interface MessageItem {
  id: number;
  name: string;
  lastMessage: string;
  avatarUrl: string;
  unreadCount: number;
}

export interface HomeworkCardProps {
  title?: string;
  subTitle?: string;
  status?: string;
}

export interface ActiveQuizzesProps {
  quizzes?: TeacherQuizSummary[];
}

export interface HeroBannerProps {
  date: string;
  title: string;
  subtitle: string;
}
export interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  labelWidth?: string;
  iconWrapperClass?: string;
}
export interface UpcomingClassData {
  time: string;
  period: string;
  title: string;
  subject: string;
  subjectBg: string;
  subjectText: string;
  teacherImg: string;
  teacherName: string;
  statusDot: string;
  statusText: string;
  statusLabel: string;
  joinBg: string;
  titleContainerClass?: string;
}