const blocks = [
  { title: "Название 1", image: "./img/img1.png", category: "Сайт-визитка" },
  { title: "Название 2", image: "./img/img1.png", category: "Многостраничный сайт" },
  { title: "Название 3", image: "./img/img1.png", category: "Корпоративный сайт" },
  { title: "Название 4", image: "./img/img1.png", category: "Интернет-магазин" },
  { title: "Название 5", image: "./img/img1.png", category: "Сайт-визитка" },
  { title: "Название 6", image: "./img/img1.png", category: "Многостраничный сайт" },
  { title: "Название 7", image: "./img/img1.png", category: "Корпоративный сайт" },
  { title: "Название 8", image: "./img/img1.png", category: "Интернет-магазин" },
];

function initializeTabs() {
  const categories = [
    "Все",
    "Сайт-визитка",
    "Многостраничный сайт",
    "Корпоративный сайт",
    "Интернет-магазин",
  ];

  categories.forEach(cat => {
    const container = document.getElementById(cat === "Все" ? "all" : cat);
    if (container) {
      const filteredBlocks = cat === "Все" ? blocks : blocks.filter(b => b.category === cat);
      container.innerHTML = filteredBlocks
        .map(
          block =>
            `<div class="tab_block"><img src="${block.image}" alt="${block.title}"><h3>${block.title}</h3></div>`
        )
        .join("");
    }
  });

  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function () {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(this.dataset.tab).classList.add("active");
    });
  });
}

initializeTabs();

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.querySelector(".blobs-container");
//   const numBlobs = 30;

//   function updateContainerHeight() {
//     container.style.height = `${document.documentElement.scrollHeight}px`; // Подстраиваемся под весь контент
//   }

//   const blobs = [];

//   for (let i = 0; i < numBlobs; i++) {
//     const blob = document.createElement("div");
//     blob.classList.add("blob");

//     const size = Math.random() * 200 + 150;
//     blob.style.width = `${size}px`;
//     blob.style.height = `${size}px`;
//     blob.style.top = `${Math.random() * document.documentElement.scrollHeight}px`;
//     blob.style.left = `${Math.random() * 100}vw`;

//     container.appendChild(blob);
//     blobs.push(blob);
//   }

//   function animateBlobs() {
//     blobs.forEach(blob => {
//       const newX = Math.random() * 100;
//       const newY = Math.random() * document.documentElement.scrollHeight;

//       blob.style.transform = `translate(${newX - 50}vw, ${newY - parseInt(blob.style.top)}px)`;
//     });

//     setTimeout(animateBlobs, 6000);
//   }

//   updateContainerHeight();
//   window.addEventListener("resize", updateContainerHeight);
//   window.addEventListener("scroll", updateContainerHeight);

//   animateBlobs();
// });
