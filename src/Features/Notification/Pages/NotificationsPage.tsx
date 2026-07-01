import React, { useState, useEffect, useCallback } from "react";
import { useNotifications } from "../Contexts/NotificationContext";
import { type INotification } from "../Types/notification";
import { getHistoryNotifications } from "../Services/historyNotify";
import { getNotificationIcon, formatNotificationTime } from "../Utils/notificationHelpers";

const PAGE_SIZE = 10;

const groupNotificationsByDate = (notifications: INotification[]): { label: string; items: INotification[] }[] => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const yesterday = today - 86400000;
    const weekAgo = today - 7 * 86400000;

    const groups: { [key: string]: INotification[] } = {
        TODAY: [],
        YESTERDAY: [],
        "THIS WEEK": [],
        OLDER: [],
    };

    notifications.forEach(n => {
        const d = new Date(n.createdAt);
        const day = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
        if (day === today) groups["TODAY"].push(n);
        else if (day === yesterday) groups["YESTERDAY"].push(n);
        else if (day >= weekAgo) groups["THIS WEEK"].push(n);
        else groups["OLDER"].push(n);
    });

    return Object.entries(groups)
        .filter(([, items]) => items.length > 0)
        .map(([label, items]) => ({ label, items }));
};

const NotificationsPage: React.FC = () => {
    const { markAllRead, markAsRead: markContextRead } = useNotifications();
    const [notifications, setNotifications] = useState<INotification[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchPage = useCallback(async (pageNum: number) => {
        setLoading(true);
        try {
            const res = await getHistoryNotifications(pageNum, PAGE_SIZE);
            const raw = res.data?.notifications ?? res.data ?? [];
            const data: INotification[] = Array.isArray(raw)
                ? raw
                : Array.isArray(raw?.items)
                    ? raw.items
                    : [];
            if (pageNum === 1) {
                setNotifications(data);
            } else {
                setNotifications(prev => [...prev, ...data]);
            }
            setHasMore(data.length === PAGE_SIZE);
        } catch {
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPage(1);
    }, [fetchPage]);

    const handleNext = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchPage(nextPage);
    };

    const handleNotificationClick = async (n: INotification) => {
        if (!n.isRead) {
            try {
                await markContextRead(n.id);
                setNotifications(prev =>
                    prev.map(item => item.id === n.id ? { ...item, isRead: true } : item)
                );
            } catch { }
        }
    };

    const grouped = groupNotificationsByDate(notifications);

    return (
        <div className="min-h-[calc(100vh-66px)] bg-[#F9FAFB] font-['Poppins']">
            <div className="max-w-[800px] mx-auto px-[24px] py-[32px]">
                <div className="flex items-center gap-[16px] mb-[8px]">
                    <button
                        onClick={() => window.history.back()}
                        className="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#E8EAED] transition-colors cursor-pointer"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.5 16.6667L5.83333 10L12.5 3.33334" stroke="#2A2D34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <h1 className="font-bold text-[24px] text-[#2A2D34]">All Notifications</h1>
                </div>

                <div className="flex items-start justify-between mb-[24px]">
                    <div>
                        <p className="font-semibold text-[14px] text-[#2A2D34] ml-[52px]">Notifications</p>
                        <p className="text-[12px] text-[#9CA3AF] ml-[52px]">Stay updated with your latest activities</p>
                    </div>
                    <button
                        onClick={markAllRead}
                        className="flex items-center gap-[6px] text-[13px] font-medium text-[#525FE1] hover:text-[#3d4bc7] cursor-pointer transition-colors"
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2.33334 7L5.83334 10.5L11.6667 3.5" stroke="#525FE1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Mark all read
                    </button>
                </div>

                {grouped.map(({ label, items }) => (
                    <div key={label} className="mb-[24px]">
                        <p className="text-[11px] font-semibold text-[#9CA3AF] tracking-[1px] mb-[12px] uppercase">
                            {label}
                        </p>
                        <div className="flex flex-col gap-[8px]">
                            {items.map(n => {
                                const { bg, color, Icon } = getNotificationIcon(n.type);
                                return (
                                    <div
                                        key={n.id}
                                        onClick={() => handleNotificationClick(n)}
                                        className={`flex items-start gap-[16px] rounded-[12px] px-[20px] py-[16px] cursor-pointer transition-all ${!n.isRead ? "bg-[#FFF5F5]" : "bg-white border-b border-[#F3F4F6]"}`}
                                    >
                                        <div
                                            className="w-[48px] h-[48px] rounded-full flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: bg, color: color }}
                                        >
                                            <Icon size={24} strokeWidth={2} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p
                                                className="text-[12px] font-bold uppercase tracking-[0.5px] mb-[4px]"
                                                style={{ color: color }}
                                            >
                                                {n.type}
                                            </p>
                                            <p className="font-semibold text-[15px] text-[#2A2D34] mb-[2px]">{n.title}</p>
                                            <p className="text-[13px] text-[#4B5563] leading-[20px]">{n.message}</p>
                                        </div>
                                        <div className="flex items-center gap-[10px] flex-shrink-0">
                                            <span className="text-[12px] text-[#9CA3AF] whitespace-nowrap">
                                                {formatNotificationTime(n.createdAt)}
                                            </span>
                                            {!n.isRead && (
                                                <div className="w-[10px] h-[10px] rounded-full bg-[#525FE1] flex-shrink-0" />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="flex justify-center py-[24px]">
                        <div className="w-[32px] h-[32px] border-[3px] border-[#525FE1] border-t-transparent rounded-full animate-spin" />
                    </div>
                )}

                {!loading && hasMore && notifications.length > 0 && (
                    <div className="flex justify-center mt-[16px]">
                        <button
                            onClick={handleNext}
                            className="px-[32px] py-[10px] rounded-[8px] border border-[#525FE1] text-[#525FE1] text-[14px] font-medium hover:bg-[#525FE1] hover:text-white transition-colors cursor-pointer"
                        >
                            Next
                        </button>
                    </div>
                )}

                {!loading && notifications.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-[64px] text-center">
                        <div className="text-[48px] mb-[16px]">🔔</div>
                        <p className="font-semibold text-[16px] text-[#2A2D34] mb-[8px]">No notifications yet</p>
                        <p className="text-[13px] text-[#9CA3AF]">You're all caught up!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotificationsPage;