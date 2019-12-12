// import { request } from "http";

const textbox = document.querySelector(".cityInput")
const sbmtButton = document.querySelector(".submitButton")
const display = document.querySelector(".weatherDisplay")
const mati = GetWeather();

sbmtButton.addEventListener("click",function(){
  let citySA = textbox.value
  let urlString = mati.whichCity(citySA);
  urlString.then(function(response) {
display.innerHTML = "Temperature for " + citySA + " is " + response.data.main.temp + "°C";
}) .catch(function(err){
  display.innerHTML = "Place not found! Enter a South African city."
})

});
 
