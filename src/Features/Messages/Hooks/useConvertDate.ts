import { useCallback } from "react";

export const useConvertDate = () => {
  const formatTime = useCallback((dateString: string) => {
    if (!dateString) return "";

    const normalizedDateString =
      dateString.endsWith("Z") || dateString.includes("+")
        ? dateString
        : dateString + "Z";

    const date = new Date(normalizedDateString);
    const now = new Date();

    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    
    const messageDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const diffTime = today.getTime() - messageDay.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const formatTo12Hour = () =>
      date
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .toLowerCase();

    if (diffDays === 0) {
      return formatTo12Hour();
    }

    if (diffDays === 1) {
      return `Yesterday ${formatTo12Hour()}`;
    }

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });
  }, []);

  return formatTime;
};