var searchBtn = $(".searchButton")
var APIkey = "15546ce984382d0a081fc48064da1cfe"
var cityInput = $("#area")
console.log(city)

var city = "milpitas"
console.log(cityInput)





var SearchHandler = function (event) {
    event.preventDefault();
  
    var city = cityInput.val()
  
    if (city) {
      renderWeather(city);

      
    } else {
      alert('Please enter a city');
    }
  };




function renderWeather(city) {

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
            console.log(data); 

        $(".day-1").html("<h2>" + "Temp: " + data.list[0].main.temp + " Humidity: " + data.list[0].main.humidity)
        $(".day-2").html("<h2>" + "Temp: " + data.list[1].main.temp + " Humidity: " + data.list[1].main.humidity)
        $(".day-3").html("<h2>" + "Temp: " + data.list[2].main.temp + " Humidity: " + data.list[2].main.humidity)
        $(".day-4").html("<h2>" + "Temp: " + data.list[3].main.temp + " Humidity: " + data.list[3].main.humidity)
        $(".day-5").html("<h2>" + "Temp: " + data.list[4].main.temp + " Humidity: " + data.list[4].main.humidity)
        
    })
        
}) 

}



searchBtn.on("click", SearchHandler)


