function GetWeather(){
    var apiKey =  "&APPID=3a9bb3a0c565cfcb9993d0673045fb83";
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var units = "&units=metric";
     city = "";

    function whichCity(city){
       
        var showWeather = api + city + apiKey + units; 
        
        return axios.get(showWeather).then(results => results);

    }
     console.log(whichCity("Johannesburg"));

    return {
        whichCity
    }
}
// console.log(GetWeather().whichCity("Johannesburg"))
// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=3a9bb3a0c565cfcb9993d0673045fb83&units=metric

