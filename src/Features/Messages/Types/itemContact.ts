export interface ContactProps {
  name: string;
  message: string;
  time: string;
  avatarUrl: string;
  isActive?: boolean;
  isOnline?: boolean;
  hasUnread?: number;
}
export interface Conversation {
  id: string;
  lastMessageAt: string ,
  otherUserName: string;
  lastMessage: string;
  otherUserPicture:string
  unreadCount: number;
}

