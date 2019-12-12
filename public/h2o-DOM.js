// import { request } from "http";

const textbox = document.querySelector(".cityInput")
const sbmtButton = document.querySelector(".submitButton")
const display = document.querySelector(".weatherDisplay")
const mati = GetWeather();



  

sbmtButton.addEventListener("click",function(){
  let urlString = mati.whichCity(textbox.value);
  urlString.then(function(response) {
    if(response.data === "404 (Not Found)"){
      display.innerHTML = "Enter a South African location"
    }
 
  display.innerHTML = response.data.main.temp;
 
});
 

})