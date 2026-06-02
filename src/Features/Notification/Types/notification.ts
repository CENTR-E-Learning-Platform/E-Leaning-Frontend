export interface INotification {
    id: number;
    type: string;
    title: string;
    message: string;
    createdAt: string;
    isRead: boolean;
    referenceId?: string;
}
