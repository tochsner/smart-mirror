function refreshDate() {
  now = new Date();

  hours = now.getHours();
  minutes = now.getMinutes();

  document.getElementById("time").innerHTML = `${hours}:${minutes}`;
}

function refreshTime() {
  now = new Date();

  day = now.getDate();
  month = now.getMonth() + 1;
  year = now.getFullYear();

  document.getElementById("date").innerHTML = `${day}.${month}.${year}`;
}

setInterval(refreshDate, 1000);
setInterval(refreshTime, 1000);
