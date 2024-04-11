import openCloseModal from "./modal.js";
import FavoritesList from "./FavoritesList.js"
import data from "./data.js";
import {places} from "./index.js"

// obtenemos todos los elementos HTML que vamos a utilizar o modificar
const modalTitle = document.querySelector("#modal__title");
const modalDesc = document.querySelector("#modal__description");
const modalImg = document.querySelector("#modal__image");
const modalClose = document.querySelector("#modal__close");
const placesBtn = document.querySelector("#places-btn");
const favoritesBtn = document.querySelector("#favorites-btn");
const favoritesContainer = document.querySelector("#main__cards");

const favorites = new FavoritesList()

// funcion que agrega los eventos a los botones que son dinamicos, osea,
// que se borran y se vuelven a crear en la pagina
function addListeners(arreglo) {
  // ... ---> estos tres puntos se llaman spread operator en JS
  const buttons = [...document.querySelectorAll(".btn-visit")];
  const favoriteBtns = [...document.querySelectorAll(".btn-favorite")];

  buttons.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      modalTitle.textContent = arreglo[index].title;
      modalDesc.textContent = arreglo[index].description;
      modalImg.src = arreglo[index].imgUrl;

      openCloseModal();
    });
  });

  favoriteBtns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      favorites.add(arreglo[index])
    });
  });
}

// agregamos los eventos a los botones que no cambian nunca
modalClose.onclick = openCloseModal;

favoritesBtn.onclick = function () {
  favorites.renderFavorites(favoritesContainer)
  addListeners(data)
}

placesBtn.onclick = function () {
  places.renderCards(favoritesContainer);
  addListeners(data)
}

// Misma funcionalidad que el forEach

// for (let index = 0; index < buttons.length; index++) {
//   buttons[index].addEventListener("click", function () {
//     modalTitle.textContent = data[index].title;
//     modalDesc.textContent = data[index].description;
//     modalImg.src = data[index].imgUrl;

//     openCloseModal();
//   });
// }

export default addListeners;
