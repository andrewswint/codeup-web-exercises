//-------------map setup--------------------
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 12,
    center: [-117.0348, 32.9571],
    pitch: 60,
    minZoom: 5
});

var array = [
    {
        name: "Taco Shop",
        address: "13654 Midland Rd #9-10, Poway, CA 92064"
    },
    {
        name: "McDonalds",
        address: "12510 Poway Rd, Poway, CA 92064"
    },
    {
        name: "Subway",
        address: "13509 Poway Rd, Poway, CA 92064"
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

// var popup = new mapboxgl.Popup()
//     .setLngLat([-117.0348, 32.9572])
//     .setHTML("<h4>Taco Shop!</h4>")
//     .addTo(map);

        var tacoShopPopup = new mapboxgl.Popup()
            .setText(element.name)
            .addTo(map);



        var tacoShopMarker = new mapboxgl.Marker()
            .setLngLat(results)
            .addTo(map)
            .togglePopup()
            .setPopup(tacoShopPopup);


        tacoShopMarker.setPopup(tacoShopPopup);
    });
});
//-----------geocode--------------------
// var results;
// geocode(array[i].address, mapboxToken).then(function(result){
//     results = result;
//
//
// //-------------map setup--------------------
//
// mapboxgl.accessToken = mapboxToken;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/light-v9',
//     zoom: 15,
//     center: results,
//     pitch: 60,
//     minZoom: 5
// });
//
// //---------------marker-------------------
//
// var markerOptions = {
//     color: "blue"
// };
//
//
// //------------popup---------------------
//
// // var popup = new mapboxgl.Popup()
// //     .setLngLat([-117.0348, 32.9572])
// //     .setHTML("<h4>Taco Shop!</h4>")
// //     .addTo(map);
//
// var tacoShopPopup = new mapboxgl.Popup()
//     .setHTML("<p>I miss Taco Shops!</p>")
//     .addTo(map);
//
//
//
// var tacoShopMarker = new mapboxgl.Marker()
//     .setLngLat(results)
//     .addTo(map)
//     .togglePopup()
//     .setPopup(tacoShopPopup);
//
//
// tacoShopMarker.setPopup(tacoShopPopup);
// });
