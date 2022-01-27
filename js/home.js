var map = L.map('map').setView([50.9652183, 1.8630816], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ3Jpc2Noa2EiLCJhIjoiY2t5eDB2Y3A2MDBkbzJ2cm5mZWdyb2xmYSJ9.FHiXptvUB-OxImgY5v_JQQ'
}).addTo(map);

var gpx = '../Ressources/gps.gpx.xml'; // URL to your GPX file or the GPX itself
new L.GPX(gpx, {async: true}).on('loaded', function(e) {
  map.fitBounds(e.target.getBounds());
}).addTo(map);