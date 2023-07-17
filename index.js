let london = document.querySelector("#london");
let tokyo = document.querySelector("#tokyo");
let paris = document.querySelector("#paris");
let sydney = document.querySelector("#sydney");
function showAllCountries() {
    let londonTime = moment().tz("Europe/London").format("dddd DD MMMM YYYY");
    london.innerHTML = "<span class='countries'>London</span><br>"+londonTime;
    london.innerHTML += `<span class='time'>${moment().tz("Europe/Lonndon").format("h:mm A")}</span>`;

    let ParisTime = moment().tz("Europe/Paris").format("dddd DD MMMM YYYY");
    paris.innerHTML = "<span class='countries'>Paris</span><br>"+ParisTime;
    paris.innerHTML += `<span class='time'>${moment().tz("Europe/Paris").format("h:mm A")}</span>`;
  
    let TokyoTime = moment().tz("Asia/Tokyo").format("dddd DD MMMM YYYY");
    tokyo.innerHTML = "<span class='countries'>Tokyo</span><br>"+TokyoTime;
    tokyo.innerHTML += `<span class='time'>${moment().tz("Asia/Tokyo").format("h:mm A")}</span>`;
  
    let sydneyTime = moment().tz("Australia/Sydney").format("dddd DD MMMM YYYY");
    sydney.innerHTML = "<span class='countries'>Sydney</span><br>"+sydneyTime;
    sydney.innerHTML += `<span class='time'>${moment().tz("Australia/Sydney").format("h:mm A")}</span>`;
  }
  
  setInterval(showAllCountries, 1000);
  
  
  

  

