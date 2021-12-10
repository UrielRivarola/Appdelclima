const { Weather } = require("./weather");
const { UI } = require("./UI")
const { store } = require("./store");

const storeTest = new store();
const { city, countryCode } = storeTest.getLocationData();
const ui = new UI();
const weather =  new Weather(city, countryCode); 



require("./index.css");

async function fetchWeather(){
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}
document.getElementById("w-change-btn").addEventListener("click", (e) => {
    const city = document.getElementById("city").value;
    const countryCode = document.getElementById("countryCode").value;
    weather.changeLocation(city, countryCode);
    storeTest.setLocationData(city, countryCode);
    fetchWeather();
    e.preventDefault();
});


document.addEventListener("DOMContentLoaded", fetchWeather);