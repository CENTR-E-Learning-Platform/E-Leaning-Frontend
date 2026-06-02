import { Video, MessageSquare, FileText, Wallet, Bell, CheckCircle } from "lucide-react";

export interface NotificationTheme {
    bg: string;
    color: string;
    Icon: any;
}

export const getNotificationIcon = (type: string): NotificationTheme => {
    const t = type?.toLowerCase() || "";
    if (t.includes("session")) {
        return { bg: "#FFF1F0", color: "#FF4D4F", Icon: Video };
    }
    if (t.includes("message")) {
        return { bg: "#ECFDF5", color: "#10B981", Icon: MessageSquare };
    }
    if (t.includes("quiz")) {
        return { bg: "#FFFBEB", color: "#F59E0B", Icon: FileText };
    }
    if (t.includes("wallet") || t.includes("payment") || t.includes("point")) {
        return { bg: "#FFF7ED", color: "#F97316", Icon: Wallet };
    }
    if (t.includes("completed")) {
        return { bg: "#ECFDF5", color: "#10B981", Icon: CheckCircle };
    }
    return { bg: "#EEF2FF", color: "#6366F1", Icon: Bell };
};

export const formatNotificationTime = (dateStr: string): string => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
};

export const groupByDate = (notifications: { createdAt: string; [key: string]: any }[]): Record<string, { createdAt: string; [key: string]: any }[]> => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today.getTime() - 86400000);
    const weekAgo = new Date(today.getTime() - 7 * 86400000);

    const groups: Record<string, any[]> = {
        TODAY: [],
        YESTERDAY: [],
        "THIS WEEK": [],
        OLDER: [],
    };

    notifications.forEach(n => {
        const d = new Date(n.createdAt);
        const day = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        if (day.getTime() === today.getTime()) {
            groups["TODAY"].push(n);
        } else if (day.getTime() === yesterday.getTime()) {
            groups["YESTERDAY"].push(n);
        } else if (day >= weekAgo) {
            groups["THIS WEEK"].push(n);
        } else {
            groups["OLDER"].push(n);
        }
    });

    return groups;
};
