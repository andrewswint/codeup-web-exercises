//-------------map setup--------------------

mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 15,
    center: [-117.0348, 32.9571],
    pitch: 60,
    minZoom: 5
});

//---------------marker-------------------

var markerOptions = {
    color: "blue"
};


//------------popup---------------------

// var popup = new mapboxgl.Popup()
//     .setLngLat([-117.0348, 32.9572])
//     .setHTML("<h4>Taco Shop!</h4>")
//     .addTo(map);

var tacoShopPopup = new mapboxgl.Popup()
    .remove()
    .setHTML("<p>I miss Taco Shops!</p>")
    .addTo(map);



var tacoShopMarker = new mapboxgl.Marker()
    .setLngLat([-117.0348, 32.9571])
    .addTo(map)
    .togglePopup()
    .setPopup(tacoShopPopup);
tacoShopMarker.setPopup(tacoShopPopup);