
var mapOptions = {
    center: [44.8, -2.46],
    zoom: 3
}

// instantiating the map with user defined mapOptions passed as parameter
var map = new L.map("map", mapOptions);

// instantiating the TileLayer Class which displays the desired map UI (passed as a String parameter)
var layer = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// add our custom layer to the map object created above
map.addLayer(layer);

DATA.fellows.forEach((fellow) => {
    const marker = L.icon({
        iconUrl: `/assets/img/${fellow.img}`,
        iconSize: [50, 50], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
        className: 'marker',
    });

    const card = ` 
<div class="container">
  <h4><b>${fellow.name}</b></h4>
  ${fellow.description}<br/><br/>
  ${fellow.location}
</div>
`; L.marker(fellow.cords, {
        icon: marker,
    }).addTo(map).bindPopup(card);
});
