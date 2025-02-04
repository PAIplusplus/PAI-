async function obtenerLista(token){
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,   
      'Accept': 'application/json'
      }
    });
    const data = await response.json();  
    return data;
  } catch (error) {
    console.error("Error al obtener las películas top10:", error);
    return null;  
  }
}


async function mostrarLista() {
  const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDNlODQyNDFjNTllODQ5ZjY4MGY2MDRmNTY5Nzc4YiIsIm5iZiI6MTczNzU2MjMyNi45NjgsInN1YiI6IjY3OTExOGQ2ZmI2MDlkOTI2ODI4YzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sGlTMmT37X3Vbw8jcEAJesSa38W4JjEt6yXicjFJDbA";  
  const data = await obtenerLista(apiToken);  

  if (data && data.results) {
      const container = document.getElementById("serie-trending-container");  
      container.innerHTML = ''; 

      data.results.forEach(pelicula => {
          const movieElement = document.createElement("div");
          movieElement.classList.add("movie-item");

          const posterUrl = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;

          movieElement.innerHTML = `
              <img src="${posterUrl}" alt="${pelicula.title}" style="width: 200px; height: 300px;" />
          `;
          container.appendChild(movieElement);  
      });
  } else {
      console.log("No se pudieron cargar las películas top.");
  }
}

document.addEventListener("DOMContentLoaded", mostrarLista);