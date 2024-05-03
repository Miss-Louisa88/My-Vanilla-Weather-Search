function searchCity(event) {
  event.preventDefault();
  let searchResult = document.querySelector("#enterCity");
  console.log(searchResult);
  let cityElement = document.querySelector("h1");
  console.log(cityElement);
  cityElement.innerHTML = searchResult.value;
}
let form = document.querySelector("#city");
form.addEventListener("submit", searchCity);
