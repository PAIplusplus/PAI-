async function obtenerPeliculasProximas(token) {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });

        const data = await response.json();  
        return data;  
    } catch (error) {
        console.error("Error al obtener las películas próximas:", error);
        return null;  
    }
}

async function mostrarPeliculasProximas() {
    const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDNlODQyNDFjNTllODQ5ZjY4MGY2MDRmNTY5Nzc4YiIsIm5iZiI6MTczNzU2MjMyNi45NjgsInN1YiI6IjY3OTExOGQ2ZmI2MDlkOTI2ODI4YzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sGlTMmT37X3Vbw8jcEAJesSa38W4JjEt6yXicjFJDbA";  
    const data = await obtenerPeliculasProximas(apiToken);  

    if (data && data.results) {
        const container = document.getElementById("movie-upcoming-container");  
        container.innerHTML = '';  

        data.results.forEach(pelicula => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie-carousel-item");

            const posterUrl = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
            const overviewText = pelicula.overview ? pelicula.overview : "Sinopsis no disponible";

            movieElement.innerHTML = `
                <img src="${posterUrl}" alt="${pelicula.title}" />
                <div class="movie-overlay">
                    <div class="movie-title">${pelicula.title}</div>
                    <p class="movie-overview">${overviewText}</p>
                    <br>
                    <div class="button-container">
                        <button class="btn fav-btn">❤️</button>
                        <button class="btn add-btn">+</button>
                        <button class="btn play-btn">▶</button>
                        <button class="btn detalles-btn">Detalles</button>
                    </div>
                </div>
            `;
            container.appendChild(movieElement);
        });

    } else {
        console.log("No se pudieron cargar las películas próximas.");
    }
}

mostrarPeliculasProximas();
