const LATITUDE = 47.398577;
const LONGITUDE = 8.599249;
const NUM_DAYS = 4;

function toDayString(weekday) {
  switch (weekday % 7) {
    case 0:
      return "So";
    case 1:
      return "Mo";
    case 2:
      return "Di";
    case 3:
      return "Mi";
    case 4:
      return "Do";
    case 5:
      return "Fr";
    case 6:
      return "Sa";
  }
}

function toRoundedDegrees(tempKelvin) {
  return Math.round(tempKelvin - 273.1);
}

function toRoundedKmH(speedMS) {
  return Math.round(speedMS * 3.6);
}

function toSVGPath(iconID) {
  iconID = iconID.replace("n", "d");
  return `src/img/weather/${iconID}.svg`;
}

async function refreshWeather() {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${WEATHER_API_KEY}`
  );

  currentTemperature = toRoundedDegrees(response.data.current.feels_like);
  currentWindSpeed = toRoundedKmH(response.data.current.wind_speed);
  currentIconPath = toSVGPath(response.data.current.weather[0].icon);

  document.getElementById("temperature").innerHTML = currentTemperature + "°";
  document.getElementById("wind").innerHTML = currentWindSpeed + " km/h";
  document.getElementById("weather-icon").src = currentIconPath;

  rainChance = Math.round(response.data.daily[0].pop * 100);
  document.getElementById("rain").innerHTML = rainChance + "%";

  for (let i = 0; i < NUM_DAYS; i++) {
    today = new Date();
    weekday = toDayString(today.getDay() + i);

    data = response.data.daily[i];
    minTemperature = toRoundedDegrees(data.temp.min);
    maxTemperature = toRoundedDegrees(data.temp.max);
    iconPath = toSVGPath(data.weather[0].icon);

    document.getElementById(`weekday-${i}`).innerHTML = weekday;
    document.getElementById(`min-temp-${i}`).innerHTML = minTemperature + "°";
    document.getElementById(`max-temp-${i}`).innerHTML = maxTemperature + "°";
    document.getElementById(`weather-icon-${i}`).src = iconPath;
  }
}

refreshWeather();

// setInterval(refreshWeather, 1000);
