export const getFormattedDate = (date: string) => {
  new Date(date).toLocaleString().substring(0, 10);
};
