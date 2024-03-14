import movies from "../data/movies.json" assert { type: "json" };

const addToFavourites = (movie) => {
  let favouritesMovies = JSON.parse(localStorage.getItem("movies")) || [];
  favouritesMovies.push(movie);
  localStorage.setItem("movies", JSON.stringify(favouritesMovies));
};

const searchMovie = (id) => {
  return movies[id];
};

const moviesContainer = document.getElementById("movies-container");

let moviesCards = "";
let arrayIndex = []; //0,1,2,3,4,5,6,7,8
movies.forEach((movie, index) => {
  arrayIndex.push(index);
  moviesCards += `
            <div class="card" style="width: 18rem;">
                <img src=${movie.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${movie.titulo}</h5>
                    <p class="card-text">${movie.resumen}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Lanzamiento: ${movie.lanzamiento}</li>
                    <li class="list-group-item">Duración: ${movie.duracion}</li>
                    <li class="list-group-item">Director: ${movie.director}</li>
                   <
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Ver Película</a>
                    <button id=${index}  class="card-link">Agregar a favoritos</button>
                </div>
            </div>
            `;
});
moviesContainer.innerHTML = moviesCards;

arrayIndex.forEach((index) => {
  let card = document.getElementById(index);
  card.addEventListener("click", function (event) {
    let selectedMovie = searchMovie(event.target.id);
    addToFavourites(selectedMovie);
  });
});
