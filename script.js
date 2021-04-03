var searchBtn = $(".searchButton")
var APIkey = "15546ce984382d0a081fc48064da1cfe"
var city = "san francisco"

var weatherApiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey;

var forcastApiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIkey;




fetch(weatherApiURL)
    .then(function (response) {
        console.log(weatherApiURL);
        
        response.json().then(function (data) {
            console.log(data);
          
            $(".cityName").html("<h1>" + data.name + " Weather:")
            $(".cityTemp").html("<h2>" + "Temperature: " + data.main.temp + " Degrees")
            $(".windSpeed").html("<h2>" + "Wind Speed: " + data.wind.speed + " MPH")
            $(".uvIndex").html("<h2>" + "Humidity: " + data.main.humidity)
            })

        

});



fetch(forcastApiURL)
    .then(function (response) {
        console.log(forcastApiURL);
        
        response.json().then(function (data) {
            console.log(data); })
        
})