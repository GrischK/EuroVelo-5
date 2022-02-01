const info = document.querySelector(".article");
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

            <section class="article">
      <div class="article_content">
        <img src="${url}${r.data[n].attributes.image.data[n].attributes.url}" alt="image" />
        <div class="content">
          <h3>${r.data[n].attributes.titre_image}</h3>
          <p>
            ${r.data[n].attributes.para_image}
          </p>
        </div>
      </div>
      <div class="article_content2">
        <div class="content2">
          <h3>${r.data[n].attributes.titre_image}</h3>
          <p>
            ${r.data[n].attributes.para_image2}
          </p>
        </div>
        <img src="${url}${r.data[n].attributes.image.data[1].attributes.url}" alt="image" />
      </div>
      <div class="article_content">
        <img src="${url}${r.data[n].attributes.image.data[2].attributes.url}" alt="image" />
        <div class="content">
          <h3>${r.data[n].attributes.titre_image}</h3>
          <p>
            ${r.data[n].attributes.para_image}
          </p>
        </div>
      </div>

      <div class="foot">
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit !</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem praesentium ipsa sed laborum possimus necessitatibus
          delectus quae odio. Ducimus unde labore corrupti numquam magni hic
          nemo maiores impedit officiis veniam.
        </p>
      </div>
    </section>
    `;

    info.innerHTML += content;
  }
}
function getNews() {
  fetch(`${url}/api/articles?populate=*`)
    .then((data) => data.json())
    .then((result) => {
      dataResult = result;
      console.log("dataResult", dataResult);
      renderData(dataResult);
    });
}
