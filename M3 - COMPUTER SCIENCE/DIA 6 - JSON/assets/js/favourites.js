let movies = JSON.parse(localStorage.getItem("movies")) || [];
const moviesContainer = document.getElementById("movies-container");

if (movies.length) {
  let moviesCards = "";
  movies.forEach((movie, index) => {
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
                    </div>
                </div>
                `;
  });
  moviesContainer.innerHTML = moviesCards;
} else {
  moviesContainer.innerHTML = "No has agregado películas a tus favoritos";
}
