
var mapOptions = {
    center: [17.385044, 78.486671],
    zoom: 10
}

// instantiating the map with user defined mapOptions passed as parameter
var map = new L.map("map", mapOptions);

// instantiating the TileLayer Class which displays the desired map UI (passed as a String parameter)
var layer = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// add our custom layer to the map object created above
map.addLayer(layer);

