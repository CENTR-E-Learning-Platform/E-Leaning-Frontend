export const SUBJECTS_LIST = [
  { id: 0, name: "Arabic" },
  { id: 1, name: "English" },
  { id: 2, name: "Deutsch" },
  { id: 3, name: "Italiano" },
  { id: 4, name: "Français" },
  { id: 5, name: "Español" },
  { id: 6, name: "Math" },
  { id: 7, name: "Physics" },
  { id: 8, name: "Chemistry" },
  { id: 9, name: "Biology" },
  { id: 10, name: "Geology" },
  { id: 11, name: "History" },
  { id: 12, name: "Geography" },
  { id: 13, name: "Philosophy" },
  { id: 14, name: "Psychology" },
  { id: 15, name: "Science" },
  { id: 16, name: "SocialStudies" },
];

export const formatSessionDate = (startTime: string) => {
  const date = new Date(startTime);

  const weekday = date.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const day = date.getDate();

  const month = date.toLocaleDateString("en-US", {
    month: "short",
  });

  return `${weekday} ${day} ${month}`;
};

export const formatSessionTime = (startTime: string, endTime: string) => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const startFormatted = start.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const endFormatted = end.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${startFormatted} - ${endFormatted}`;
};
