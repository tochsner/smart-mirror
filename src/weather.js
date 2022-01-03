async function refreshWeather() {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=dübendorf&appid=${WEATHER_API_KEY}`
  );

  temperature = response.data.main.feels_like;
  temperature -= 273.1;
  console.log(temperature);
}

refreshWeather();

// setInterval(refreshWeather, 1000);
