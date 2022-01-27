const info = document.querySelector(".grid");
const url = "http://195.14.105.18:1337";
let dataResult = [];

init();

function init() {
  getNews();
  renderData();
}

function convertInFrenchDateString(dateString) {
  const dateFragments = dateString.split("-");
  return `${dateFragments[2]}/${dateFragments[1]}/${dateFragments[0]}`;
}

function renderData(data) {
  r = Object(data);
  for (let n in r.data) {
    const content = `

            <div class="box">
            <img src="${url}${r.data[n].attributes.image.data[n].attributes.url}" alt="image" />
            <h1>${r.data[n].attributes.titre}</h1>
          </div>
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
