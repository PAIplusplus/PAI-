async function obtenerSeriesPopulares(url, token) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });

        const data = await response.json();  
        return data;  
    } catch (error) {
        console.error("Error al obtener las series populares:", error);
        return null;  
    }
}

async function mostrarSeriesPopulares() {
    const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDNlODQyNDFjNTllODQ5ZjY4MGY2MDRmNTY5Nzc4YiIsIm5iZiI6MTczNzU2MjMyNi45NjgsInN1YiI6IjY3OTExOGQ2ZmI2MDlkOTI2ODI4YzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sGlTMmT37X3Vbw8jcEAJesSa38W4JjEt6yXicjFJDbA"; 
    const apiUrl = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`;  

    const data = await obtenerSeriesPopulares(apiUrl, apiToken);  
    if (data && data.results) {
        const container = document.getElementById("carousel-inner-series");  
        container.innerHTML = '';  

        data.results.forEach(serie => {
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("movie-carousel-item");

            const posterUrl = serie.poster_path ? `https://image.tmdb.org/t/p/w500${serie.poster_path}` : '../images/serie.jpeg'; 
            const overviewText = serie.overview ? serie.overview : "Sinopsis no disponible";

            carouselItem.innerHTML = `
                <img src="${posterUrl}" alt="${serie.name}" style="width: 200px; height: 300px; border-radius: 20px;" />
                <div class="movie-overlay">
                    <div class="movie-title">${serie.name}</div>
                    <p class="movie-overview">${overviewText}</p>
                    <br>
                    <div class="button-container">
                        <button class="btn fav-btn">❤️</button>
                        <button class="btn add-btn">+</button>
                        <a href="../htmls/visionado.html">
                            <button class="btn play-btn">▶</button>
                        </a>
                        <a href="../htmls/detalle_serie.html"  class="detalles-btn">
                            <button class="btn">Detalles</button>
                        </a>
                    </div>
                </div>
            `;
            container.appendChild(carouselItem);  
        });
    } else {
        console.log("No se pudieron cargar las series populares.");
    }
}

mostrarSeriesPopulares();
