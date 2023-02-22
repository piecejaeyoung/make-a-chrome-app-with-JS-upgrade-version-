const city = document.querySelector(".weather-city");
const info = document.querySelector(".weather-info");
const API_KEY = "0e9799a46aa54748b3329b59f732995f";

function geoYes(position) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.143581&lon=128.4815205&appid=0e9799a46aa54748b3329b59f732995f&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.textContent = data.name;
      info.textContent = `${data.weather[0].main}    ${data.main.temp}℃`;
    });
}
function geoNo() {
  console.log("OK then.");
}
navigator.geolocation.getCurrentPosition(geoYes, geoNo);
