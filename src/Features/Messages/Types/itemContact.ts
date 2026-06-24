export interface ContactProps {
  name: string;
  message: string;
  time: string;
  avatarUrl: string;
  isActive?: boolean;
  isOnline?: boolean;
  hasUnread?: number | null;
}
export interface Conversation {
  otherUserId: string;
  id: string;
  lastMessageAt: string ,
  otherUserName: string;
  lastMessage: string;
  otherUserPicture:string
  isOnline: boolean
  unreadCount: number;
}
export interface ConversationGroup {
  id: string;
  groupPicture:string
  lastMessage: string;
  lastMessageAt: string ,
  teacherName: string;
  teacherId: string;
  name: string
}
