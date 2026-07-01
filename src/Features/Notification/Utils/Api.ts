import { BASE_URL } from "../../../APIs/APIs";

const LATEST_NOTIFICATIONS_API = `${BASE_URL}/Notification/latest`;
const HISTORY_NOTIFICATIONS_API = `${BASE_URL}/Notification/history`;
const COUNT_UNREAD_NOTIFICATIONS_API = `${BASE_URL}/Notification/unread-count`;
export {
    LATEST_NOTIFICATIONS_API,
    HISTORY_NOTIFICATIONS_API,
    COUNT_UNREAD_NOTIFICATIONS_API
}