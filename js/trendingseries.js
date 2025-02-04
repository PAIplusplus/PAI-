  
async function obtenerTrendingSerie(token){
    try {
      const options =await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US',{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,   
          'Accept': 'application/json'
        }
      });
    }catch{
          console.error("Error al obtener las series top10:", error);
          return null; 
    }
  }

  async function mostrarTrendingSerie() {
    const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDNlODQyNDFjNTllODQ5ZjY4MGY2MDRmNTY5Nzc4YiIsIm5iZiI6MTczNzU2MjMyNi45NjgsInN1YiI6IjY3OTExOGQ2ZmI2MDlkOTI2ODI4YzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sGlTMmT37X3Vbw8jcEAJesSa38W4JjEt6yXicjFJDbA";  
    const data = await obtenerTrendingSerie(apiToken);  
  
    if (data && data.results) {
        const container = document.getElementById("serie-trending-container");  
        container.innerHTML = ''; 
  
        data.results.forEach(serie => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie-item");
  
            const posterUrl = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
  
            movieElement.innerHTML = `
                <img src="${posterUrl}" alt="${serie.title}" style="width: 200px; height: 300px;" />
            `;
            container.appendChild(movieElement);  
        });
    } else {
        console.log("No se pudieron cargar las series trending.");
    }
  }
  
  document.addEventListener("DOMContentLoaded", mostrarTrendingSerie);