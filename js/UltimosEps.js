async function obtenerDatos(url, token) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`  
            }
        });

        const data = await response.json();  
        return data;  
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return null;  
    }
}


async function mostrarEpisodios() {
    const apiToken = "803e84241c59e849f680f604f569778b";  
    const apiUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiToken}&language=es-ES&page=1`;  

    const data = await obtenerDatos(apiUrl, apiToken);  
    if (data && data.results) {
        const container = document.getElementById("carousel-inner"); 
        container.innerHTML = '';  

        data.results.forEach(serie => {
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("movie-carousel-item");

            const posterUrl = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
            carouselItem.innerHTML = `
                <img src="${posterUrl}" alt="${serie.name}" />
                <div class="movie-title">${serie.name}</div>
            `;
            container.appendChild(carouselItem);  
        });
    } else {
        console.log("No se pudieron cargar las series.");
    }
}

mostrarEpisodios();
