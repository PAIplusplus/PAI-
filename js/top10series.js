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
      container.innerHTML = ''; // Limpiar el contenedor antes de agregar elementos

      data.results.slice(0, 10).forEach(serie => {
          const serieElement = document.createElement("div");
          serieElement.classList.add("movie-item");

          const posterUrl = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;

          serieElement.innerHTML = `
              <div class="serie-poster">
                  <img src="${posterUrl}" alt="${serie.name}" style="width: 200px; height: 300px;" />
              </div>
              <div class="serie-name">
                  <h3>${serie.name}</h3>
              </div>
          `;
          container.appendChild(serieElement);
      });
  } else {
      console.log("No se pudieron cargar las series top.");
  }
}

document.addEventListener("DOMContentLoaded", mostrarTop10Serie);
