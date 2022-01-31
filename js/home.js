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
  color: '#FF3300',
  opacity: 0.7,
  weight: 3,
  lineCap: 'round'
},
gpx_options: {
  joinTrackSegments: true,
}
}).on('loaded', function(e) {
  map.fitBounds(e.target.getBounds());
}).addTo(map);

/*
L.tileLayer.provider('Stamen.Watercolor').addTo(map);
*/

L.tileLayer.provider('MapBox', {
  id: 'grischka/ckyyjlyk7001n15qrjyusmkfj',
  accessToken: 'pk.eyJ1IjoiZ3Jpc2Noa2EiLCJhIjoiY2t5eDB2Y3A2MDBkbzJ2cm5mZWdyb2xmYSJ9.FHiXptvUB-OxImgY5v_JQQ'
}).addTo(map);

const info = document.querySelector(".temoignage_conteneur");
const url = "http://195.14.105.18:1337";
let dataResult = [];
const selector = document.querySelector(".avis");
let result1 = [];
let result2 = [];
let result3 = [];
const selector2 = document.getElementById("Grille_main");
const selector3 = document.getElementById("PartezEnVoyage_photos");

init();

function init() {
  getNews();
  renderData();
  getNews1();
  renderData1();
  getNews2();
  renderData2();
  getNews3();
  renderData3();
}

function renderData(data) {
  r = Object(data);
  for (let n in r.data) {

    const content = `
    <div class="temoignage_bloc">
      <img src="${url}${r.data[n].attributes.Photo.data.attributes.url}" alt="cycliste" class="cycliste1">
      <div class="info_temoignages" id="bloc_info_temoignage">
          <h1>${r.data[n].attributes.Titre}</h1>
          <p>${r.data[n].attributes.Description}</p>
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

function renderData2(data) {
  w = Object(data);
  for (let v in w.data) {

    const content2 = `
    <div>
      <img src="${url}${w.data[v].attributes.Illustration.data.attributes.url}" alt="cycliste" class="cycliste">
      <div class="div_h1_DouceurDuNord">
        <h1>${w.data[v].attributes.Titre}</h1>
      </div>
    </div>
`;

    selector2.innerHTML += content2;
  }
}

function getNews2() {
  fetch(`${url}/api/bloc-idees-homes?populate=*`)
    .then((data) => data.json())
    .then((result) => {
      result2 = result;
      console.log("result2", result2);
      renderData2(result2);
    });
}

function renderData3(data) {
  a = Object(data);
  for (let b in a.data) {

    const content3 = `
    <div>
      <h1>${a.data[b].attributes.Titre}</h1>
      <img src="${url}${a.data[b].attributes.Photo.data.attributes.url}" alt="cycliste" class="cycliste1">
    </div>
`;

    selector3.innerHTML += content3;
  }
}

function getNews3() {
  fetch(`${url}/api/partez-en-voyages?populate=*`)
    .then((data) => data.json())
    .then((result) => {
      result3 = result;
      console.log("result3", result3);
      renderData3(result3);
    });
}


function convertInFrenchDateString(dateString) {
  const dateFragments = dateString.split("-");
  return `${dateFragments[2]}/${dateFragments[1]}/${dateFragments[0]}`;
}

function getNews1() {
  fetch(`${url}/api/commentaires?populate=*`)
    .then((data) => data.json())
    .then((result) => {
      result1 = result;
      console.log("result1", result1);
      renderData1(result1);
    });
}
function renderData1(data) {
  a = Object(data);
  for (let x in a.data) {
    if(x<3){
      const content1 = `
          <div class="card">
          <div class="card-heure">
            <h4>${a.data[x].attributes.Date}</h4>
          </div>
          <div class="card-infos">
            <h1>${a.data[x].attributes.Prenom}</h1>
            <ul>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star-half-alt"></i></li>
            </ul>
          </div>
          <div class="etape">
            <h3>${a.data[x].attributes.etape}</h3>
          </div>
          <div class="note">
            <ul>
              <li>
                ${a.data[x].attributes.security} /5<br />
                <span>Sécurité</span>
              </li>
              <li>
                ${a.data[x].attributes.balisage} /5<br />
                <span>Balisage</span>
              </li>
              <li>
                ${a.data[x].attributes.interet} /5<br />
                <span>Intérêt</span>
              </li>
              <li>
                ${a.data[x].attributes.service} /5<br />
                <span>Services</span>
              </li>
            </ul>
          </div>
          <p>
          ${a.data[x].attributes.avis}
          </p>
          <div class="card-footer">
            <h5>0 réponse</h5>
            <h5>LIRE</h5>
          </div>
        </div>
    `;
    selector.innerHTML += content1;
    }
    }

}
