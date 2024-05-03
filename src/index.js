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
  }
  let apiKey = "594o02104b870cb39413fdbd5t9a24d2";
  let city = `${searchResult.value}`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayCity);
}
let form = document.querySelector("#city");
form.addEventListener("submit", searchCity);
