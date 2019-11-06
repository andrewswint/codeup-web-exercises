$(document).ready(function(){
    //    ------------------------mapBox-----------------------------------
    //------------creates map
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        zoom: 10,
        center: [-98.4936, 29.4241],
        minZoom: 0
    });
    //-----------------creates marker
    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4936, 29.4241])
        .addTo(map);

    //----------------generates new request when dragged or searched
    function changeTheURL (latitude, longitude){
        var newRequest = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude);
        return newRequest;
    }

    //-------------------drag forecast
    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
        var drag = changeTheURL(lngLat.lat, lngLat.lng );
        weather(drag);
        map.flyTo({center:
        [lngLat.lng, lngLat.lat]})
    }

    marker.on('dragend', onDragEnd);
    var lngLat = marker.getLngLat();


    //----------------search forecast
    $("#searchAddress").click(function () {
        var input = $("#addressInput").val();
        geocode(input, mapboxToken).then(function (result) {
            var longitude = result[0];
            var latitude = result[1];
            var search = changeTheURL(latitude, longitude);
            map.setCenter(result);
            marker.setLngLat(result);
            weather(search);
        });
    });
    var request = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lngLat.lat + "," + lngLat.lng);

    //-------------------------darkSky code-----------------------------------

    //--------------creates forecast cards
    function weather (request) {
        request.done(function (data) {
            console.log(data);
            $("#weatherDisplay").html("");
            var i = 0;
            do {
                var dateObj = JSON.stringify(new Date(data.daily.data[i].time * 1000)).split('').slice(1, 11).join('');
                var dailyWeather = '';
                dailyWeather += '<div class="card">';
                dailyWeather += '<div class="card-title">' + "Date: " + dateObj + "</div>";
                dailyWeather += '<div class="card-body"> <hr> ' +
                    '<h6>' + "High" + " " + data.daily.data[i].temperatureHigh + "/" + "Low" + " " + data.daily.data[i].temperatureLow + "</h6> " +
                    "<div class='w_icon'> </div> " +
                    "<p>" + "</p> " +
                    "<p>" + "Summary: " + data.daily.data[i].summary + "</p>" +
                    " <p>" + "Humidity: " + data.daily.data[i].humidity + "</p>";
                $('#weatherDisplay').append(dailyWeather);

                //----------------weather icons
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

                //-------------------matches icon to data output
                weatherIcons.forEach(function (type) {
                    if (data.daily.data[i].icon === type.icon) {
                        $('.w_icon').html(type.img);
                    }
                });
                i++;
            } while (i <= 2);

        });
    }
    weather(request);

});