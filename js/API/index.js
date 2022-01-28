// r.data[1].attributes.title  : Ligne a utiliser pour recup element

const info = document.querySelector(".grille");
const url = "http://195.14.105.18:1337";
let dataResult = [];

init();

function init() {
  getNews();
  renderData();
  convertInFrenchDateString("2022-01-19T14:30:00.000Z")
}

function convertInFrenchDateString(dateString) {
  const dateFragments = dateString.split("-");
  return `${dateFragments[2]}/${dateFragments[1]}/${dateFragments[0]}`;

}

function renderData(data) {
  r = Object(data);
  for (let n in r.data) {
    const dateFR = convertInFrenchDateString(r.data[n].attributes.date);

    const content = `

            <div class="item">
                <img src="${url}${r.data[n].attributes.images.data.attributes.url}" alt="iamge de présentation">
                <div class="flex-box">
                    <h3>${dateFR}</h3>
                    <h1>${r.data[n].attributes.title}</h1>
                </div>
                <p>${r.data[n].attributes.description}</p>
            </div>
    `;

    info.innerHTML += content;
  }
}

function getNews() {
  fetch(`${url}/api/eurovelos?populate=*`)
    .then((data) => data.json())
    .then((result) => {
      dataResult = result;
      console.log("dataResult", dataResult);
      renderData(dataResult);
    });
}
