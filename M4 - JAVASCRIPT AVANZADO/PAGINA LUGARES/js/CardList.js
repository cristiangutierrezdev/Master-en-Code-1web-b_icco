import Card from "./Card.js";

class CardList {
  constructor(data) {
    this.data = data;
  }

  renderCards(container) {
    container.innerHTML = "";

    this.data.forEach((country) => {
      // Guardamos el contenido actual del elemento padre para evitar sobreescribirlo.
      const currentHTML = container.innerHTML;
      const card = new Card(country.title, country.description, country.imgUrl);
      const cardHtml = card.createHTML();

      // Sumamos el contenido del elemento padre más el contenido de la nueva Card
      container.innerHTML = currentHTML + cardHtml;
    });
  }
}

export default CardList;
