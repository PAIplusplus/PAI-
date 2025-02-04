async function obtenerPeliculasTrending(token) {
    try {
        const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });

        const data = await response.json();  
        return data; 
    } catch (error) {
        console.error("Error al obtener las películas populares:", error);
        return null;  
    }
}

async function mostrarPeliculasTrending() {
    const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDNlODQyNDFjNTllODQ5ZjY4MGY2MDRmNTY5Nzc4YiIsIm5iZiI6MTczNzU2MjMyNi45NjgsInN1YiI6IjY3OTExOGQ2ZmI2MDlkOTI2ODI4YzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sGlTMmT37X3Vbw8jcEAJesSa38W4JjEt6yXicjFJDbA";  
    const data = await obtenerPeliculasTrending(apiToken);  

    if (data && data.results) {
        const container = document.getElementById("movie-trending-container");  
        container.innerHTML = '';  

        data.results.forEach(pelicula => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie-carousel-item");

            const posterUrl = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
            const overviewText = pelicula.overview ? pelicula.overview : "Sinopsis no disponible";

            movieElement.innerHTML = `
                <img src="${posterUrl}" alt="${pelicula.title || pelicula.name}" />
                <div class="movie-overlay">
                    <div class="movie-title">${pelicula.title || pelicula.name}</div>
                    <p class="movie-overview">${overviewText}</p>
                    <br>
                    <div class="button-container">
                        <button class="btn fav-btn">❤️</button>
                        <button class="btn add-btn">+</button>
                     <a href="../htmls/visionado.html">
                            <button class="btn play-btn">▶</button>
                        </a>
                        <a href="../htmls/detalle_serie.html" class="detalles-btn">
                            <button class="btn">Detalles</button>
                        </a>
                    </div>
                </div>
            `;
            container.appendChild(movieElement);  
        });

    } else {
        console.log("No se pudieron cargar las películas populares.");
    }
}

mostrarPeliculasTrending();
