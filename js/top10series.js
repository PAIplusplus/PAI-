async function obtenerTop10Serie(token) {
  try {
      const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,   
              'Accept': 'application/json'
          }
      });

      if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json(); 
      return data; 

  } catch (error) {
      console.error("Error al obtener las series top10:", error);
      return null;
  }
}

async function mostrarTop10Serie() {
  const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDNlODQyNDFjNTllODQ5ZjY4MGY2MDRmNTY5Nzc4YiIsIm5iZiI6MTczNzU2MjMyNi45NjgsInN1YiI6IjY3OTExOGQ2ZmI2MDlkOTI2ODI4YzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sGlTMmT37X3Vbw8jcEAJesSa38W4JjEt6yXicjFJDbA";
  const data = await obtenerTop10Serie(apiToken);

  if (data && data.results) {
      const container = document.getElementById("serie-top10-container");
      container.innerHTML = ''; 

      data.results.slice(0, 10).forEach((serie, index) => {
          const serieElement = document.createElement("div");
          serieElement.classList.add("movie-item");

          const posterUrl = serie.poster_path 
              ? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
              : '../imagenes/placeholder.jpg'; // Imagen de respaldo si no hay poster

          const overviewText = serie.overview 
              ? serie.overview.slice(0, 100) + "..." 
              : "Sin descripción.";

          serieElement.innerHTML = `
              <div class="movie-number">${index + 1}</div>
              <div class="movie-poster">
                  <img src="${posterUrl}" alt="${serie.name}" />
                  <div class="movie-overlay">
                    <div class="movie-title">${serie.name}</div>
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
          container.appendChild(serieElement);
      });
  } else {
      console.log("No se pudieron cargar las series top.");
  }
}

document.addEventListener("DOMContentLoaded", mostrarTop10Serie);
