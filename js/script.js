document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".background-container");
    const dropCount = 7; // Количество капель
    const drops = [];

    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement("div");
        drop.classList.add("oval");

        // Генерация случайных размеров
        const size = (Math.random() * 150 + 150) * 2; // Размер от 300 до 600 пикселей
        drop.style.width = `${size}px`;
        drop.style.height = `${size * 0.6}px`; // Овальная форма

        let posX = Math.random() * (window.innerWidth - size);
        let posY = Math.random() * (window.innerHeight - size);

        drop.style.left = `${posX}px`;
        drop.style.top = `${posY}px`;

        container.appendChild(drop);

        // Добавляем капли в массив с параметрами движения
        drops.push({
            element: drop,
            x: posX,
            y: posY,
            size: size,
            speedX: (Math.random() * 2 - 1) * 0.5, // Замедленное движение
            speedY: (Math.random() * 2 - 1) * 0.5
        });
    }

    function animateDrops() {
        drops.forEach(drop => {
            drop.x += drop.speedX;
            drop.y += drop.speedY;

            // Ограничиваем движение внутри экрана
            if (drop.x < 0) {
                drop.x = 0;
                drop.speedX *= -1;
            } else if (drop.x + drop.size > window.innerWidth) {
                drop.x = window.innerWidth - drop.size;
                drop.speedX *= -1;
            }

            if (drop.y < 0) {
                drop.y = 0;
                drop.speedY *= -1;
            } else if (drop.y + drop.size * 0.6 > window.innerHeight) {
                drop.y = window.innerHeight - drop.size * 0.6;
                drop.speedY *= -1;
            }

            drop.element.style.transform = `translate(${drop.x}px, ${drop.y}px)`;
        });

        requestAnimationFrame(animateDrops);
    }

    animateDrops();
});
