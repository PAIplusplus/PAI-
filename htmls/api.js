async function obtenerDatos(url, token) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`  // Usar el token en la solicitud
            }
        });
        
        const data = await response.json();  // Convertir respuesta JSON
        return data;  // Retornar los datos obtenidos de la API
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return null;  
    }
}

// Función para mostrar las películas
async function mostrarPeliculas() {
    const apiToken = "803e84241c59e849f680f604f569778b"; 
    // https://api.themoviedb.org/3/movie/popular?api_key=803e84241c59e849f680f604f569778b
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiToken}`; 


    const data = await obtenerDatos(apiUrl, apiToken);  
    if (data && data.results) {
        const container = document.getElementById("movies-list");
        // recorrer
        data.results.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie-item");

            const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            movieElement.innerHTML = `
                <h3>${movie.title}</h3>
                <p>${movie.overview}</p>
                 <img src="${posterUrl}" alt="${movie.title}" style="width: 200px; height: 300px;"/> 
                <p>${movie.release_date}</p>
                <p>${movie.original_language}</p>
            `;
            container.appendChild(movieElement);
        });
    } else {
        console.log("No se pudieron cargar las películas.");
    }
}