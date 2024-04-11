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
          <button class="main__card-btn main--btn-outline btn-favorite" type="button">
            Add to Favorites
          </button>
        </div>
      </div>
    </article>
    `;

    return cardHtml;
  }

  createFavoriteHTML() {
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
      </div>
    </article>
    `;

    return cardHtml;
  }
}

export default Card;