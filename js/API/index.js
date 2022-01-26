// r.data[1].attributes.title  : Ligne a utiliser pour recup element

const info = document.querySelector(".test");
const url = "http://localhost:1337";
let dataResult = [];

init();

function init() {
  getNews();
}

function renderData(data) {
    r = Object(data)
    for (let n in r.data){
        console.log(r.data[n].attributes.title)
    }
}

function getNews() {
  fetch(`${url}/api/news-euro-velos?populate=*`)
    .then((data) => data.json())
    .then((result) => {
        dataResult = result;
      console.log("dataResult", dataResult);
      renderData(dataResult);
    });
}


