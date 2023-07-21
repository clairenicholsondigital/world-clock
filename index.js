let london = document.querySelector("#london");
let tokyo = document.querySelector("#tokyo");
let paris = document.querySelector("#paris");
let sydney = document.querySelector("#sydney");

function showAllCountries() {
  let londonTime = moment().tz("Europe/London").format("dddd DD MMMM YYYY");
  london.innerHTML = `<span class='countries'>London💂</span>&nbsp;` + londonTime;
  london.innerHTML += `<span class='time morningafternoon'>${moment().tz("Europe/London").format("A")}</span>`;  
  london.innerHTML += `<span class='time'>${moment().tz("Europe/London").format("h:mm:ss")}</span>`;

  let ParisTime = moment().tz("Europe/Paris").format("dddd DD MMMM YYYY");
  paris.innerHTML = `<span class='countries'>Paris🥐</span>&nbsp;` + ParisTime;
  paris.innerHTML += `<span class='time morningafternoon'>${moment().tz("Europe/Paris").format("A")}</span>`;  
  paris.innerHTML += `<span class='time'>${moment().tz("Europe/Paris").format("h:mm:ss")}</span>`;

  let TokyoTime = moment().tz("Asia/Tokyo").format("dddd DD MMMM YYYY");
  tokyo.innerHTML = `<span class='countries'>Tokyo 🍱</span>&nbsp;` + TokyoTime;
  tokyo.innerHTML += `<span class='time morningafternoon'>${moment().tz("Asia/Tokyo").format("A")}</span>`;  
  tokyo.innerHTML += `<span class='time'>${moment().tz("Asia/Tokyo").format("h:mm:ss")}</span>`;

  let sydneyTime = moment().tz("Australia/Sydney").format("dddd DD MMMM YYYY");
  sydney.innerHTML = `<span class='countries'>Sydney 🐨</span>&nbsp;` + sydneyTime;
  sydney.innerHTML += `<span class='time morningafternoon'>${moment().tz("Australia/Sydney").format("A")}</span>`;  
  sydney.innerHTML += `<span class='time'>${moment().tz("Australia/Sydney").format("h:mm:ss")}</span>`;
}

setInterval(showAllCountries, 1000);


////let localTimezone = moment.tz.guess();
//let localElement = document.querySelector("#local");
//localElement.innerHTML = `${localTimezone} and the current time is ${moment().format(
 // "h:m A"
//)}`;

let countriesSelect = document.querySelector(".countries select");

function showSelectedTime() {
  let countriesSelect = document.querySelector(".countries select");
  let selectedCountry = countriesSelect.value;
  let citiesElement = document.querySelector(".countrieslist");

  if (selectedCountry === "London") {
    let londonTime = moment().tz("Europe/London").format("dddd DD MMMM YYYY");
    citiesElement.innerHTML = `<span class='countries'>London <img src="https://images.emojiterra.com/twitter/v14.0/1024px/1f1ec-1f1e7.png" width="30px"/></span>&nbsp;` + londonTime;
    citiesElement.innerHTML += `<span class='time morningafternoon'>${moment().tz("Europe/London").format("A")}</span>`;  
    citiesElement.innerHTML += `<span class='time'>${moment().tz("Europe/London").format("h:mm:ss")}</span>`;
  } else if (selectedCountry === "Paris") {
    let ParisTime = moment().tz("Europe/Paris").format("dddd DD MMMM YYYY");
    citiesElement.innerHTML = `<span class='countries'>Paris<img src="https://em-content.zobj.net/thumbs/240/apple/354/flag-france_1f1eb-1f1f7.png" width="30px"/></span>&nbsp;` + ParisTime;
    citiesElement.innerHTML += `<span class='time morningafternoon'>${moment().tz("Europe/Paris").format("A")}</span>`;  
    citiesElement.innerHTML += `<span class='time'>${moment().tz("Europe/Paris").format("h:mm:ss")}</span>`;
    setInterval(1000);
   } else if (selectedCountry === "My local time") {
    citiesElement.innerHTML = `<span class='countries'>Local 🏠</span>`
    let localTimezone = moment.tz.guess();
    let localTime = moment().tz(`${localTimezone}`).format("dddd DD MMMM YYYY");
    citiesElement.innerHTML += `<span class='time morningafternoon'>${moment().tz(`${localTimezone}`).format("A")}</span>`;  
    citiesElement.innerHTML += `<span class='time'>${moment().tz(`${localTimezone}`).format("h:mm:ss")}</span>` + localTime;
    setInterval(1000);
  } else if (selectedCountry === "Tokyo") {
    let TokyoTime = moment().tz("Asia/Tokyo").format("dddd DD MMMM YYYY");
   citiesElement.innerHTML = `<span class='countries'>Tokyo<img src="https://em-content.zobj.net/thumbs/240/apple/354/flag-japan_1f1ef-1f1f5.png" width="30px"/></span>&nbsp;` + TokyoTime;
   citiesElement.innerHTML += `<span class='time morningafternoon'>${moment().tz("Asia/Tokyo").format("A")}</span>`;  
   citiesElement.innerHTML += `<span class='time'>${moment().tz("Asia/Tokyo").format("h:mm:ss")}</span>`;  

   setInterval(1000);
  }
  else if (selectedCountry === "Sydney") {
    let sydneyTime = moment().tz("Australia/Sydney").format("dddd DD MMMM YYYY");
   citiesElement.innerHTML = `<span class='countries'>Sydney🦘</span>&nbsp;` + sydneyTime;
   citiesElement.innerHTML += `<span class='time morningafternoon'>${moment().tz("Australia/Sydney").format("A")}</span>`;  
   citiesElement.innerHTML += `<span class='time'>${moment().tz("Asia/Tokyo").format("h:mm:ss")}</span>`;  

   setInterval(1000);
  }
}


countriesSelect.addEventListener("change", showSelectedTime);

setInterval(showSelectedTime, 1000);