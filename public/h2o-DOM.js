// import { request } from "http";

const textbox = document.querySelector(".cityInput")
const sbmtButton = document.querySelector(".submitButton")
const checkLmtsBtn = document.querySelector(".limitsButton")
const display = document.querySelector(".weatherDisplay")
const displayTwo = document.querySelector(".waterData")
const mati = GetWeather();
var cityTemp;
var dailyWaterLmt = 300;
var citySA;

sbmtButton.addEventListener("click", function () {
  let citySA = textbox.value

  let urlString = mati.whichCity(citySA);
  urlString.then(function (response) {
    var cityTemp = response.data.main.temp
    display.innerHTML = "The Temperature in " + citySA + " is " + cityTemp + "°C now";
    // displayTwo.innerHTML = setWaterLimit();
  }).catch(function (err) {
    display.innerHTML = "Place not found! Enter a South African city."
  })

});

checkLmtsBtn.addEventListener("click",function() {
  let hot = "Every household in " + citySA + " is Limited to  a water usage of " + dailyWaterLmt + "litres today";
  let normal = "Every household in " + citySA + " is Limited to  a water usage of " + dailyWaterLmt + "litres today";

  if (cityTemp > 30) {
    dailyWaterLmt + 50
    displayTwo.innerHTML = hot;
  } else {
    displayTwo.innerHTML = normal;
  }

})
