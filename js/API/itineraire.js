const info = document.querySelector(".grille-etapes");
const url = "http://195.14.105.18:1337"

let dataResult = [];

init();

function init() {
  getEtapes();
  renderData();
}

// r.data[n].attributes.city_start

function renderData(data) {
  r = Object(data)
  for (let n in r.data){
    console.log(data);
    const content = `
      <div class="pane-etapes">
        <div class="image">
            <img src="${url}${r.data[n].attributes.image.data.attributes.url}" alt="Image Velo">
            <p class="kilometres">${r.data[n].attributes.km} Km</p>
        </div>
        <div class="section">
            <ul class="banniere">
                <li class="text">Nature, Patrimoine</li>
                <li class="like"><a href="#"><i class="far fa-heart"></i></a></li>
            </ul>
            <div class="difficulty">
                <p>${r.data[n].attributes.difficulty}</p>
            </div>
            <h2>${r.data[n].attributes.city_start} / ${r.data[n].attributes.city_end}</h2>
            <p class="description">${r.data[n].attributes.description}</p>
        </div>
      </div>
      `;

      info.innerHTML += content;
  }
}

function getEtapes() {
  fetch(`${url}/api/etapes?populate=*`)
    .then((data) => data.json())
    .then((result) => {
      dataResult = result;
      renderData(dataResult);
    });
}