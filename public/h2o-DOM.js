
const textbox = document.querySelector(".cityInput")
const sbmtButton = document.querySelector(".submitButton")
const checkLmtsBtn = document.querySelector(".limitsButton")
const display = document.querySelector(".weatherDisplay")
const displayTwo = document.querySelector(".waterData")
const mati = GetWeather();
var cityTemp;
// var dailyWaterLmt;
var citySA = "";

sbmtButton.addEventListener("click", function () {
  citySA = textbox.value

  let urlString = mati.whichCity(citySA);
  urlString.then(function (response) {
     cityTemp = response.data.main.temp
    display.innerHTML = "The Temperature in " + citySA + " is " + cityTemp + "°C now.";
    // displayTwo.innerHTML = setWaterLimit();
  }).catch(function (err) {
    display.innerHTML = "Place not found! Enter a South African city."
  })

});

checkLmtsBtn.addEventListener("click",function() {
  let dailyWaterLmt = 300;
  let tempCity = mati.whichCity(citySA);

  tempCity.then(function (response) {
     cityTemp = response.data.main.temp

  // let empty = "Enter a city name";
  let normal = "Every household in " + citySA + " is limited to  a water usage of " + dailyWaterLmt + " litres today.";
  console.log(cityTemp);
  if (cityTemp > 30) {
    dailyWaterLmt = 350;
    displayTwo.innerHTML = "Every household in " + citySA + " is limited to  a water usage of " + dailyWaterLmt + " litres today.";
  }
   else {
    displayTwo.innerHTML = normal;
  }
 
  })
  

})