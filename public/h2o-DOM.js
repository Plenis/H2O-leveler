const textbox = document.querySelector(".cityInput")
const sbmtButton = document.querySelector(".submitButton")
const display = document.querySelector(".weatherDisplay")
const mati = GetWeather();



  // const colorsElem = document.querySelector(".brands");
  // colorsElem.innerHTML = makesTemplate({
  //   brands: response.data
  // });

sbmtButton.addEventListener("click",function(){
  let urlString = mati.whichCity(textbox.value);
  urlString.then(function(response) {
  // handle success
  console.log(response.data.main.temp);
 textbox.innerHTML = console.log(response.data.main.temp);
  display.innerHTML = response.data.main.temp;
  // const colorsElem = document.querySelector(".brands");
  // colorsElem.innerHTML = makesTemplate({
  //   brands: response.data
  // });
});
 

})