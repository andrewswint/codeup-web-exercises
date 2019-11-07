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
        draggable: true,
        color: "#340054"
    })
        .setLngLat([-98.4936, 29.4241])
        .addTo(map);

    //----------------search forecast
    $("#searchAddress").click(function () {
        $("tbody").html("");
        var input = $("#addressInput").val();
        geocode(input, mapboxToken).then(function (result) {
            var longitude = result[0];
            var latitude = result[1];
            var search = changeTheURL(latitude, longitude);
            map.setCenter(result);
            marker.setLngLat(result);
            weather(search);
            request = changeTheURL(latitude, longitude);
        });
    });

    //----------------generates new request when dragged or searched
    function changeTheURL (latitude, longitude){
        var newRequest = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude);
        return newRequest;
    }

    //-------------------drag forecast
    function onDragEnd() {
        var lngLat = marker.getLngLat();
        var drag = changeTheURL(lngLat.lat, lngLat.lng );
        weather(drag);
        map.flyTo({center:
        [lngLat.lng, lngLat.lat]});
        request = changeTheURL(lngLat.lat, lngLat.lng);
    }

    marker.on('dragend', onDragEnd);
    var lngLat = marker.getLngLat();

    var request = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lngLat.lat + "," + lngLat.lng);

    //-------------------------darkSky code-----------------------------------

    //--------------creates forecast cards
        function weather(request) {
            request.done(function (data) {
                console.log(data);
                $("#forecastTable0").html("");
                    var dateObj = JSON.stringify(new Date(data.daily.data[0].time * 1000)).split('').slice(1, 11).join('');
                    var forecastTable0 = '';
                    forecastTable0 += '<tr>';
                    forecastTable0 += '<th scope="row">' + dateObj + '<td>' + '<span class="w_icon0"></span> </td> <td>' + data.daily.data[0].summary +'</td> <td>' + data.daily.data[0].temperatureHigh + " / " + data.daily.data[0].temperatureLow +'</td> <td>' + data.daily.data[0].windSpeed  + '</td> <td>' + data.daily.data[0].humidity  + '</td>';
                    forecastTable0 += '</tr>';
                    $('#forecastTable0').append(forecastTable0);

                $("#forecastTable1").html("");
                var forecastTable1 = '';
                forecastTable1 += '<tr>';
                forecastTable1 += '<th scope="row">' + dateObj + '<td>' + '<span class="w_icon1"></span> </td> <td>' + data.daily.data[1].summary +'</td> <td>' + data.daily.data[1].temperatureHigh + " / " + data.daily.data[1].temperatureLow +'</td> <td>' + data.daily.data[1].windSpeed  + '</td> <td>' + data.daily.data[1].humidity  + '</td>';
                forecastTable1 += '</tr>';
                $('#forecastTable1').append(forecastTable1);


                $("#forecastTable2").html("");
                var forecastTable2 = '';
                forecastTable2 += '<tr>';
                forecastTable2 += '<th scope="row">' + dateObj + '<td>' + '<span class="w_icon2"></span> </td> <td>' + data.daily.data[2].summary +'</td> <td>' + data.daily.data[2].temperatureHigh + " / " + data.daily.data[2].temperatureLow +'</td> <td>' + data.daily.data[2].windSpeed  + '</td> <td>' + data.daily.data[2].humidity  + '</td>';
                forecastTable2 += '</tr>';
                $('#forecastTable2').append(forecastTable2);

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
                        if (data.daily.data[0].icon === type.icon) {
                            $('.w_icon0').html(type.img);
                            }
                    });
                weatherIcons.forEach(function (type) {
                    if (data.daily.data[1].icon === type.icon) {
                        $('.w_icon1').html(type.img);
                    }
                });
                weatherIcons.forEach(function (type) {
                    if (data.daily.data[2].icon === type.icon) {
                        $('.w_icon2').html(type.img);
                    }
                });
            });
        }
    weather(request);
        //----------------------changing the forecast length
        //-----today's forecast
        $("#today").click(function() {
            $("tbody").html("");

            function weather(request) {
                request.done(function (data) {
                    console.log(data);
                    var dateObj = JSON.stringify(new Date(data.daily.data[0].time * 1000)).split('').slice(1, 11).join('');
                    $("#forecastTable0").html("");
                    var forecastTable0 = '';
                    forecastTable0 += '<tr>';
                    forecastTable0 += '<th scope="row">' + dateObj + '<td>' + '<span class="w_icon0"></span> </td> <td>' + data.daily.data[0].summary + '</td> <td>' + data.daily.data[0].temperatureHigh + " / " + data.daily.data[0].temperatureLow + '</td> <td>' + data.daily.data[0].windSpeed + '</td> <td>' + data.daily.data[0].humidity + '</td>';
                    forecastTable0 += '</tr>';
                    $('#forecastTable0').append(forecastTable0);

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
                        if (data.daily.data[0].icon === type.icon) {
                            $('.w_icon0').html(type.img);
                        }
                    });
                });
            }
            weather(request);
        });

    //----three day forecast

    $("#threeDay").click(function(){
        weather(request);
    });


    //----seven day forecast
    $("#sevenDay").click(function(){
        $("tbody").html("");
        function weather(request) {
            request.done(function (data) {
                var dateObj = JSON.stringify(new Date(data.daily.data[0].time * 1000)).split('').slice(1, 11).join('');
                $("#forecastTable0").html("");
                var forecastTable0 = '';
                forecastTable0 += '<tr>';
                forecastTable0 += '<th scope="row">' + dateObj + '<td>' + '<span class="w_icon0"></span> </td> <td>' + data.daily.data[0].summary +'</td> <td>' + data.daily.data[0].temperatureHigh + " / " + data.daily.data[0].temperatureLow +'</td> <td>' + data.daily.data[0].windSpeed  + '</td> <td>' + data.daily.data[0].humidity  + '</td>';
                forecastTable0 += '</tr>';
                $('#forecastTable0').append(forecastTable0);

                $("#forecastTable1").html("");
                var forecastTable1 = '';
                forecastTable1 += '<tr>';
                forecastTable1 += '<th scope="row">' + dateObj + '<td>' + '<span class="w_icon1"></span> </td> <td>' + data.daily.data[1].summary +'</td> <td>' + data.daily.data[1].temperatureHigh + " / " + data.daily.data[1].temperatureLow +'</td> <td>' + data.daily.data[1].windSpeed  + '</td> <td>' + data.daily.data[1].humidity  + '</td>';
                forecastTable1 += '</tr>';
                $('#forecastTable1').append(forecastTable1);

                $("#forecastTable2").html("");
                var forecastTable2 = '';
                forecastTable2 += '<tr>';
                forecastTable2 += '<th scope="row">' + dateObj + '<td>' + '<span class="w_icon2"></span> </td> <td>' + data.daily.data[2].summary +'</td> <td>' + data.daily.data[2].temperatureHigh + " / " + data.daily.data[2].temperatureLow +'</td> <td>' + data.daily.data[2].windSpeed  + '</td> <td>' + data.daily.data[2].humidity  + '</td>';
                forecastTable2 += '</tr>';
                $('#forecastTable2').append(forecastTable2);

                $("#forecastTable3").html("");
                var forecastTable3 = '';
                forecastTable3 += '<tr>';
                forecastTable3 += '<th scope="row">' + dateObj + '<td>' + '<span class="w_icon3"></span> </td> <td>' + data.daily.data[3].summary +'</td> <td>' + data.daily.data[3].temperatureHigh + " / " + data.daily.data[3].temperatureLow +'</td> <td>' + data.daily.data[3].windSpeed  + '</td> <td>' + data.daily.data[3].humidity  + '</td>';
                forecastTable3 += '</tr>';
                $('#forecastTable3').append(forecastTable3);

                $("#forecastTable4").html("");
                var forecastTable4 = '';
                forecastTable4 += '<tr>';
                forecastTable4 += '<th scope="row">' + dateObj + '<td>' + '<span class="w_icon4"></span> </td> <td>' + data.daily.data[4].summary +'</td> <td>' + data.daily.data[4].temperatureHigh + " / " + data.daily.data[4].temperatureLow +'</td> <td>' + data.daily.data[4].windSpeed  + '</td> <td>' + data.daily.data[4].humidity  + '</td>';
                forecastTable4 += '</tr>';
                $('#forecastTable4').append(forecastTable4);

                $("#forecastTable5").html("");
                var forecastTable5 = '';
                forecastTable5 += '<tr>';
                forecastTable5 += '<th scope="row">' + dateObj + '<td>' + '<span class="w_icon5"></span> </td> <td>' + data.daily.data[5].summary +'</td> <td>' + data.daily.data[5].temperatureHigh + " / " + data.daily.data[5].temperatureLow +'</td> <td>' + data.daily.data[5].windSpeed  + '</td> <td>' + data.daily.data[5].humidity  + '</td>';
                forecastTable5 += '</tr>';
                $('#forecastTable5').append(forecastTable5);

                $("#forecastTable6").html("");
                var forecastTable6 = '';
                forecastTable6 += '<tr>';
                forecastTable6 += '<th scope="row">' + dateObj + '<td>' + '<span class="w_icon6"></span> </td> <td>' + data.daily.data[6].summary +'</td> <td>' + data.daily.data[6].temperatureHigh + " / " + data.daily.data[6].temperatureLow +'</td> <td>' + data.daily.data[6].windSpeed  + '</td> <td>' + data.daily.data[6].humidity  + '</td>';
                forecastTable6 += '</tr>';
                $('#forecastTable6').append(forecastTable6);



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
                    if (data.daily.data[0].icon === type.icon) {
                        $('.w_icon0').html(type.img);
                    }
                });
                weatherIcons.forEach(function (type) {
                    if (data.daily.data[1].icon === type.icon) {
                        $('.w_icon1').html(type.img);
                    }
                });
                weatherIcons.forEach(function (type) {
                    if (data.daily.data[2].icon === type.icon) {
                        $('.w_icon2').html(type.img);
                    }
                });
                weatherIcons.forEach(function (type) {
                    if (data.daily.data[3].icon === type.icon) {
                        $('.w_icon3').html(type.img);
                    }
                });
                weatherIcons.forEach(function (type) {
                    if (data.daily.data[4].icon === type.icon) {
                        $('.w_icon4').html(type.img);
                    }
                });
                weatherIcons.forEach(function (type) {
                    if (data.daily.data[5].icon === type.icon) {
                        $('.w_icon5').html(type.img);
                    }
                });
                weatherIcons.forEach(function (type) {
                    if (data.daily.data[6].icon === type.icon) {
                        $('.w_icon6').html(type.img);
                    }
                });
            });
        }
        weather(request);
    });


    $('#refresh').click(function(){
        $('tbody').html("");
        weather(request);
    });

});