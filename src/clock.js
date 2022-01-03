function refreshTime() {
  now = new Date();

  hours = now.getHours();
  minutes = now.getMinutes();
  if(minutes < 10) {
  minutes = "0" + minutes;
  }
  document.getElementById("time").innerHTML = `${hours}:${minutes}`;
}

setInterval(refreshTime, 1000);
