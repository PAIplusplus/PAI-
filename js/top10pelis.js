async function obtenerTop10() {
  const apiToken = "803e84241c59e849f680f604f569778b"; 
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiToken}&language=es-ES&page=1`;  

  try {
      const response = await fetch(apiUrl);  
      if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Error al obtener los datos:", error);
      return null;
  }
}

// Función para mostrar el Top 10 de películas
async function mostrarTop10() {
  const data = await obtenerTop10();  

  if (data && data.results) {
      const container = document.getElementById("movie-top10-container");
      if (!container) {
          console.error("No se encontró el contenedor #movie-top10-container en el HTML.");
          return;
      }
      container.innerHTML = '';

      data.results.slice(5, 15).forEach((pelicula, index) => {
          const movieElement = document.createElement("div");
          movieElement.classList.add("movie-item");

          const posterUrl = pelicula.poster_path 
              ? `https://image.tmdb.org/t/p/w500${pelicula.poster_path}` 
              : 'https://via.placeholder.com/500x750?text=Imagen+No+Disponible';

          const overviewText = pelicula.overview ? pelicula.overview : "Descripción no disponible.";

          movieElement.innerHTML = `
              <div class="movie-number">${index + 1}</div>
              <div class="movie-poster">
                  <img src="${posterUrl}" alt="${pelicula.title}" />
                  <div class="movie-overlay">
                    <div class="movie-title">${pelicula.title}</div>
                    <p class="movie-overview">${overviewText}</p>
                    <br>
                    <div class="button-container">
                        <button class="btn fav-btn">❤️</button>
                        <a href="../htmls/detalle_peli.html">
                           <button class="btn add-btn">+</button>
                        </a>
                         <a href="../htmls/visionado.html">
                            <button class="btn play-btn">▶</button>
                        </a>
                    </div>
                  </div>
              </div>
          `;
          container.appendChild(movieElement);
      });
  } else {
      console.log("No se pudieron cargar las películas top.");
  }
}

document.addEventListener("DOMContentLoaded", mostrarTop10);
