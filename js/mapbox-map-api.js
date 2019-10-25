//-------------map setup--------------------
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 1.5,
    center: [-40.5994, 10.6731],
    minZoom: 0
});

var array = [
    {
        name: "Taco Shop",
        address: "13654 Midland Rd #9-10, Poway, CA 92064"
    },
    {
        name: "Hotel Horner",
        address: "3822 Lauterbrunnen, Switzerland"
    },
    {
        name: "Bar Parete Zebrata\n",
        address: "Località Gaggiolo, 31-3, 38074 Dro TN, Italy"
    }
];

array.forEach(function (element) {
    var results;
    geocode(element.address, mapboxToken).then(function(result){
        results = result;

//---------------marker-------------------

        var markerOptions = {
            color: "blue"
        };

//------------popup---------------------

        var restPopup = new mapboxgl.Popup()
            .setText(element.name)
            .addTo(map);



        var restMarker = new mapboxgl.Marker()
            .setLngLat(results)
            .addTo(map)
            .togglePopup()
            .setPopup(restPopup);


        restMarker.setPopup(restPopup);
    });
});
