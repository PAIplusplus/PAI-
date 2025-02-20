
document.addEventListener("DOMContentLoaded", function () {
    const tabDetalles = document.querySelector(".nav-link[aria-current='page']");
    const tabEpisodios = document.getElementById("tab-trailer");
    const contenidoDetalles = document.getElementById("contenido-detalles");
    const contenidoEpisodios = document.getElementById("episodios");

    tabDetalles.addEventListener("click", function (e) {
        e.preventDefault();
        contenidoDetalles.style.display = "none";
        episodios.style.display = "block";

        tabDetalles.classList.add("active");
        tabEpisodios.classList.remove("active");
        tabDetalles.setAttribute("aria-current", "page");
        tabEpisodios.removeAttribute("aria-current");
    });

    tabEpisodios.addEventListener("click", function (e) {
        e.preventDefault();
        contenidoDetalles.style.display = "block";
        contenidoEpisodios.style.display = "none";

        tabEpisodios.classList.add("active");
        tabDetalles.classList.remove("active");
        tabEpisodios.setAttribute("aria-current", "page");
        tabDetalles.removeAttribute("aria-current");
    });
});

