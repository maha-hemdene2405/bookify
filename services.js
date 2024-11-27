// services.js

// Fonction pour démarrer automatiquement le carousel avec un intervalle personnalisé
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#carouselExampleCaptions");
    if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5000, // Temps entre chaque slide (5 secondes)
            ride: "carousel", // Démarrage automatique
        });

        // Logique pour ajouter un effet visuel lors du changement de slide
        carousel.addEventListener("slide.bs.carousel", (event) => {
            const caption = event.relatedTarget.querySelector(".carousel-caption");
            if (caption) {
                caption.style.opacity = "0"; // Masquer
                setTimeout(() => {
                    caption.style.opacity = "1"; // Réapparaître
                    caption.style.transition = "opacity 0.5s ease-in-out";
                }, 100);
            }
        });
    }
});

// Ajout d'une interaction hover sur les items de navigation du carousel
document.querySelectorAll(".carousel-control-prev, .carousel-control-next").forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.2)"; // Zoom au survol
        button.style.transition = "transform 0.3s ease";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)"; // Retour à la taille normale
    });
});
