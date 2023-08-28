export function dateFormat(dateString, time = false) {
  const d = dayjs(dateString);
  return d.format("YYYY-MM-DD" + (time ? " HH:mm:ss" : ""));
}
