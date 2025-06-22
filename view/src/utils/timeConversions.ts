export const convertHoursToDigitalClock = (totalHours: number) => {
  if (typeof totalHours !== "number" || isNaN(totalHours) || totalHours < 0) {
    console.error("Invalid input: totalHours must be a non-negative number.");
    return "Invalid Input";
  }

  let totalSeconds = Math.floor(totalHours * 3600);

  const hours = Math.floor(totalSeconds / 3600);

  totalSeconds %= 3600;

  const minutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;

  const pad = (num: number) => String(Math.floor(num)).padStart(2, "0");

  // Format the results into the HH:MM:SS string
  return `${pad(hours)}h:${pad(minutes)}m:${pad(seconds)}s`;
};
