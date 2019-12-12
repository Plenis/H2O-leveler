// import { request } from "http";

const textbox = document.querySelector(".cityInput")
const sbmtButton = document.querySelector(".submitButton")
const display = document.querySelector(".weatherDisplay")
const mati = GetWeather();

sbmtButton.addEventListener("click",function(){
  let citySA = textbox.value
  let urlString = mati.whichCity(citySA);
  urlString.then(function(response) {

    if(response.data === "404 (Not Found)"){
      display.innerHTML = "Enter a South African location"
    }
 
  display.innerHTML = response.data.main.temp;

  })

});
 
