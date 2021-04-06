var searchBtn = $(".searchButton")
var APIkey = "15546ce984382d0a081fc48064da1cfe"
var cityInput = $("#area")
searchHistory = $("#history")
console.log(city)


var city = ""
console.log(cityInput)

var searched = []

var i = 0
var SearchHandler = function (event) {
    event.preventDefault();

    let updateTime = function () {
        let currentTime = moment().format(' MMMM Do, dddd')
        $(".currentDate").text(currentTime)
        }
    
    
        updateTime();
    
    
    
        setInterval(updateTime, 1000);
    
    
    
  
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

searched.push(city)

    fetch(weatherApiURL)
        
        .then(function (response) {
            console.log(weatherApiURL);
            
            response.json().then(function (data) {
                console.log(data);
            
                $(".cityName").html("<h1>" + data.name + " Weather:")
                $(".cityTemp").html("<h2>" + "Temperature: " + data.main.temp + " Degrees")
                $(".windSpeed").html("<h2>" + "Wind Speed: " + data.wind.speed + " MPH")

                
                console.log(searched)
                localStorage.setItem("searched", searched)
                var newSearch = $("<h3>");
                newSearch.text(city)
                searched.push(newSearch)
                searchHistory.append(newSearch)
                
                
                var lat = data.coord.lat
                var lon = data.coord.lon
                console.log(lat)
                var uvIndexAPI = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&cnt={cnt}&appid=" + APIkey;
                

                fetch(uvIndexAPI)
                .then(function (response) {
                    console.log(uvIndexAPI);
                    
                    response.json().then(function (data) {
                        console.log(data);
                       

                        $(".uvIndex").html("<h2>" + "Humidity: ")
        
                        
        
        
                        })
            });


                })
    });

   



    fetch(forcastApiURL)
    .then(function (response) {
        console.log(forcastApiURL);
        
        response.json().then(function (data) {
            console.log(data); 

        $(".day-1").html("<h2>" + "Temp: " + data.list[4].main.temp + " Humidity: " + data.list[4].main.humidity)
        $(".day-2").html("<h2>" + "Temp: " + data.list[12].main.temp + " Humidity: " + data.list[1].main.humidity)
        $(".day-3").html("<h2>" + "Temp: " + data.list[20].main.temp + " Humidity: " + data.list[2].main.humidity)
        $(".day-4").html("<h2>" + "Temp: " + data.list[28].main.temp + " Humidity: " + data.list[3].main.humidity)
        $(".day-5").html("<h2>" + "Temp: " + data.list[36].main.temp + " Humidity: " + data.list[4].main.humidity)
        
    })
        
}); 

}

function renderHistory(newSearch) {
    var weatherApiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + newSearch + "&units=imperial&appid=" + APIkey;

    var forcastApiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + newSearch + "&units=imperial&appid=" + APIkey;

    console.log(newSearch)

    fetch(weatherApiURL)
        
        .then(function (response) {
            console.log(weatherApiURL);
            
            response.json().then(function (data) {
                console.log(data);
            
                $(".cityName").html("<h1>" + data.name + " Weather:")
                $(".cityTemp").html("<h2>" + "Temperature: " + data.main.temp + " Degrees")
                $(".windSpeed").html("<h2>" + "Wind Speed: " + data.wind.speed + " MPH")

             
                console.log(searched)
              
                var newSearch = $("<h3>");
                newSearch.text(city)
                
                

            //     var lat = data.coord.lat
            //     var lon = data.coord.lon
            //     console.log(lat)
            //     var uvIndexAPI = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&cnt={cnt}&appid=" + APIkey;
                

            //     fetch(uvIndexAPI)
            //     .then(function (response) {
            //         console.log(uvIndexAPI);
                    
            //         response.json().then(function (data) {
            //             console.log(data);
                       

            //             $(".uvIndex").html("<h2>" + "Humidity: ")
        
                        
        
        
            //             })
            // });


                })
    });

   



    fetch(forcastApiURL)
    .then(function (response) {
        console.log(forcastApiURL);
        
        response.json().then(function (data) {
            console.log(data); 

        $(".day-1").html("<h2>" + "Temp: " + data.list[4].main.temp + " Humidity: " + data.list[4].main.humidity)
        $(".day-2").html("<h2>" + "Temp: " + data.list[12].main.temp + " Humidity: " + data.list[1].main.humidity)
        $(".day-3").html("<h2>" + "Temp: " + data.list[20].main.temp + " Humidity: " + data.list[2].main.humidity)
        $(".day-4").html("<h2>" + "Temp: " + data.list[28].main.temp + " Humidity: " + data.list[3].main.humidity)
        $(".day-5").html("<h2>" + "Temp: " + data.list[36].main.temp + " Humidity: " + data.list[4].main.humidity)
        
    })
        
}); 

}


searchBtn.on("click", SearchHandler)


searchHistory.on("click", renderHistory)
