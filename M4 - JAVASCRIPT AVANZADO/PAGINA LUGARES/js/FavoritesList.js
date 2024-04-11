import Card from "./Card.js";

class FavoritesList {
  constructor() {
    this.list = [];
  }

  add(card) {
    this.list.push(card);
    alert("Se agregó el lugar");
  }

  remove() {
    this.list.pop();
    alert("Se eliminó el lugar");
  }

  renderFavorites(container) {
    container.innerHTML = "";

    this.list.forEach((country) => {
      const currentHTML = container.innerHTML;
      const card = new Card(country.title, country.description, country.imgUrl);
      const cardHtml = card.createFavoriteHTML();

      container.innerHTML = currentHTML + cardHtml;
    });
  }
}

export default FavoritesList;
