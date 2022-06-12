function dayOfTheWeek(day, month, year) {
  return new Date(year, month - 1, day).toLocaleString("en-us", {
    weekday: "long",
  });
}
