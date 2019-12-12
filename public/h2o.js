function GetWeather(){
    var apiKey =  "&APPID=3a9bb3a0c565cfcb9993d0673045fb83";
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var units = "&units=metric";
    var southAfrica = ",za";
     city = "";

    function whichCity(city){
       
        var showWeather = api + city + southAfrica + apiKey + units; 
        
        return axios.get(showWeather).then(results => results);

    }
    // http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3a9bb3a0c565cfcb9993d0673045fb83
    // function weatherMap(city){
        
    // }
     

    return {
        whichCity
    }
}

