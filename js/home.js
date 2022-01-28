var map = L.map('map').setView([50.9652183, 1.8630816], 8);

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

const info = document.querySelector(".temoignage_conteneur");
const url = "http://195.14.105.18:1337";
let dataResult = [];

init();

function init() {
  getNews();
  renderData();
}

function renderData(data) {
  r = Object(data);
  for (let n in r.data) {

    const content = `
    <div class="temoignage_bloc">
      <img src="${url}${r.data[n].attributes.Photo.data.attributes.url}" alt="cycliste" class="cycliste1">
      <div class="info_temoignages">
          <h1>${r.data[n].attributes.Titre}</h1>
          <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
      </div>
    </div>
    `;

    info.innerHTML += content;
  }
}

function getNews() {
  fetch(`${url}/api/temoignages-cartes2?populate=*`)
    .then((data) => data.json())
    .then((result) => {
      dataResult = result;
      console.log("dataResult", dataResult);
      renderData(dataResult);
    });
}
