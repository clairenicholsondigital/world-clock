let london = document.querySelector("#london");
let tokyo = document.querySelector("#tokyo");
let paris = document.querySelector("#paris");
let sydney = document.querySelector("#sydney");

function showAllCountries() {
  let londonTime = moment().tz("Europe/London").format("dddd DD MMMM YYYY");
  london.innerHTML = `<span class='countries'>London💂</span>`;
  london.innerHTML += `<span class='time'>${moment().tz("Europe/London").format("HH:mm:ss")}</span>`;
  london.innerHTML += `<div class="date">${londonTime}</div>`;

  let ParisTime = moment().tz("Europe/Paris").format("dddd DD MMMM YYYY");
  paris.innerHTML = `<span class='countries'>Paris🥐</span>`;
  paris.innerHTML += `<span class='time'>${moment().tz("Europe/Paris").format("HH:mm:ss")}</span>`;
  paris.innerHTML += `<div class="date">${ParisTime}</div>`;

  let tokyoTime = moment().tz("Asia/Tokyo").format("dddd DD MMMM YYYY");
  tokyo.innerHTML = `<span class='countries'>Tokyo 🍱</span>`;
  tokyo.innerHTML += `<span class='time'>${moment().tz("Asia/Tokyo").format("HH:mm:ss")}</span>`;
  tokyo.innerHTML += `<div class="date">${tokyoTime}</div>`;

  let sydneyTime = moment().tz("Australia/Sydney").format("dddd DD MMMM YYYY");
  sydney.innerHTML = `<span class='countries'>Sydney 🐨</span>`;
  sydney.innerHTML += `<span class='time'>${moment().tz("Australia/Sydney").format("HH:mm:ss")}</span>`;
  sydney.innerHTML += `<div class="date">${sydneyTime}</div>`;
}

setInterval(showAllCountries, 1000);

let countriesSelect = document.querySelector(".countries select");
let citiesElement = document.querySelector(".countrieslist");

function showSelectedTime() {
  let selectedCountry = countriesSelect.value;

  if (selectedCountry === "London") {
    let londonTime = moment().tz("Europe/London").format("dddd DD MMMM YYYY");
    citiesElement.innerHTML = `<span class='countries'>London💂</span>`;
    citiesElement.innerHTML += `<span class='time'>${moment().tz("Europe/London").format("HH:mm:ss")}</span>`;
    citiesElement.innerHTML += `<div class="date">${londonTime}</div>`;
  } else if (selectedCountry === "Paris") {
    let ParisTime = moment().tz("Europe/Paris").format("dddd DD MMMM YYYY");
    citiesElement.innerHTML = `<span class='countries'>Paris🥐</span>`;
    citiesElement.innerHTML += `<span class='time'>${moment().tz("Europe/Paris").format("HH:mm:ss")}</span>`;
    citiesElement.innerHTML += `<div class="date">${ParisTime}</div>`;
  } else if (selectedCountry === "My local time") {
    citiesElement.innerHTML = `<span class='countries'>Local 🏠</span>`;
    let localTimezone = moment.tz.guess();
    let localTime = moment().tz(`${localTimezone}`).format("dddd DD MMMM YYYY");
    citiesElement.innerHTML += `<span class='time'>${moment().tz(`${localTimezone}`).format("HH:mm:ss")}</span>`;
    citiesElement.innerHTML += `<div class="date">${localTime}</div>`;
  } else if (selectedCountry === "Tokyo") {
    let tokyoTime = moment().tz("Asia/Tokyo").format("dddd DD MMMM YYYY");
    citiesElement.innerHTML = `<span class='countries'>Tokyo 🍱</span>`;
    citiesElement.innerHTML += `<span class='time'>${moment().tz("Asia/Tokyo").format("HH:mm:ss")}</span>`;
    citiesElement.innerHTML += `<div class="date">${tokyoTime}</div>`;
  } else if (selectedCountry === "Sydney") {
    let sydneyTime = moment().tz("Australia/Sydney").format("dddd DD MMMM YYYY");
    citiesElement.innerHTML = `<span class='countries'>Sydney🦘</span>`;
    citiesElement.innerHTML += `<span class='time'>${moment().tz("Australia/Sydney").format("HH:mm:ss")}</span>`;
    citiesElement.innerHTML += `<div class="date">${sydneyTime}</div>`;
  }
}

countriesSelect.addEventListener("change", showSelectedTime);

setInterval(showSelectedTime, 1000);
