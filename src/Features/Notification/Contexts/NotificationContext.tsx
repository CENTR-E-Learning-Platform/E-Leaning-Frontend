import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { getLatestNotifications } from "../Services/latestNotify";
import { getUnreadCount } from "../Services/unreadCount";
import { readNotifyById, markAllNotificationsRead } from "../Services/readNotifyById";
import { startNotificationHub, getNotificationConnection } from "../Services/notificationHub";

import { type INotification } from "../Types/notification";

interface NotificationContextType {
    latest: INotification[];
    unreadCount: number;
    markAsRead: (id: number) => Promise<void>;
    markAllRead: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType>({
    latest: [],
    unreadCount: 0,
    markAsRead: async () => { },
    markAllRead: async () => { },
});

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [latest, setLatest] = useState<INotification[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const initialized = useRef(false);

    const fetchLatest = useCallback(async () => {
        try {
            const res = await getLatestNotifications();
            const raw = res.data?.data ?? res.data ?? [];
            setLatest(Array.isArray(raw) ? raw : Array.isArray(raw?.items) ? raw.items : []);
        } catch { }
    }, []);

    const fetchUnreadCount = useCallback(async () => {
        try {
            const res = await getUnreadCount();
            setUnreadCount(res.data?.data ?? res.data ?? 0);
        } catch { }
    }, []);

    const markAsRead = useCallback(async (id: number) => {
        try {
            await readNotifyById(id);
            setLatest(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
            setUnreadCount(prev => Math.max(0, prev - 1));
        } catch { }
    }, []);

    const markAllRead = useCallback(async () => {
        try {
            await markAllNotificationsRead();
            setLatest(prev => prev.map(n => ({ ...n, isRead: true })));
            setUnreadCount(0);
        } catch { }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        if (initialized.current) return;
        initialized.current = true;

        fetchLatest();
        fetchUnreadCount();

        startNotificationHub().then(conn => {
            conn.on("ReceiveNotification", (type, title, message, createdAt, referenceId) => {
                const newItem: INotification = {
                    id: Date.now(),
                    type,
                    title,
                    message,
                    createdAt,
                    isRead: false,
                    referenceId,
                };
                setLatest(prev => [newItem, ...prev].slice(0, 5));
                setUnreadCount(prev => prev + 1);
            });
        }).catch(error => console.error("Error starting notification hub:", error));

        return () => {
            const conn = getNotificationConnection();
            conn.off("ReceiveNotification");
        };
    }, [fetchLatest, fetchUnreadCount]);

    return (
        <NotificationContext.Provider value={{ latest, unreadCount, markAsRead, markAllRead }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotifications = () => useContext(NotificationContext);
