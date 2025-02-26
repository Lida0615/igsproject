document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");
    const services = document.getElementById("services");

    if (!menu || !menuBtn || !services) return;

    function toggleMenu() {
        menu.classList.toggle("hidden");
    }

    function checkScroll() {
        if (window.innerWidth >= 1700) return;

        const shouldHide = window.scrollY >= services.offsetTop / 2 ;
        
        if (shouldHide) {
            menu.classList.add("hidden");
            menuBtn.classList.add("visible");
        } else {
            menu.classList.remove("hidden");
            menuBtn.classList.remove("visible");
        }
    }

    menuBtn.addEventListener("click", toggleMenu);
    window.addEventListener("scroll", () => requestAnimationFrame(checkScroll));
    window.addEventListener("resize", checkScroll);

    checkScroll(); // Проверка при загрузке
});
