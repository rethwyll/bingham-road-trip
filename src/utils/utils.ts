export const isWest = (date: string): boolean => {
  const [, month, day] = date.split("-");
  console.log(
    "🚀 ~ file: utils.ts ~ line 2 ~ isWest ~ date",
    month,
    day,
    (parseInt(day, 10) > 21 && month === "07") || month === "08"
  );
  return (parseInt(day, 10) > 21 && month === "07") || month === "08";
};
