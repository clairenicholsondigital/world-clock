document.addEventListener("DOMContentLoaded", function() {
  let london = document.querySelector("#london");
let tokyo = document.querySelector("#tokyo");
let paris = document.querySelector("#paris");
let sydney = document.querySelector("#sydney");

function showAllCountries() {
  let londonTime = moment().tz("Europe/London").format("dddd DD MMMM YYYY");
  london.innerHTML = `<span class='countries'>London <img src="https://images.emojiterra.com/twitter/v14.0/1024px/1f1ec-1f1e7.png" width="30px"/></span>&nbsp;` + londonTime;
  london.innerHTML += `<span class='time'>${moment().tz("Europe/London").format("h:mm A")}</span>`;

  let ParisTime = moment().tz("Europe/Paris").format("dddd DD MMMM YYYY");
  paris.innerHTML = `<span class='countries'>Paris<img src="https://em-content.zobj.net/thumbs/240/apple/354/flag-france_1f1eb-1f1f7.png" width="30px"/></span>&nbsp;` + ParisTime;
  paris.innerHTML += `<span class='time'>${moment().tz("Europe/Paris").format("h:mm A")}</span>`;

  let TokyoTime = moment().tz("Asia/Tokyo").format("dddd DD MMMM YYYY");
  tokyo.innerHTML = `<span class='countries'>Tokyo<img src="https://em-content.zobj.net/thumbs/240/apple/354/flag-japan_1f1ef-1f1f5.png" width="30px"/></span>&nbsp;` + TokyoTime;
  tokyo.innerHTML += `<span class='time'>${moment().tz("Asia/Tokyo").format("h:mm A")}</span>`;

}

setInterval(showAllCountries, 1000);


let localTimezone = moment.tz.guess();
let localElement = document.querySelector("#local");
localElement.innerHTML = `${localTimezone} and the current time is ${moment().format(
  "h:m A"
)}`;
let countriesSelect = document.querySelector("#countries");


function showSelectedTime() {
    let selectedCountry = countriesSelect.value;
    if (selectedCountry === "London") {
        alert("LONDON");
    } else if (selectedCountry === "Paris") {
        alert("PARIS");
    } else if (selectedCountry === "Local") {
        alert("LOCAL");
    } else if (selectedCountry === "Tokyo") {
        alert("TOKYO");
    }
}

  countriesSelect.addEventListener("change", showSelectedTime);
});