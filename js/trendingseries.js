async function obtenerTrendingSerie(token) {
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
      console.error("Error al obtener las series trending:", error);
      return null; 
  }
}

async function mostrarTrendingSerie() {
  const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDNlODQyNDFjNTllODQ5ZjY4MGY2MDRmNTY5Nzc4YiIsIm5iZiI6MTczNzU2MjMyNi45NjgsInN1YiI6IjY3OTExOGQ2ZmI2MDlkOTI2ODI4YzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sGlTMmT37X3Vbw8jcEAJesSa38W4JjEt6yXicjFJDbA";  
  const data = await obtenerTrendingSerie(apiToken);  

  if (data && data.results) {
      const container = document.getElementById("serie-trending-container");  
      container.innerHTML = ''; 

      data.results.slice(2, 30).forEach(serie => {
          const movieElement = document.createElement("div");
          movieElement.classList.add("movie-item");

          const posterUrl = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
          const overviewText = serie.overview ? serie.overview : "Sinopsis no disponible";

          movieElement.innerHTML = `
          <div class="serie-poster">
              <img src="${posterUrl}" alt="${serie.name}" style="height: 300px;" />
          </div>
          <div class="movie-overlay">
              <div class="movie-title">${serie.name}</div>
              <p class="movie-overview">${overviewText}</p>
              <div class="button-container">
                  <button class="btn fav-btn">❤️</button>
                  <button class="btn add-btn">+</button>
                  <a href="../htmls/visionado.html">
                      <button class="btn play-btn">▶</button>
                  </a>
                  <a href="../htmls/detalle_peli.html" class="detalles-btn">
                      <button class="btn">Detalles</button>
                  </a>
              </div>
          </div>
      `;
      
      console.log("HTML generado para cada serie:", movieElement.outerHTML);
          container.appendChild(movieElement);  
      });
  } else {
      console.log("No se pudieron cargar las series trending.");
  }
}

document.addEventListener("DOMContentLoaded", mostrarTrendingSerie);
