var map = L.map('map').setView([50.9652183, 1.8630816], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    style: 'mapbox://styles/grischka/ckyx19q0n001914o2l2l7vuxk',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ3Jpc2Noa2EiLCJhIjoiY2t5eDB2Y3A2MDBkbzJ2cm5mZWdyb2xmYSJ9.FHiXptvUB-OxImgY5v_JQQ'
}).addTo(map);

var gpx = '../Ressources/gps.gpx.xml'; // URL to your GPX file or the GPX itself
new L.GPX(gpx, {async: true,
marker_options: {
startIconUrl: '../img/red_location.png',
endIconUrl: '../img/red_location.png',
shadowUrl: ''
  },
polyline_options: {
  color: '#000066',
  opacity: 0.5,
  weight: 3,
  lineCap: 'round'
},
gpx_options: {
  joinTrackSegments: false,
}
}).on('loaded', function(e) {
  map.fitBounds(e.target.getBounds());
}).addTo(map);

const temoignages = document.querySelector(".cycliste1");
const url = "http://195.14.105.18:1337";
let vignettes = [];

function init(){
  getVignettes();
}  

function getVignettes(){
  fetch('${url}/api/temoignages-cartes2')
    .then(data => data.json())
    .then(result => {
      vignettes = result;
      console.log("vignettes", vignettes);
    })
    .catch(err => {
      console.error(err);
    });
}

const avis = document.querySelector(".avis");
const url_avis = "http://195.14.105.18:1337";
let vignettes_avis = [];

function init(){
  getVignettes();
}  

function getVignettes(){
  fetch('${url}/api/temoignages-cartes2')
    .then(data => data.json())
    .then(result => {
      vignettes_avis = result;
      console.log("vignettes_avis", vignettes_avis);
    })
    .catch(err => {
      console.error(err);
    });
}


console.log('hello');