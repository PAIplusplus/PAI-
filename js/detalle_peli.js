
    document.addEventListener("DOMContentLoaded", function () {
        const tabDetalles = document.querySelector(".nav-link[aria-current='page']");
        const tabTrailer = document.getElementById("tab-trailer");
        const contenidoDetalles = document.getElementById("contenido-detalles");
        const contenidoTrailer = document.getElementById("contenido-trailer");

        tabDetalles.addEventListener("click", function (e) {
            e.preventDefault();
            contenidoDetalles.style.display = "block";
            contenidoTrailer.style.display = "none";

            tabDetalles.classList.add("active");
            tabTrailer.classList.remove("active");
            tabDetalles.setAttribute("aria-current", "page");
            tabTrailer.removeAttribute("aria-current");
        });

        tabTrailer.addEventListener("click", function (e) {
            e.preventDefault();
            contenidoDetalles.style.display = "none";
            contenidoTrailer.style.display = "block";

            tabTrailer.classList.add("active");
            tabDetalles.classList.remove("active");
            tabTrailer.setAttribute("aria-current", "page");
            tabDetalles.removeAttribute("aria-current");
        });
    });

