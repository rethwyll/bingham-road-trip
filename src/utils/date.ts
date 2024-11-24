import { DateTime } from "luxon";

export const getFormattedDate = (date: string) => {
  new Date(date).toLocaleString().substring(0, 10);
};

export const isDuringTrip = (date: string): boolean =>
  DateTime.fromISO(date) >= DateTime.fromISO("2022-06-27") &&
  DateTime.fromISO(date) < DateTime.fromISO("2022-08-12");
