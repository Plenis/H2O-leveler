const textbox = document.querySelector(".cityInput")
const sbmtButton = document.querySelector(".submitButton")
const display = document.querySelector(".weatherDisplay")
const mati = GetWeather();

// const weatherTemplateSource = document.querySelector(".weatherTemplate");
// const weatherTemplate = document.querySelector(weatherTemplateSource.innerHTML);

sbmtButton.addEventListener("click",function(){
  let citySA = textbox.value
  let urlString = mati.whichCity(citySA);
  urlString.then(function(response) {

  // // handle success
  // console.log(response.data.main.temp);
  citySA.innerHTML = console.log(response.data.main);
  display.innerHTML = "Temperature for " + citySA + " is " + response.data.main.temp + "°C";

  // const weatherElem = document.querySelector(".weatherDisplay");
  // weatherElem.innerHTML = weatherTemplate({
  //    weather: response.data.main
  })
});
 
