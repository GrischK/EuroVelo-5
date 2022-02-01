const info = document.querySelector(".grid");
const url = "http://195.14.105.18:1337";
let dataResult = [];
const selector = document.querySelector(".avis");
let result1 = [];

init();

function init() {
  getNews();
  renderData();
  getNews1();
  renderData1();
}

function renderData(data) {
  r = Object(data);
  for (let n in r.data) {
    const content = `
          <a href="article.html">
            <div class="box">
          <img src="${url}${r.data[n].attributes.image.data.attributes.url}" alt="image" />
            <h1>${r.data[n].attributes.titre}</h1>
          </div></a>
    `;

    info.innerHTML += content;
  }
}

function getNews() {
  fetch(`${url}/api/temoignages?populate=*`)
    .then((data) => data.json())
    .then((result) => {
      dataResult = result;
      console.log("dataResult", dataResult);
      renderData(dataResult);
    });
}

/*-----------------------------------------------*/

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
    var time = a.data[x].attributes.heure.split(":00.000").join(" ");
    const content1 = `

            <div class="card">
            <div class="card-heure">
              <h4>${convertInFrenchDateString(
                a.data[x].attributes.Date
              )} ${time}</h4>
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
