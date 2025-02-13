document.addEventListener("DOMContentLoaded", () => {

    const headerElement = document.getElementById("header");
    const numStars = 35;
    const animationDelay = 10;

    const stars = [];

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = `${Math.random() * 90}px`;
        star.style.left = `${Math.random() * headerElement.offsetWidth}px`;
        star.style.animationDelay = `${Math.random() * animationDelay}s`;

        headerElement.appendChild(star);
        stars.push(star);
    }

    function animateStars() {
        stars.forEach(star => {
            if (window.getComputedStyle(star).opacity < 0.15) {
                star.style.top = `${Math.random() * 90}px`;
                star.style.left = `${Math.random() * headerElement.offsetWidth}px`;
            }
        });
        setTimeout(animateStars, 3000);
    }

    animateStars();
});