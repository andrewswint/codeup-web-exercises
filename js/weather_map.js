
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

            var dailyWeather = '';
                dailyWeather += '<div class="card">';
                dailyWeather += '<div class="card-title">' + "Todays Weather" + "</div>";
                dailyWeather += '<div class="card-body"> <hr> <h1>' + "High" + " " + data.daily.data[0].temperatureHigh + "/" + "Low" + " " + data.daily.data[0].temperatureLow + "</h1> <p>" + data.daily.data[0].icon + "</p> <p>" + "Summary: " + data.daily.data[0].summary + "</p> <p>" + "Humidity: " + data.daily.data[0].humidity + "</p>";
                // dailyWeather += '<span>' + date(data.daily.data[0].time) + '</span>';
            $('#weatherDisplay').append(dailyWeather);

            var tomorrowWeather = '';
            tomorrowWeather += '<div class="card">';
            tomorrowWeather += '<div class="card-title">' + "Todays Weather" + "</div>";
            tomorrowWeather += '<div class="card-body"> <hr> <h1>' + "High" + " " + data.daily.data[1].temperatureHigh + "/" + "Low" + " " + data.daily.data[1].temperatureLow + '</h1> <p>' + data.daily.data[1].icon + '</p> <p>' + 'Summary: ' + data.daily.data[1].summary + '</p> <p>' + data.daily.data[1].humidity + '</p>';
            // tomorrowWeather += '<span>' + date(data.daily.data[1].time) + '</span>';
            $('#weatherDisplay').append(tomorrowWeather);

            var thirdDay = '';
            thirdDay += '<div class="card">';
            thirdDay += '<div class="card-title">' + "Todays Weather" + "</div>";
            thirdDay += '<div class="card-body"> <hr> <h1>' + "High" + " " + data.daily.data[2].temperatureHigh + "/" + "Low" + " " + data.daily.data[2].temperatureLow + '</h1> <p>' + data.daily.data[2].icon + '</p> <p>' + "Summary: " + data.daily.data[2].summary + '</p> <p>' + "Humidity: " + data.daily.data[2].humidity + '</p>';
            // thirdDay += '<span>' + date(data.daily.data[2].time) + '</span>';
            $('#weatherDisplay').append(thirdDay);
        });
    }
    weather();

//    ------------------------mapBox-----------------------------------


});