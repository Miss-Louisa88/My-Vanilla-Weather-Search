function searchCity(event) {
  event.preventDefault();
  let searchResult = document.querySelector("#enterCity");
  let cityElement = document.querySelector("h1");
  console.log(cityElement);
  cityElement.innerHTML = searchResult.value;

  function displayCity(response) {
    console.log(response);
    let currentTemperature = document.querySelector("#temp");
    currentTemperature.innerHTML = Math.round(
      response.data.temperature.current
    );
    let currentWeather = document.querySelector("#icon");
    currentWeather.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon"/>`;
    let weatherDescription = document.querySelector("#description");
    weatherDescription.innerHTML = response.data.condition.description;
    let currentHumidity = document.querySelector("#weatherUpdate");
    currentHumidity.innerHTML = response.data.temperature.humidity;
    let currentWind = document.querySelector("#wind-speed");
    currentWind.innerHTML = `response.data.wind.speed ${Km / hr}`;
  }
  let apiKey = "594o02104b870cb39413fdbd5t9a24d2";
  let city = `${searchResult.value}`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayCity);
}
let form = document.querySelector("#city");
form.addEventListener("submit", searchCity);

///Date API Integration
function createDate() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let day = days[now.getDay()];
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
}
