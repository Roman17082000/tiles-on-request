export const FILTER_OPTIONS = {
  all: "Все",
  inProgress: "В работе",
  overdue: "Просрочена",
  completed: "Выполнена",
  feedback: "Есть отзыв",
} as const;

export type FilterKey = keyof typeof FILTER_OPTIONS;
