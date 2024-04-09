// Simulamos los datos que llegan desde la base de datos.
const data = [
  {
    title: "Brazil",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis ea iusto nostrum officiis ratione quibusdam optio, magnam aut? Tempore, ex! Sunt eligendi molestiae atque vitae totam, commodi explicabo ipsam.",
    imgUrl: "./assets/brazil.jpg",
  },
  {
    title: "Portugal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis ea iusto nostrum officiis ratione quibusdam optio.",
    imgUrl: "./assets/portugal.jpg",
  },
  {
    title: "Mexico",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis ea iusto nostrum officiis ratione quibusdam optio, magnam aut? Tempore, ex! Sunt eligendi molestiae atque.",
    imgUrl: "./assets/mexico.jpg",
  },
];

const container = document.querySelector("#main__cards");
const modal = document.querySelector("#modal");
const modalClose = document.querySelector("#modal__close");
const modalTitle = document.querySelector("#modal__title");
const modalDesc = document.querySelector("#modal__description");
const modalImg = document.querySelector("#modal__image");

class Card {
  constructor(title, description, imgUrl) {
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }

  createHTML() {
    // `` --> estas comillas son llamadas template strings en JS
    const cardHtml = `
    <article class="main__card">
      <div class="main__card-img-container">
        <img class="main__card-img" src="${this.imgUrl}" alt="" />
      </div>
      <div class="main__card-body">
        <h3 class="main__card-title">${this.title}</h3>
        <p class="main__card-paragraph">
          ${this.description}
        </p>
        <div class="main__card-buttons">
          <button class="main__card-btn btn-visit" type="button">
            Visit place
          </button>
          <button class="main__card-btn main--btn-outline" type="button">
            Add to Favorites
          </button>
        </div>
      </div>
    </article>
    `;

    return cardHtml;
  }
}

data.forEach(function (country) {
  const currentHTML = container.innerHTML; // Guardamos el contenido actual del elemento padre para evitar sobreescribirlo.
  const card = new Card(country.title, country.description, country.imgUrl);
  const cardHtml = card.createHTML();

  container.innerHTML = currentHTML + cardHtml; // Sumamos el contenido del elemento padre más el contenido de la nueva Card
});

function openCloseModal() {
  modal.classList.toggle("modal--open");
}

const buttons = [...document.querySelectorAll(".btn-visit")]; // ... ---> estos tres puntos se llaman spread operator en JS

buttons.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    modalTitle.textContent = data[index].title;
    modalDesc.textContent = data[index].description;
    modalImg.src = data[index].imgUrl;

    openCloseModal();
  });
});

// Misma funcionalidad que el forEach

// for (let index = 0; index < buttons.length; index++) {
//   buttons[index].addEventListener("click", function () {
//     modalTitle.textContent = data[index].title;
//     modalDesc.textContent = data[index].description;
//     modalImg.src = data[index].imgUrl;

//     openCloseModal();
//   });
// }

modalClose.onclick = openCloseModal;
