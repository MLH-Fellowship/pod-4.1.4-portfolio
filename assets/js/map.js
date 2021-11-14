
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

/*const fellows = [{
    name: 'Helen Du',
    location: 'Minnesota, United States',
    cords: [46.369, -94.131]
},
{
    name: 'Dinu Botan',
    location: 'Budapest, Hungary',
    cords: [47.4979937, 19.0403594]
},
{
    name: 'Dhanashree Godase',
    location: 'Pune, Maharashtra, India',
    cords: [18.5214280, 74.8544541]
},
{
    name: 'Sargam Agarwal',
    location: 'Lucknow, Uttar Pradesh, India',
    cords: [26.8381000, 80.9346001]
},
{
    name: 'Shravani Chavan',
    location: 'Pune, Maharashtra, India',
    cords: [18.5214280, 73.8544541]
},
{
    name: 'Rajat Verma',
    location: 'Meerut, Uttar Pradesh, India',
    cords: [28.9963296, 77.7061915]
},
{
    name: 'Bhavika Gianey',
    location: 'Ajmer, Rajasthan, India',
    cords: [26.4643, 74.6329]
},
{
    name: 'Osakpolor Obaseki',
    location: 'Lagos, Nigeria',
    cords: [6.4550575, 3.3941795]

},
{
    name: 'Drishti Peshwani',
    location: 'Pune, Maharashtra, India',
    cords: [19.5214280, 73.8544541]
},
{
    name: 'Pratyush Jaiswal',
    location: 'Kharagpur, West Bengal, India',
    cords: [22.3430900, 87.3012875]
},
{
    name: 'Ekjot Kaur',
    location: 'New Delhi, India',
    cords: [27.6146, 77.2123]
},
{
    name: 'Dhwaj Gupta',
    location: 'New Delhi, India',
    cords: [28.6146, 77.2123]
},
];*/

// const DATA = {{ site.data | jsonify }};

console.log(DATA);

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