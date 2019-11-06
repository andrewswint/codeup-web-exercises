
$(document).ready(function(){
    console.log("Hello");
    //-------------------------darkSky code-----------------------------------
    //-------------icons-----------------



    //--------------data----------------
        function weather () {
            var request = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4241,-98.4936");
            request.done(function (data) {
                console.log(data);
                var date = function (input) {
                    return new Date(input * 1000);
                };

                var i = 0;
                do {
                    var dailyWeather = '';
                    dailyWeather += '<div class="card">';
                    dailyWeather += '<div class="card-title">' + "Todays Weather" + "</div>";
                    dailyWeather += '<div class="card-body"> <hr> ' +
                        '<h1>' + "High" + " " + data.daily.data[i].temperatureHigh + "/" + "Low" + " " + data.daily.data[i].temperatureLow + "</h1> " +
                        "<div class='w_icon'> </div> " +
                        "<p>" + data.daily.data[i].icon + "</p> " +
                        "<p>" + "Summary: " + data.daily.data[i].summary + "</p>" +
                        " <p>" + "Humidity: " + data.daily.data[i].humidity + "</p>";
                    // dailyWeather += '<span>' + date(data.daily.data[0].time) + '</span>';
                    $('#weatherDisplay').append(dailyWeather);

                    var weatherIcons = [
                        {
                            icon: "clear-day",
                            img: "<img src='img/weatherIcons/clear-day.png' alt='icon'>"
                        },
                        {
                            icon: "rain",
                            img: "<img src='img/weatherIcons/rain.png' alt='icon'>"
                        },
                        {
                            icon: "snow",
                            img: "<img src='img/weatherIcons/snow.png' alt='icon'>"
                        },
                        {
                            icon: "wind",
                            img: "<img src='img/weatherIcons/wind.png' alt='icon'>"
                        },
                        {
                            icon: "fog",
                            img: "<img src='img/weatherIcons/fog.png' alt='icon'>"
                        },
                        {
                            icon: "cloudy",
                            img: "<img src='img/weatherIcons/fog.png' alt='icon'>"
                        },
                        {
                            icon: "partly-cloudy-day",
                            img: "<img src='img/weatherIcons/partly-cloudy-day.png' alt='icon'>"
                        }
                    ];

                    weatherIcons.forEach(function (type) {
                        if (data.daily.data[i].icon === type.icon) {
                            $('.w_icon').html(type.img);
                        }
                    });
                    i++;
                } while (i <= 2);

            });
        }
//    ------------------------mapBox-----------------------------------

weather();
});
