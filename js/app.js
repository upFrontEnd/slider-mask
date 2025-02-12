document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".image-grid");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (event) => {
        isDown = true;
        slider.classList.add("active");
        startX = event.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (event) => {
        if (!isDown) return;
        event.preventDefault();
        const x = event.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Ajuste la vitesse ici
        slider.scrollLeft = scrollLeft - walk;
    });

    // Désactiver le menu contextuel sur le slider
    slider.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });
});
