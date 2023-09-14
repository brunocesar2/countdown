export default function initCountdown() {
  const days = document.querySelector("[data-days]");
  const hours = document.querySelector("[data-hours]");
  const minutes = document.querySelector("[data-minutes]");
  const seconds = document.querySelector("[data-seconds]");
  if (days && hours && minutes && seconds) {
    function countdown() {
      const newYearDate = new Date(2024, 0, 1);
      const currentDate = new Date();
      const totalSeconds = (newYearDate - currentDate) / 1000;

      const daysRemaining = Math.floor(totalSeconds / 3600 / 24);
      const hoursRemaining = Math.floor(totalSeconds / 3600) % 24;
      const minutesRemaining = Math.floor(totalSeconds / 60) % 60;
      const secondsRemaining = Math.floor(totalSeconds) % 60;

      days.innerHTML = formatDate(daysRemaining);
      hours.innerHTML = formatDate(hoursRemaining);
      minutes.innerHTML = formatDate(minutesRemaining);
      seconds.innerHTML = formatDate(secondsRemaining);
    }
    function formatDate(time) {
      return time < 10 ? `0${time}` : `${time}`;
    }
    setInterval(countdown, 1000);
  }
}
