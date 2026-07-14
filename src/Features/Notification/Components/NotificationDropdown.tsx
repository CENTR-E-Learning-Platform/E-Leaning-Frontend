import React from "react";
import { useNotifications } from "../Contexts/NotificationContext";
import { type INotification } from "../Types/notification";
import { getNotificationIcon, formatNotificationTime } from "../Utils/notificationHelpers";
interface NotificationDropdownProps {
    onClose: () => void;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ onClose }) => {
    const { latest, markAsRead, markAllRead } = useNotifications();

    const handleViewAll = () => {
        onClose();
        window.location.href = "/notifications";
    };

    const handleNotificationClick = (n: INotification) => {
        if (!n.isRead) {
            markAsRead(n.id);
        }
        onClose();
        window.location.href = "/notifications";
    };

    return (
        <div className="w-[280px] bg-white rounded-[16px] shadow-[0px_20px_60px_rgba(0,19,85,0.15)] border border-[#E8EAED] overflow-hidden font-['Poppins']">
            <div className="flex items-center justify-between px-[16px] pt-[16px] pb-[12px]">
                <h3 className="font-bold text-[16px] text-[#2A2D34]">Notifications</h3>
                <button
                    onClick={markAllRead}
                    className="text-[12px] font-medium text-[#525FE1] hover:text-[#3d4bc7] cursor-pointer transition-colors"
                >
                    Mark all read
                </button>
            </div>

            <div className="max-h-[380px] overflow-y-auto">
                {latest.length === 0 ? (
                    <div className="px-[16px] py-[32px] text-center text-[#9CA3AF] text-[13px]">
                        No notifications yet
                    </div>
                ) : (
                    latest.map((n) => {
                        const { bg, color, Icon } = getNotificationIcon(n.type);
                        return (
                            <div
                                key={n.id}
                                onClick={() => handleNotificationClick(n)}
                                className={`flex items-start gap-[12px] px-[16px] py-[12px] cursor-pointer transition-colors hover:bg-[#F9FAFB] ${!n.isRead ? "bg-[#FFF5F5]" : ""}`}
                            >
                                <div
                                    className="w-[40px] h-[40px] rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: bg, color: color }}
                                >
                                    <Icon size={20} strokeWidth={2} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="text-[11px] font-bold uppercase tracking-[0.5px] mb-[4px]"
                                        style={{ color: color }}
                                    >
                                        {n.type}
                                    </p>
                                    <p className="text-[13px] font-medium text-[#2A2D34] leading-[18px] line-clamp-2">
                                        {n.message}
                                    </p>
                                    <p className="text-[11px] text-[#9CA3AF] mt-[4px]">
                                        {formatNotificationTime(n.createdAt)}
                                    </p>
                                </div>
                                {!n.isRead && (
                                    <div className="w-[8px] h-[8px] rounded-full bg-[#525FE1] flex-shrink-0 mt-[6px]" />
                                )}
                            </div>
                        );
                    })
                )}
            </div>

            <div className="border-t border-[#E8EAED] px-[16px] py-[12px]">
                <button
                    onClick={handleViewAll}
                    className="w-full text-center text-[13px] font-semibold text-[#525FE1] hover:text-[#3d4bc7] transition-colors cursor-pointer"
                >
                    View All Notifications →
                </button>
            </div>
        </div>
    );
};

export default NotificationDropdown;
