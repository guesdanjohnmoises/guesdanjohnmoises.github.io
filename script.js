function toggleTheme() {
  document.body.classList.toggle("light");
}

function updateTime() {
  const el = document.getElementById("local-time");
  const now = new Date();

  const date = now.toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric"
  });

  const time = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const offset = now.getTimezoneOffset();
  const sign = offset <= 0 ? "+" : "-";
  const hours = Math.abs(offset / 60);
  const timezone = `GMT${sign}${hours}`;

  el.textContent = `${date} • ${time} (${timezone})`;
}

updateTime();
setInterval(updateTime, 1000);
