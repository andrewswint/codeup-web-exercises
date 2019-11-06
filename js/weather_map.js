
$(document).ready(function(){
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
                dailyWeather += '<div class="card-body"> <hr> <h1>' + "High" + " " + data.daily.data[i].temperatureHigh + "/" + "Low" + " " + data.daily.data[i].temperatureLow + "</h1> <p>" + data.daily.data[i].icon + "</p> <p>" + "Summary: " + data.daily.data[i].summary + "</p> <p>" + "Humidity: " + data.daily.data[i].humidity + "</p>";
                // dailyWeather += '<span>' + date(data.daily.data[0].time) + '</span>';
            $('#weatherDisplay').append(dailyWeather);
            i++;
                } while (i <= 2);
        });
    }
    weather();

       var weatherIcons = [
           {}, {}, {}, {}, {}, {}, {}, {}
        ]

//    ------------------------mapBox-----------------------------------


});