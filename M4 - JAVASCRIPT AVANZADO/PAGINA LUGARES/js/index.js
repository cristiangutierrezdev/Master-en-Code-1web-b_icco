import data from "./data.js";
import CardList from "./CardList.js";
import addListeners from "./addListeners.js";

const cardsContainer = document.querySelector("#main__cards");
const places = new CardList(data);

places.renderCards(cardsContainer);
addListeners(data);

export { places };
