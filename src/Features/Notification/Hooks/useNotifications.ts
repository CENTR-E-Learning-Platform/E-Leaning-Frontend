import { useState, useEffect, useCallback, useRef } from "react";
import { getHistoryNotifications } from "../Services/historyNotify";
import { type INotification } from "../Types/notification";

export { useNotifications } from "../Contexts/NotificationContext";

export const useNotificationHistory = () => {
    const [history, setHistory] = useState<INotification[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const loadingRef = useRef(false);
    const PAGE_SIZE = 20;

    const fetchHistory = useCallback(async (pageNum: number) => {
        if (loadingRef.current) return;
        loadingRef.current = true;
        setLoading(true);
        try {
            const res = await getHistoryNotifications(pageNum = 1, PAGE_SIZE);
            const raw = res.data?.data ?? res.data ?? [];
            console.log(res.data);

            const data: INotification[] = Array.isArray(raw)
                ? raw
                : Array.isArray(raw?.items)
                    ? raw.items
                    : [];
            if (pageNum === 1) {
                setHistory(data);
            } else {
                setHistory(prev => [...prev, ...data]);
            }
            setHasMore(data.length === PAGE_SIZE);
        } catch {
        } finally {
            setLoading(false);
            loadingRef.current = false;
        }
    }, []);

    useEffect(() => {
        fetchHistory(1);
    }, [fetchHistory]);

    const loadMore = () => {
        const next = page + 1;
        setPage(next);
        fetchHistory(next);
    };

    const markAsReadLocal = (id: number) => {
        setHistory(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
    };

    return { history, loading, hasMore, loadMore, markAsReadLocal };
};
