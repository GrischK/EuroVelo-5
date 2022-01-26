const containerEtapes = document.querySelector(".container-etapes");
const url = "http://localhost:1337";
let allEtapes = [];
init();

function init() {
    getEtapes();
}

function getEtapes() {
    fetch(`${url}/api/etapes`)
        .then((data) => data.json())
        .then((result) => {
            allEtapes = result;
            console.log("allEtapes", allEtapes);
            renderEtapes(allEtapes);
        })
}

function renderEtapes(etapes) {
    let list = [];
    etapes.forEach((e) => {
        const item = `<h1>${e.depart}</h1>`;
        list = [...list, item];
    })
    console.log(list);
}