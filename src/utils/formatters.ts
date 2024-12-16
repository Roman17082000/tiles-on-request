export const formatNumber = (num: number): string =>
  `№ ${num.toLocaleString("ru-RU")}`;

export const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return new Date(date).toLocaleDateString("ru-RU", options);
};

export const formatDateTime = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(date).toLocaleString("ru-RU", options);
};

export const formatDuration = (seconds: number): string => {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);

  if (days > 0) {
    return `${days} ${days === 1 ? "день" : "дней"}`;
  }
  return `${hours} ${hours === 1 ? "час" : "часов"}`;
};

export const formatFullName = (
  lastName: string,
  firstName: string,
  middleName: string,
  maxLength: number = 20,
): string => {
  let shortName = `${lastName} ${firstName[0]}.`;

  if (middleName) {
    shortName += `${middleName[0]}.`;
  }

  if (shortName.length > maxLength) {
    return shortName.slice(0, maxLength - 3) + "...";
  }

  return shortName;
};
